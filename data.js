// Clean categories map framework blueprint

const AVAILABLE_CATEGORIES = [
    "AirPods", "Bluetooth Speakers", "Chargers", "Earbuds", "Fast Chargers", 
    "Gaming Accessories", "Headphones", "Smart Watches", "Smartphones", "USB Cables"
];

function generateCoreEcomOneHundredUniqueProducts() {
    let datasetList = [];

    for (let i = 1; i <= 105; i++) {
        let currentCategory = AVAILABLE_CATEGORIES[(i - 1) % AVAILABLE_CATEGORIES.length];
        let randomPriceValue = Math.floor(999 + ((i * 473) % 45000));
        let limitedDropStockAmount = (i % 7 === 0) ? Math.floor(1 + (i % 3)) : Math.floor(3 + (i % 9));
        
        let completelyUniqueImageSource = `https://images.unsplash.com/photo-${1500000000000 + (i * 72413)}?auto=format&fit=crop&w=500&q=80&sig=${i}`;

        let finalizedProductName = `${currentCategory} Ultra-Pro Gen-${i}`;
        if (i === 1) {
            finalizedProductName = "OnePlus Away Mini";
            currentCategory = "Earbuds";
            completelyUniqueImageSource = "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80";
        } else if (i === 2) {
            finalizedProductName = "OnePlus Training Max";
            currentCategory = "Earbuds";
            completelyUniqueImageSource = "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=500&q=80";
        }

        datasetList.push({
            id: i,
            name: finalizedProductName,
            category: currentCategory,
            price: randomPriceValue,
            stock: limitedDropStockAmount,
            image: completelyUniqueImageSource,
            description: `Exclusive limited drop premium release specs for ${finalizedProductName}. Designed with structural premium acoustics framework features.`
        });
    }
    return datasetList;
}

const STORE_PRODUCTS_ARRAY = generateCoreEcomOneHundredUniqueProducts();