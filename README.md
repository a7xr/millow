# Real Estate NFT DApp

## Technology Stack & Tools

- Solidity (Writing Smart Contracts & Tests)
- Javascript (React & Testing)
- [Hardhat](https://hardhat.org/) (Development Framework)
- [Ethers.js](https://docs.ethers.io/v5/) (Blockchain Interaction)
- [React.js](https://reactjs.org/) (Frontend Framework)

## Requirements For Initial Setup
- Install [NodeJS](https://nodejs.org/en/)

## Setting Up
### 1. Clone/Download the Repository

### 2. Install Dependencies:
`$ npm install`

### 3. Run tests
`$ npx hardhat test`

### 4. Start Hardhat node
`$ npx hardhat node`

### 5. Run deployment script
In a separate terminal execute:
`$ npx hardhat run ./scripts/deploy.js --network localhost`

### 7. Start frontend
`$ npm run start`

1:
- [buyer, seller, inspector, lender] = await ethers.getSigners();
- buyer(0) > Buy
- - deposit 10ETH (Confirm) + Approval (Confirm)
- - - He has (Contract interaction + Approve Sale) OK
- inspector(2) > Approve inspection (Confirm)
- - Contraction interaction (green)

- lender(3) > Approve & lend
- - Approve (Confirm)
- - Lending (Confirm)
- - Approve Sale (green), Contraction interaction (green)
- seller(1) > Approve & sell
- - Approve (Confirm)
- - Sell (Confirm)
