const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    // コントラクトのデプロイ
    const Greeter = await ethers.getContractFactory("Greeter");
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();

    // 初期設定が期待通りか検証
    expect(await greeter.greet()).to.equal("Hello, world!");

    // 値を変更
    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // トランザクションが通るまで待機
    await setGreetingTx.wait();

    // 値が変わっているか検証
    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});