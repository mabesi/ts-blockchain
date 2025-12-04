# TS Blockchain

A blockchain prototype implemented in TypeScript.

## :speech_balloon: Description

TS Blockchain is a prototype of a blockchain system built with Node.js and TypeScript. It implements the core concepts of a blockchain, including block structure, chain validation, and a Proof of Work (PoW) consensus algorithm. It also provides a REST API to interact with the blockchain and a miner client to mine new blocks.

![TS Blockchain Banner](./banner.png)

## Table of contents

- [Features](#features)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Usage](#usage)
  - [Testing](#testing)
- [Back Matter](#back-matter)
  - [Acknowledgements](#acknowledgements)
  - [Contributing](#contributing)
  - [Authors & Contributors](#authors-&-contributors)
  - [Legal Disclaimer](#legal-disclaimer)
  - [License](#license)

## Features

These are the key features of TS Blockchain:

- **Blockchain Logic**: Implements a linked list of blocks with cryptographic hashes.
- **Proof of Work**: Includes a mining mechanism with adjustable difficulty.
- **Validation**: Ensures the integrity of the blockchain and individual blocks.
- **REST API**: Provides endpoints to check status, retrieve blocks, and submit mined blocks.
- **Miner Client**: A client script to perform mining operations and submit valid blocks to the server.

## Built With

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [Crypto-js](https://github.com/brix/crypto-js)
- [Jest](https://jestjs.io/)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher recommended)

### Installation

Clone the repository on your local machine and enter the project folder:

```bash
$ git clone https://github.com/mabesi/ts-blockchain.git
$ cd ts-blockchain
```

Install the dependencies using npm:

```bash
$ npm install
```

### Configuration

Create a `.env` file based on the `.env.example` file and adjust the values if necessary:

```bash
BLOCKCHAIN_SERVER=http://localhost:3000/

BLOCKCHAIN_PORT=3000

MINER_WALLET=0x1234567890
```

### Usage

**1. Start the Blockchain Server:**

This command starts the REST API server that manages the blockchain.

```bash
$ npm run blockchain
```

The server will start running at `http://localhost:3000` (or the port defined in your `.env`).

**2. Start the Miner:**

In a separate terminal window, run the miner client to start mining new blocks.

```bash
$ npm run miner
```

The miner will fetch the next block info from the server, perform the Proof of Work, and submit the mined block back to the server.

### Testing

To run the unit tests:

```bash
$ npm test
```

## Back Matter

### Acknowledgements

- [LuizTools](https://www.luiztools.com.br/) - For the guidance and educational resources on blockchain development.

### Contributing

Please first ask us for the details of code of conduct. After this follow these steps of the process for submitting pull requests to us.

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -am 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request :sunglasses:

### Authors & Contributors

| [<img loading="lazy" src="https://github.com/mabesi/mabesi/blob/master/octocat-mabesi.png" width=115><br><sub>Plinio Mabesi</sub>](https://github.com/mabesi) |
| :---: |

### Legal Disclaimer

<p align="justify">The use of this tool, for any purpose, will occur at your own risk, being your sole responsibility for any legal implications arising from it.</p>
<p align="justify">It is also the end user's responsibility to know and obey all applicable local, state and federal laws. Developers take no responsibility and are not liable for any misuse or damage caused by this program.</p>

### License

This project is licensed under the [MIT License](LICENSE).
