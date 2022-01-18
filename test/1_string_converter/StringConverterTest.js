const StringConverter = artifacts.require("StringConverter");

contract('String Converter', async (accounts) => {
    let instance;

    beforeEach(async () => {
        instance = await StringConverter.deployed();
    });

    describe('stringToBytes32', async () => {
        it("Matching stringToBytes32(\"Sample string\")", async () => {
            let answer = await instance.stringToBytes32("Sample string");
            assert.equal(answer, "0x53616d706c6520737472696e6700000000000000000000000000000000000000");
        });
        it("Matching stringToBytes32(\"\")", async () => {
            let answer = await instance.stringToBytes32("");
            assert.equal(answer, "0x0");
        });
    });
});