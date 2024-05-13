require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("./tasks/test");
require("solidity-coverage");

/** @type import('hardhat/config').HardhatUserConfig */

const {
    ALCHEMY_API_KEY = "",
    PRIVATE_KEY = "",
    ETHERSCAN_API_KEY = "",
    COINMARKETCAP_API_KEY = "",
} = process.env;

module.exports = {
    solidity: "0.8.24",
    defaultNetwork: "hardhat",
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
    gasReporter: {
        enabled: true,
        outputFile: "gas-reports.txt",
        noColor: true,
        currency: "USD",
        coinmarketcap: COINMARKETCAP_API_KEY,
        token: "MATIC",
    },
};
