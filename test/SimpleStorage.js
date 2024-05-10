const {
    loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");

describe("SimpleStorage", function () {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.
    async function deploy() {
        // Contracts are deployed using the first signer/account by default
        const [owner, otherAccount] = await ethers.getSigners();

        const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
        const simpleStorage = await SimpleStorage.deploy();

        return { simpleStorage, owner, otherAccount };
    }

    describe("Deployment", function () {
        it("Should unset favoriteNumber", async function () {
            const { simpleStorage } = await loadFixture(deploy);

            expect(await simpleStorage.favoriteNumber).to.equal(undefined);
        });

        it("Should unset people", async function () {
            const { simpleStorage } = await loadFixture(deploy);

            expect(await simpleStorage.people.length).to.equal(+0);
        });
    });
});
