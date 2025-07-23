const AllProducts = [
    {
        id: 1,
        name: "Luxury Watch 1",
        description: "A beautifully crafted timepiece combining elegance and innovation.",
        price: 234,
        discountPrice: 655,
        category: "Chrono Gate",
        img: "/Products/Images/Watch-1.png",
        isPopular: true,
        bgImg: "/Products/Images/Watch-2-bg.webp",
        rating: 1,
        specifications: {
            movement: "Modified MIYOTA 9039",
            energyStorage: "38 hours",
            caseSize: "38mm",
            material: "Rubber Strap",
            lens: "Sapphire Crystal Glass",
            waterResistance: "50 Meter Waterproof",
            strap: "20mm wide (buckle: 18mm)"
        },
        relatedImages: [
            "/Products/Images/Watch-2-related.webp",
            "/Products/Images/Watch-2-related2.webp",
            "/Products/Images/Watch-2-related3.webp"
        ]
    },
    {
        id: 2,
        name: "Luxury Watch 2",
        description: "A beautifully crafted timepiece combining elegance and innovation.",
        price: 344,
        discountPrice: 455,
        category: "Chrono Gate",
        img: "/Products/Images/Watch-2.png",
        bgImg: "/Products/Images/Watch-2-bg.webp",
        rating: 2,
        isPopular: true,
        specifications: {
            movement: "Modified MIYOTA 9039",
            energyStorage: "38 hours",
            caseSize: "38mm",
            material: "Leather Strap",
            lens: "Sapphire Crystal Glass",
            waterResistance: "50 Meter Waterproof",
            strap: "20mm wide (buckle: 18mm)"
        },
        relatedImages: [
            "/Products/Images/Watch-2-related.webp",
            "/Products/Images/Watch-2-related2.webp",
            "/Products/Images/Watch-2-related3.webp"
        ]
    },
    {
        id: 3,
        name: "Luxury Watch 3",
        category: "Chrono Gate",
        description: "A beautifully crafted timepiece combining elegance and innovation.",
        price: 656,
        discountPrice: 799,
        img: "/Products/Images/Watch-3.png",
        bgImg: "/Products/Images/Watch-2-bg.webp",
        rating: 3,
        isPopular: true,
        specifications: {
            movement: "Modified MIYOTA 9039",
            energyStorage: "38 hours",
            caseSize: "38mm",
            material: "Leather Strap",
            lens: "Sapphire Crystal Glass",
            waterResistance: "50 Meter Waterproof",
            strap: "20mm wide (buckle: 18mm)"
        },
        relatedImages: [
            "/Products/Images/Watch-2-related.webp",
            "/Products/Images/Watch-2-related2.webp",
            "/Products/Images/Watch-2-related3.webp"
        ]
    },
    {
        id: 4,
        name: "Luxury Watch 4",
        description: "A beautifully crafted timepiece combining elegance and innovation.",
        price: 355,
        discountPrice: 566,
        category: "Tide X",
        img: "/Products/Images/Watch-4.png",
        bgImg: "/Products/Images/Watch-2-bg.webp",
        rating: 4,
        specifications: {
            movement: "Modified MIYOTA 9039",
            energyStorage: "38 hours",
            caseSize: "38mm",
            material: "Leather Strap",
            lens: "Sapphire Crystal Glass",
            waterResistance: "50 Meter Waterproof",
            strap: "20mm wide (buckle: 18mm)"
        },
        relatedImages: [
            "/Products/Images/Watch-2-related.webp",
            "/Products/Images/Watch-2-related2.webp",
            "/Products/Images/Watch-2-related3.webp"
        ]
    },
    {
        id: 5,
        name: "Luxury Watch 5",
        description: "A beautifully crafted timepiece combining elegance and innovation.",
        price: 435,
        discountPrice: 560,
        category: "Tide X",
        img: "/Products/Images/Watch-5.png",
        bgImg: "/Products/Images/Watch-5-bg.webp",
        rating: 5,
        specifications: {
            movement: "Modified MIYOTA 9039",
            energyStorage: "38 hours",
            caseSize: "42mm",
            material: "Ceramic",
            material: "316L Stainless Steel or Titanium",
            lens: "Sapphire Crystal Glass",
            waterResistance: "50 Meter Waterproof",
            strap: "20mm wide (buckle: 18mm)"
        },
        relatedImages: [
            "/Products/Images/Watch-5-related.png",
            "/Products/Images/Watch-5-related2.avif",
            "/Products/Images/Watch-5-related3.avif"
        ]
    },
    {
        id: 6,
        name: "Luxury Watch 6",
        description: "A beautifully crafted timepiece combining elegance and innovation.",
        price: 234,
        discountPrice: 456,
        category: "Tide X",
        img: "/Products/Images/Watch-6.png",
        bgImg: "/Products/Images/Watch-5-bg.webp",
        rating: 1,
        isPopular: true,
        specifications: {
            movement: "Modified MIYOTA 9039",
            energyStorage: "38 hours",
            caseSize: "42mm",
            material: "Ceramic",
            material: "316L Stainless Steel or Titanium",
            lens: "Sapphire Crystal Glass",
            waterResistance: "50 Meter Waterproof",
            strap: "20mm wide (buckle: 18mm)"
        },
        relatedImages: [
            "/Products/Images/Watch-5-related.png",
            "/Products/Images/Watch-5-related2.avif",
            "/Products/Images/Watch-5-related3.avif"
        ]
    },
    {
        id: 7,
        name: "Luxury Watch 7",
        description: "A beautifully crafted timepiece combining elegance and innovation.",
        price: 232,
        discountPrice: 456,
        category: "King",
        img: "/Products/Images/Watch-7.png",
        bgImg: "/Products/Images/Watch-5-bg.webp",
        isPopular: true,
        rating: 2,
        specifications: {
            movement: "Modified MIYOTA 9039",
            energyStorage: "38 hours",
            caseSize: "42mm",
            material: "Ceramic",
            lens: "Sapphire Crystal Glass",
            waterResistance: "50 Meter Waterproof",
            strap: "20mm wide (buckle: 18mm)"
        },
        relatedImages: [
            "/Products/Images/Watch-5-related.png",
            "/Products/Images/Watch-5-related2.avif",
            "/Products/Images/Watch-5-related3.avif"
        ]
    },
    {
        id: 8,
        name: "Luxury Watch 8",
        description: "A beautifully crafted timepiece combining elegance and innovation.",
        price: 232,
        discountPrice: 564,
        category: "Coral Steward",
        img: "/Products/Images/Watch-8.png",
        bgImg: "/Products/Images/Watch-8-bg.webp",
        rating: 3,
        specifications: {
            movement: "Modified MIYOTA 9039",
            energyStorage: "38 hours",
            caseSize: "46mm",
            material: "Stainless Steel",
            lens: "Sapphire Crystal Glass",
            waterResistance: "50 Meter Waterproof",
            strap: "20mm wide (buckle: 18mm)"
        },
        relatedImages: [
            "/Products/Images/Watch-8-related.webp",
            "/Products/Images/Watch-8-related2.webp",
            "/Products/Images/Watch-8-related3.webp"
        ]
    },
    {
        id: 9,
        name: "Luxury Watch 9",
        description: "A beautifully crafted timepiece combining elegance and innovation.",
        price: 234,
        discountPrice: 754,
        category: "Coral Steward",
        img: "/Products/Images/Watch-9.png",
        bgImg: "/Products/Images/Watch-8-bg.webp",
        rating: 4,
        isPopular: true,
        specifications: {
            movement: "Modified MIYOTA 9039",
            energyStorage: "38 hours",
            caseSize: "46mm",
            material: "Stainless Steel",
            lens: "Sapphire Crystal Glass",
            waterResistance: "50 Meter Waterproof",
            strap: "20mm wide (buckle: 18mm)"
        },
        relatedImages: [
            "/Products/Images/Watch-8-related.webp",
            "/Products/Images/Watch-8-related2.webp",
            "/Products/Images/Watch-8-related3.webp"
        ]
    },
    {
        id: 10,
        name: "Luxury Watch 10",
        description: "A beautifully crafted timepiece combining elegance and innovation.",
        price: 343,
        discountPrice: 544,
        category: "Roto",
        img: "/Products/Images/Watch-10.png",
        bgImg: "/Products/Images/Watch-8-bg.webp",
        rating: 5,
        specifications: {
            movement: "Modified MIYOTA 9039",
            energyStorage: "38 hours",
            caseSize: "46mm",
            material: "Stainless Steel",
            lens: "Sapphire Crystal Glass",
            waterResistance: "50 Meter Waterproof",
            strap: "20mm wide (buckle: 18mm)"
        },
        relatedImages: [
            "/Products/Images/Watch-8-related.webp",
            "/Products/Images/Watch-8-related2.webp",
            "/Products/Images/Watch-8-related3.webp"
        ]
    },

];


export { AllProducts }