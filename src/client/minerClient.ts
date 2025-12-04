import dotenv from 'dotenv';
dotenv.config();

import axios from 'axios';
import Block from '../lib/block';
import BlockInfo from '../lib/blockinfo';

const BLOCKCHAIN_SERVER = process.env.BLOCKCHAIN_SERVER;
const minerWallet = {
    privateKey: "123456",
    publicKey: `${process.env.MINER_WALLET}`
}

console.log("Logged as " + minerWallet.publicKey);
console.log("-----------------------------------");

let totalMined = 0;

async function mine() {

    console.log("Buscando informações do próximo bloco...");

    const { data } = await axios.get(`${BLOCKCHAIN_SERVER}blocks/next`)
    const blockInfo = data as BlockInfo;
    const newBlock = Block.fromBlockInfo(blockInfo);

    //TODO: adicionar tx de recompensa

    console.log("Iniciando mineração do bloco #" + blockInfo.index);
    newBlock.mine(blockInfo.difficulty, minerWallet.publicKey);

    console.log("Bloco minerado! Enviando para a Blockchain...");

    try {

        await axios.post(`${BLOCKCHAIN_SERVER}blocks/`,newBlock);
        console.log("Bloco enviado e aceito pela Blockchain!");
        console.log(" --> Hash do Bloco: " + newBlock.hash);
        console.log("");
        
        totalMined++;
        console.log("Total de blocos minerados: " + totalMined);

    } catch (err: any) {
        console.error(err.response ? err.response.data : err.message);
    }

    setTimeout(() => {
        mine();
    },1000);

}

mine()