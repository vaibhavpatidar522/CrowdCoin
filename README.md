# CrowdCoin

## Requirements For Initial Setup
- Install [NodeJS](https://nodejs.org/en/)

## Setting Up
### 1. Clone/Download the Repository

### 2. Install Dependencies:
`$ npm install`

### 3. Add 12-word mnemonic phrase
in ethereum/deploy.js add 12-word mnemonic phrase string in line 7

### 4. Add Infura API endpoint
in ethereum/deploy.js add infura api link in line 9

### 4. Compile  
`$ cd ethereum
`$ node compile.js

### 5. Deploy 
`$ node deploy.js


### 5. Add deployed contract address to factory
Copy the address received  in terminal after deploy and past in ethereum/factory.js line 6


### 6. Start frontend

`$ cd ..`
`$ npm start`