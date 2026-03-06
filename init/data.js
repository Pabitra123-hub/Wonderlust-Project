const sampleListings = [

{
title: "Cozy Beachfront Cottage",
description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
image:{ filename:"listingimage", url:"https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60"},
price:1500,
location:"Malibu",
country:"United States",
geometry:{ type:"Point", coordinates:[-118.7798,34.0259] }
},

{
title:"Modern Loft in Downtown",
description:"Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
image:{ filename:"listingimage", url:"https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60"},
price:1200,
location:"New York City",
country:"United States",
geometry:{ type:"Point", coordinates:[-74.0060,40.7128] }
},

{
title:"Mountain Retreat",
description:"Unplug and unwind in this peaceful mountain cabin. Surrounded by nature.",
image:{ filename:"listingimage", url:"https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60"},
price:1000,
location:"Aspen",
country:"United States",
geometry:{ type:"Point", coordinates:[-106.8370,39.1911] }
},

{
title:"Historic Villa in Tuscany",
description:"Experience the charm of Tuscany in this beautifully restored villa.",
image:{ filename:"listingimage", url:"https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60"},
price:2500,
location:"Florence",
country:"Italy",
geometry:{ type:"Point", coordinates:[11.2558,43.7696] }
},

{
title:"Secluded Treehouse Getaway",
description:"Live among the treetops in this unique treehouse retreat.",
image:{ filename:"listingimage", url:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=60"},
price:800,
location:"Portland",
country:"United States",
geometry:{ type:"Point", coordinates:[-122.6765,45.5231] }
},

{
title:"Beachfront Paradise",
description:"Step onto the sandy beach from this beautiful beachfront condo.",
image:{ filename:"listingimage", url:"https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=60"},
price:2000,
location:"Cancun",
country:"Mexico",
geometry:{ type:"Point", coordinates:[-86.8515,21.1619] }
},

{
title:"Rustic Cabin by the Lake",
description:"Fishing and kayaking paradise with peaceful lake views.",
image:{ filename:"listingimage", url:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60"},
price:900,
location:"Lake Tahoe",
country:"United States",
geometry:{ type:"Point", coordinates:[-120.0324,39.0968] }
},

{
title:"Luxury Penthouse with City Views",
description:"Panoramic skyline views from this stunning penthouse.",
image:{ filename:"listingimage", url:"https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?auto=format&fit=crop&w=800&q=60"},
price:3500,
location:"Los Angeles",
country:"United States",
geometry:{ type:"Point", coordinates:[-118.2437,34.0522] }
},

{
title:"Ski-In/Ski-Out Chalet",
description:"Hit the slopes directly from your doorstep in the Swiss Alps.",
image:{ filename:"listingimage", url:"https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60"},
price:3000,
location:"Verbier",
country:"Switzerland",
geometry:{ type:"Point", coordinates:[7.2265,46.0961] }
},

{
title:"Safari Lodge in the Serengeti",
description:"Experience wildlife and the great migration up close.",
image:{ filename:"listingimage", url:"https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=60"},
price:4000,
location:"Serengeti National Park",
country:"Tanzania",
geometry:{ type:"Point", coordinates:[34.8322,-2.3333] }
},

{
title:"Historic Canal House",
description:"Stay in a beautiful historic canal house in Amsterdam.",
image:{ filename:"listingimage", url:"https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60"},
price:1800,
location:"Amsterdam",
country:"Netherlands",
geometry:{ type:"Point", coordinates:[4.9041,52.3676] }
},

{
title:"Private Island Retreat",
description:"Enjoy an entire island to yourself with ultimate privacy.",
image:{ filename:"listingimage", url:"https://images.unsplash.com/photo-1618140052121-39fc6db33972?auto=format&fit=crop&w=800&q=60"},
price:10000,
location:"Fiji",
country:"Fiji",
geometry:{ type:"Point", coordinates:[178.0650,-17.7134] }
},

{
title:"Charming Cottage in the Cotswolds",
description:"Quaint cottage with traditional thatched roof.",
image:{ filename:"listingimage", url:"https://images.unsplash.com/photo-1602088113235-229c19758e9f?auto=format&fit=crop&w=800&q=60"},
price:1200,
location:"Cotswolds",
country:"United Kingdom",
geometry:{ type:"Point", coordinates:[-1.8433,51.8330] }
},

{
title:"Historic Brownstone in Boston",
description:"Elegant historic home in the heart of Boston.",
image:{ filename:"listingimage", url:"https://images.unsplash.com/photo-1533619239233-6280475a633a?auto=format&fit=crop&w=800&q=60"},
price:2200,
location:"Boston",
country:"United States",
geometry:{ type:"Point", coordinates:[-71.0589,42.3601] }
},

{
title:"Beachfront Bungalow in Bali",
description:"Relax with private pool and ocean breeze.",
image:{ filename:"listingimage", url:"https://images.unsplash.com/photo-1602391833977-358a52198938?auto=format&fit=crop&w=800&q=60"},
price:1800,
location:"Bali",
country:"Indonesia",
geometry:{ type:"Point", coordinates:[115.1889,-8.4095] }
},

{
title:"Mountain View Cabin in Banff",
description:"Beautiful mountain views in the Canadian Rockies.",
image:{ filename:"listingimage", url:"https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?auto=format&fit=crop&w=800&q=60"},
price:1500,
location:"Banff",
country:"Canada",
geometry:{ type:"Point", coordinates:[-115.5708,51.1784] }
},

{
title:"Art Deco Apartment in Miami",
description:"Stylish apartment in South Beach.",
image:{ filename:"listingimage", url:"https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?auto=format&fit=crop&w=800&q=60"},
price:1600,
location:"Miami",
country:"United States",
geometry:{ type:"Point", coordinates:[-80.1918,25.7617] }
},

{
title:"Tropical Villa in Phuket",
description:"Luxury villa with infinity pool in Phuket.",
image:{ filename:"listingimage", url:"https://images.unsplash.com/photo-1470165301023-58dab8118cc9?auto=format&fit=crop&w=800&q=60"},
price:3000,
location:"Phuket",
country:"Thailand",
geometry:{ type:"Point", coordinates:[98.3381,7.8804] }
},

{
title:"Historic Castle in Scotland",
description:"Live like royalty in the Scottish Highlands.",
image:{ filename:"listingimage", url:"https://images.unsplash.com/photo-1585543805890-6051f7829f98?auto=format&fit=crop&w=800&q=60"},
price:4000,
location:"Scottish Highlands",
country:"United Kingdom",
geometry:{ type:"Point", coordinates:[-4.2026,57.1200] }
},

{
title:"Desert Oasis in Dubai",
description:"Luxury oasis with private pool in the desert.",
image:{ filename:"listingimage", url:"https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=60"},
price:5000,
location:"Dubai",
country:"United Arab Emirates",
geometry:{ type:"Point", coordinates:[55.2708,25.2048] }
},

{
title:"Rustic Log Cabin in Montana",
description:"Cozy cabin surrounded by nature.",
image:{ filename:"listingimage", url:"https://images.unsplash.com/photo-1586375300773-8384e3e4916f?auto=format&fit=crop&w=800&q=60"},
price:1100,
location:"Montana",
country:"United States",
geometry:{ type:"Point", coordinates:[-110.3626,46.8797] }
},

{
title:"Beachfront Villa in Greece",
description:"Crystal clear Mediterranean waters.",
image:{ filename:"listingimage", url:"https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&w=800&q=60"},
price:2500,
location:"Mykonos",
country:"Greece",
geometry:{ type:"Point", coordinates:[25.3289,37.4467] }
},

{
title:"Modern Apartment in Tokyo",
description:"Stay in the vibrant heart of Tokyo.",
image:{ filename:"listingimage", url:"https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=800&q=60"},
price:2000,
location:"Tokyo",
country:"Japan",
geometry:{ type:"Point", coordinates:[139.6503,35.6762] }
}

];

module.exports = { data: sampleListings };