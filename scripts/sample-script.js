// このスクリプトはhardhatコマンドを通して実行する必要があります。
const hre = require("hardhat");

async function main() {
  // Hardhatは実行前にコンパイルを行ってくれます。
  // 明示的に行いたい場合は以下の用にしてください。
  // await hre.run('compile');

  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello, Hardhat!");

  // コントラクトのデプロイ
  await greeter.deployed();

  // コントラクトのアドレスを表示
  console.log("Greeter deployed to:", greeter.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }
);