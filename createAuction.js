const { Metaplex, keypairIdentity } = require("@metaplex-foundation/js");
const { Connection, clusterApiUrl, Keypair } = require("@solana/web3.js");

// const connection = new Connection(clusterApiUrl("devnet"));
const connection = new Connection(
    ""
);
// const metaplex = new Metaplex(connection);

const myCustomAuthority = Uint8Array.from([
    255, 202, 220, 44, 93, 19, 61, 247, 112, 50, 167, 37, 73, 100, 22, 32, 185,
    162, 143, 33, 49, 88, 184, 240, 164, 60, 195, 114, 233, 192, 47, 198, 190,
    63, 172, 113, 64, 191, 15, 169, 254, 130, 241, 73, 12, 83, 56, 217, 61, 78,
    179, 239, 253, 217, 16, 38, 251, 207, 176, 147, 208, 206, 1, 51,
]);

const wallet = Keypair.fromSecretKey(myCustomAuthority);

// console.log(wallet.publicKey.toBase58())

const metaplex = Metaplex.make(connection).use(keypairIdentity(wallet));
// console.log(metaplex);

async function createAuctionHouseMplex() {
    const auctionHouseSettings = await metaplex.auctionHouse().create({
        sellerFeeBasisPoints: 500, // 5% fee
        authority: metaplex.identity(),
        requireSignOff: true,
        canChangeSalePrice: true,
        hasAuctioneer: true, // to enable auctioneer
        // auctioneerAuthority: metaplex.identity(),
    });

    return auctionHouseSettings;
}

createAuctionHouseMplex()
    .then((x) => console.log(x))
    .catch((e) => console.log(e));
