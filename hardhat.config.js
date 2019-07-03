require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString().trim();


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    networks: {
        hardhat: {
            chainId: 1337,
        },
        mumbai: {
            url: `https://polygon-mumbai.infura.io/v3/${process.env.projectId}`,
            accounts: [privateKey]
        },
        main: {
            url: `https://mainnet.infura.io/v3/${process.env.projectId}`,
            accounts: [privateKey]
        }
    },
    solidity: "0.8.4",
};
