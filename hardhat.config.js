require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("./tasks/block-number");

/** @type import('hardhat/config').HardhatUserConfig */

const { ALCHEMY_API_KEY, PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env;

module.exports = {
    solidity: "0.8.24",
    defaultNetwork: "sepolia",
    networks: {
        hardhat: {},
        sepolia: {
            url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
            accounts: [PRIVATE_KEY],
            allowUnlimitedContractSize: true,
        },
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
};
