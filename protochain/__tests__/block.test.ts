import { describe, test, expect, beforeAll } from '@jest/globals';
import Block from '../src/lib/block';
import BlockInfo from '../src/lib/blockinfo';

describe("Block tests", () => {

    const exampleDifficulty = 0;
    const exampleMiner = "web23";
    let genesis: Block;

    beforeAll(() => {
        genesis = new Block({
            data: "Genesis Block"
        } as Block);
    })
    
    test('Should be valid', () => {
        const block = new Block({
            index: 1,
            previousHash: genesis.hash,
            data: "Block 1"
        } as Block);
        block.mine(exampleDifficulty,exampleMiner);
        const valid = block.isValid(genesis.hash,genesis.index,exampleDifficulty);
        expect(valid.success).toBeTruthy();
    })

    test('Should create from block info', () => {
        const block = Block.fromBlockInfo({
            data: "Block 2",
            difficulty: exampleDifficulty,
            feePerTx: 1,
            index: 1,
            maxDifficulty: 62,
            previousHash: genesis.hash
        } as BlockInfo);
        block.mine(exampleDifficulty,exampleMiner);
        const valid = block.isValid(genesis.hash,genesis.index,exampleDifficulty);
        expect(valid.success).toBeTruthy();
    })

    test('Should NOT be valid (fallbacks)', () => {
        const block = new Block();
        const valid = block.isValid(genesis.hash,genesis.index,exampleDifficulty);
        expect(valid.success).toBeFalsy();
    })

    test('Should NOT be valid (previous hash)', () => {
        const block = new Block({
            index: 1,
            previousHash: "abc",
            data: "Block 1"
        } as Block);
        const valid = block.isValid(genesis.hash,genesis.index,exampleDifficulty);
        expect(valid.success).toBeFalsy();
    })

    test('Should NOT be valid (empty hash)', () => {
        const block = new Block({
            index: 1,
            previousHash: genesis.hash,
            data: "Block 1"
        } as Block);
        block.mine(exampleDifficulty,exampleMiner);
        block.hash = "";
        const valid = block.isValid(genesis.hash,genesis.index,exampleDifficulty);
        expect(valid.success).toBeFalsy();
    })

    test('Should NOT be valid (invalid hash)', () => {
        const block = new Block({
            index: 1,
            previousHash: genesis.hash,
            data: "Block 1"
        } as Block);
        block.mine(exampleDifficulty,exampleMiner);
        block.hash = "abc";
        const valid = block.isValid(genesis.hash,genesis.index,exampleDifficulty);
        expect(valid.success).toBeFalsy();
    })

    test('Should NOT be valid (no mined)', () => {
        const block = new Block({
            index: 1,
            previousHash: genesis.hash,
            data: "Block 1"
        } as Block);
        block.nonce = 0;
        const valid = block.isValid(genesis.hash,genesis.index,exampleDifficulty);
        expect(valid.success).toBeFalsy();
    })

    test('Should NOT be valid (timestamp)', () => {
        const block = new Block({
            index: 1,
            previousHash: genesis.hash,
            data: "Block 1"
        } as Block);
        block.timestamp = -1;
        block.hash = block.getHash();
        const valid = block.isValid(genesis.hash,genesis.index,exampleDifficulty);
        expect(valid.success).toBeFalsy();
    })

    test('Should NOT be valid (data)', () => {
        const block = new Block({
            index: 1,
            previousHash: genesis.hash,
            data: ""
        } as Block);
        const valid = block.isValid(genesis.hash,genesis.index,exampleDifficulty);
        expect(valid.success).toBeFalsy();
    })

    test('Should NOT be valid (index)', () => {
        const block = new Block({
            index: -1,
            previousHash: genesis.hash,
            data: "Block 1"
        } as Block);
        const valid = block.isValid(genesis.hash,genesis.index,exampleDifficulty);
        expect(valid.success).toBeFalsy();
    })

}) 