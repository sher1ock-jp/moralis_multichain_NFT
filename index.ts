const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

const runApp = async () => {
  await Moralis.start({
    apiKey: "HPww5wkdwitpN1EU8voNzs2NJHuuMwhD5HXtnRf2rRChCdwEqDnaBtTUEs5tdv8g",
    // ...and any other configuration
  });

  const allNFTs = [];

  const address = "0x1CA2E50Ba6E3E62f7b108BD32A6BD9e71a82cD77";

  const chains = [EvmChain.ETHEREUM, EvmChain.BSC, EvmChain.POLYGON];

  for (const chain of chains) {
    const response = await Moralis.EvmApi.nft.getWalletNFTs({
      address,
      chain,
    });

    allNFTs.push(response.toJSON());
    console.log(response.toJSON());
  }

  // console.log(allNFTs);
};

runApp();


