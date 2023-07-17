const products = [
    {
        asin: 'B08H8VZ6PV',
        productName: 'Google Pixel',
        sku: 'SKU001',
        price: 19.99,
        image: 'https://m.media-amazon.com/images/I/411wOTpPu5L._AC_SY879_.jpg',
        description: `Meet Pixel 4a with 5G, the essential Google phone. It has the helpful stuff you need in a cell phone,
         with an extra boost of 5G speed. So you can download a movie in seconds, enjoy smooth streaming, and play your favorite games.
          Pixel 4a with 5G also takes amazing ultrawide photos in any light, keeps your data safe, blocks robocalls, 
          and has an all-day battery that can last up to 48 hours with Extreme Battery Saver. It’s a lot of help from Google, 
          for a lot less than you’d expect. And it’s an unlocked smartphone, so you can choose the data plan and carrier that work 
          for you.  [1] Works with all major carriers. Contact carrier for details. 5G service is carrier dependent. [2] Requires a 5G data plan 
          (sold separately). 5G service and roaming not available on all carrier networks or in all areas. Contact carrier for details about current
           5G network performance, compatibility, and availability. Phone connects to 5G networks, but 5G service, speed, and performance depend on many
            factors including, but not limited to, carrier network capabilities, device configuration and capabilities, network traffic, location, signal 
            strength, and signal obstruction. Actual results may vary. Some features not available in all areas. Data rates may apply.  [3] Download speed 
            claims based on testing videos from three streaming platforms. Average download time was less than sixty seconds. File sizes varied between 449MB 
            and 1.3GB. Download speed depends upon many factors, such as file size, content provider and network connection. Testing conducted in an internal 
            5G network lab and on pre-production hardware in California in July/August 2020. Actual download speeds may be slower. [4] Enabling gameplay with 
            cellular data may increase your mobile data usage up to 2.7GB/hr. Gameplay is service-, network-, connection-, and game-dependent, and may not be 
            available for all games in all areas. Users may experience inconsistent gameplay. Stadia requires account creation. [5] Hotspot capability 
            subject to carrier plan.  [6] For “All day”: Maximum battery life based on testing using a mix of talk, data, standby, and use of other features. 
            Testing conducted on two major carrier networks using Sub-6 GHz non-standalone 5G (ENDC) connectivity. For “Up to 48 hours”: Maximum battery life 
            based on testing using a mix of talk, data, standby, and use of limited other features that are default in Extreme Battery Saver mode (which 
                disables various features including 5G connectivity). Testing conducted on two major carrier networks. For both claims: Pixel 4a (5G) and 
                Pixel 5 battery testing conducted by a third party in California in mid 2020 on pre-production hardware and software using default settings, 
                except that, for the “up to 48 hour claim” only, Extreme Battery Saver mode was enabled. Battery life depends upon many factors and usage of 
                certain features will decrease battery life. Actual battery life may be lower. [7] Android version updates for at least 3 years from 
                when the device first became available on the Google Store in the US. [8] US only. English only. Call Screen may not detect all spam 
                calls. [9] Screen sharing not available on group calls. Requires Wi-Fi or 5G internet connection. Not available on all apps and content. 
                Data rates may apply. 5G service, speed and performance depend on many factors including, but not limited to, carrier network capabilities,
                 device configuration and capabilities, network traffic, location, signal strength, and signal obstruction. [10] Some third-party apps and
                  data may not be transferred automatically. [11] Subscriptions may be required. [12] Compared to MSRP of unlocked Pixel 5 phone on the Google
                   Store in the US. Requires a 5G data plan (sold separately). 5G service and roaming not available on all carrier networks or in all areas. 
                   Contact carrier for details about current 5G network performance, compatibility, and availability. Phone connects to 5G networks, but 5G service, 
                   speed, and performance depend on many factors including, but not limited to, carrier network capabilities, device configuration and capabilities, 
                   network traffic, location, signal strength, and signal obstruction. Actual results may vary. Some features not available in all areas. Data 
                   rates may apply.[13] Not available for all apps and content. Display automatically adjusts to optimize for best viewing and battery performance.  
                   [14] Qualcomm Snapdragon is a product of Qualcomm Technologies, Inc. and/or its subsidiaries. Qualcomm and Snapdragon are trademarks of Qualcomm 
                   Incorporated, registered in the United States and other countries. [16] Storage specifications refer to capacity before formatting. Actual 
                   formatted capacity will be less.  [17] Qi-compatible. Wireless charger sold separately. [18] Up to 18W wired charging rates are based upon use of 
                   the included charger plugged into a wall outlet. Actual results may be slower. [19] Charging rates are based upon use of the included charger 
                   plugged into a wall outlet. Actual results may vary. [20] Designed to charge Qi-certified devices. Use of Battery Share significantly reduces 
                   Pixel battery life. Cases may interfere with charging and will reduce charging speed."
        `,
        category: 'Cell Phones & Accessories'
    },
    {
        asin: 'B002XYZ456',
        productName: 'Product 2',
        sku: 'SKU002',
        price: 29.99,
        image: 'https://m.media-amazon.com/images/I/411wOTpPu5L._AC_SY879_.jpg',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        category: 'Books'
    },
    {
        asin: 'B003DEF789',
        productName: 'Product 3',
        sku: 'SKU003',
        price: 9.99,
        image: 'https://m.media-amazon.com/images/I/411wOTpPu5L._AC_SY879_.jpg',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        category: 'Home & Kitchen'
    },
    {
        asin: 'B004GHI012',
        productName: 'Product 4',
        sku: 'SKU004',
        price: 39.99,
        image: 'https://m.media-amazon.com/images/I/411wOTpPu5L._AC_SY879_.jpg',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        category: 'Fashion'
    },
    {
        asin: 'B005JKL345',
        productName: 'Product 5',
        sku: 'SKU005',
        price: 49.99,
        image: 'https://m.media-amazon.com/images/I/411wOTpPu5L._AC_SY879_.jpg',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        category: 'Toys & Games'
    },
    {
        asin: 'B006MNO678',
        productName: 'Product 6',
        sku: 'SKU006',
        price: 14.99,
        image: 'https://m.media-amazon.com/images/I/411wOTpPu5L._AC_SY879_.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        category: 'Sports & Outdoors'
    },
    {
        asin: 'B007PQR901',
        productName: 'Product 7',
        sku: 'SKU007',
        price: 24.99,
        image: 'https://m.media-amazon.com/images/I/411wOTpPu5L._AC_SY879_.jpg',
        description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        category: 'Beauty'
    },
    {
        asin: 'B008STU234',
        productName: 'Product 8',
        sku: 'SKU008',
        price: 79.99,
        image: 'https://m.media-amazon.com/images/I/411wOTpPu5L._AC_SY879_.jpg',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        category: 'Home Improvement'
    },
    {
        asin: 'B009VWX567',
        productName: 'Product 9',
        sku: 'SKU009',
        price: 64.99,
        image: 'https://m.media-amazon.com/images/I/411wOTpPu5L._AC_SY879_.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        category: 'Health & Personal Care'
    },
    {
        asin: 'B00AYZ9012',
        productName: 'Product 10',
        sku: 'SKU010',
        price: 34.99,
        image: 'https://m.media-amazon.com/images/I/411wOTpPu5L._AC_SY879_.jpg',
        description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        category: 'Tools & Home Improvement'
    },
];

export default products;
