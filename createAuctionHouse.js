const { Metaplex } = require('@metaplex/js');
const { Connection, clusterApiUrl } = require('@solana/web3.js');

// Connect to the Solana cluster
const connection = new Connection(clusterApiUrl('devnet'));

// Initialize Metaplex
const metaplex = new Metaplex(connection);

async function createAuctionHouse() {
    // Create the Auction House
    const auctionHouseSettings = await metaplex.auctionHouse().create({
        sellerFeeBasisPoints: 500, // 5% fee
        authority: metaplex.identity(),
        requireSignOff: true,
        canChangeSalePrice: true,
        hasAuctioneer: true,
        auctioneerAuthority: metaplex.identity(),
    });

    console.log('Auction House created:', auctionHouseSettings);

    // Access Auction House attributes
    const { auctionHouse } = auctionHouseSettings;
    console.log('Auction House Address:', auctionHouse.address);
    console.log('Auction House Fee Account:', auctionHouse.auctionHouseFeeAccount);
    console.log('Treasury Mint:', auctionHouse.treasuryMint);
    console.log('Authority:', auctionHouse.authority);
}

// Run the function
createAuctionHouse().catch(console.error);