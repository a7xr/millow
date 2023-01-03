const { expect } = require("chai");
const { ethers } = require("hardhat");

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), "ether");
};

describe("Escrow", () => {
  let buyer, seller, inspector, lender;

  beforeEach(async () => {
    [buyer, seller, inspector, lender] = await ethers.getSigners();
    const RealEstate = await ethers.getContractFactory("RealEstate");
    realEstate = await RealEstate.deploy();
    // console.log(realEstate.address);

    //  https://ipfs.io/ipfs/QmTudSYeM7mz3PkYEWXWqPjomRPHogcMFSq7XAvsvsgAPS
    let transaction = await realEstate
      .connect(seller)
      .mint(
        "https://ipfs.io/ipfs/QmTudSYeM7mz3PkYEWXWqPjomRPHogcMFSq7XAvsvsgAPS"
      );
    await transaction.wait();

    const Escrow = await ethers.getContractFactory("Escrow");
    escrow = await Escrow.deploy(
      realEstate.address,
      seller.address,
      inspector.address,
      lender.address
    );
  });

  describe("Deployment", () => {
    it("Returns NFT Address", async () => {
      const result = await escrow.nftAddress();
      expect(result).to.be.equal(realEstate.address);
    });

    it("Returns Seller", async () => {
      result = await escrow.seller();
      expect(result).to.be.equal(seller.address);
    });

    it("Returns Inspector", async () => {
      result = await escrow.inspector();
      expect(result).to.be.equal(inspector.address);
    });

    it("Returns Lender", async () => {
      result = await escrow.lender();
      expect(result).to.be.equal(lender.address);
    });
  });
});
