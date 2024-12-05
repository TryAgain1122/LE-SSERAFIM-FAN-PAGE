// Updated Videos List
export const videos = [
    {   
        id: 'yunjin-details-1',
        src: '/assets/IntroVideo/yunjinCut5.mp4', 
        name: 'HUH YUNJIN', 
        description: "Huh Yunjin, a South Korean-American singer, is a member of the K-pop group LE SSERAFIM. Born in 2001, she gained attention as a contestant on Produce 48 and debuted with LE SSERAFIM in 2022. Known for her powerful vocals and charisma, Yunjin plays a key role in the group's global appeal.",
    },
    { 
        id: 'sakura-miyawaki-2',
        src: '/assets/IntroVideo/sakuracut2.mp4', 
        name: 'Sakura Miyawaki', 
        description: "Sakura Miyawaki is a Japanese singer and member of LE SSERAFIM. Born in 1998, she was formerly in HKT48, AKB48, and IZ*ONE after Produce 48. In 2022, she debuted with LE SSERAFIM, known for her charm and stage presence.",
    },
    { 
        id: 'kazuha-nakamura-3',
        src: '/assets/IntroVideo/kazuhaCut4.mp4', 
        name: 'Kazuha Nakamura', 
        description: "Kazuha Nakamura, known as Kazuha, is a Japanese singer and dancer in the K-pop group LE SSERAFIM. Born on August 9, 2003, she trained as a professional ballerina before transitioning to K-pop. She debuted with LE SSERAFIM in 2022, quickly gaining attention for her grace, elegance, and strong dance skills, which she brings from her ballet background.",
    },
    { 
        id: 'hong-eunchae-4', 
        src: '/assets/IntroVideo/eunchaCut1.mp4', 
        name: 'Hong Eunchae', 
        description: "Hong Eunchae is a South Korean singer and the youngest member of LE SSERAFIM. Born on November 10, 2006, she debuted with the group in 2022. Eunchae quickly gained attention for her youthful energy, charm, and growing talent as both a vocalist and dancer, making her a standout member of the group.",
    },
    { 
        id: 'kim-chaewoon-5',
        src: '/assets/IntroVideo/chaewoonCut3.mp4', 
        name: 'Kim Chaewon', 
        description: "Kim Chaewon is a South Korean singer and the leader of LE SSERAFIM. Born on August 31, 2000, she previously gained fame as a member of the project group IZ*ONE after participating in Produce 48. Chaewon debuted with LE SSERAFIM in 2022, known for her strong leadership, captivating vocals, and dynamic stage presence, solidifying her role as a prominent figure in the K-pop scene.",
    },
];

// Updated Images List
export const images = [
    {
        id: 'yunjin-details-1',
        src: '/assets/yunjin.jpg'
    },
    {
        id: 'sakura-miyawaki-2',
        src: '/assets/sakura3.jpg'
    },
    {
        id: 'kazuha-nakamura-3',
        src: '/assets/kazuha.jpg'
    }, 
    {
        id: 'hong-eunchae-4',
        src: '/assets/eunchae2.jpg'
    }, 
    {
        id: 'kim-chaewoon-5',
        src: '/assets/chaewoon.jpg'
    }
]

// Updated Member List Image
export const memberListImage = [
    { name: 'HUH YUNJIN', img: '/assets/antifragile/img1.jpeg' },
    { name: 'Sakura Miyawaki', img: '/assets/antifragile/Sakura.jpeg' },
    { name: 'Kazuha Nakamura', img: '/assets/antifragile/kazuha.jpeg' },
    { name: 'Hong Eunchae', img: '/assets/antifragile/eunchae.jpg' },
    { name: 'Kim Chaewon', img: '/assets/antifragile/chaewoon.jpeg' }
]

// Updated Music List
export const musicList = [
    { name: 'Antifragile', music: '/assets/antifragile/logo.jpg' },
    { name: 'Blue flames', music: '/assets/blueFlames/blueFlamesLogo.jpeg' },
    { name: 'Burn the bridge', music: '/assets/burnTheBridge/burnTheBridge.png' },
    { name: 'Crazy', music: '/assets/crazy/crazyLogo.jpg' },
    { name: 'Fearless', music: '/assets/fearless/fearless.png' },
    { name: 'Perfect night', music: '/assets/perfectNight/perfectNight.jpeg' },
    { name: 'Smart', music: '/assets/smart/smartLogo.jpg' },
]

// Define types for the awards data
type AwardItem = {
    title: string;
    categories: string[];
};

type AwardYear = {
    year: number;
    awards: AwardItem[];
};

// Define the AwardsList array with proper typing
export const AwardsList: AwardYear[] = [
    {
        year: 2022,
        awards: [
            {
                title: "Asian Awards",
                categories: [
                    "Best Musician Awards",
                    "Rookie of the Year (MUSIC)"
                ]
            },
            {
                title: "Fun Fact Awards",
                categories: ["Next Leader Awards"]
            }, 
            {
                title: "K-Global Dream Awards",
                categories: [
                    "K-Global Best Music Video Awards",
                    "K-Global Super Rookie Award"
                ]
            }, 
            {
                title: "Mama Awards",
                categories: ["Favorite New Artist"]
            },
            {
                title: "K-Global Heart Dream Awards",
                categories: [
                    "Best Female Performance",
                    "Hot Trend Award"
                ]
            }
        ]
    }, 
    {
        year: 2023,
        awards: [
            {
                title: "Asian Pop Awards",
                categories: ["Top 20 Songs of the Year (Overseas) - UNFORGIVEN"]
            },
            {
                title: "Circle Chart Music Awards",
                categories: [
                    "Artist of the Year – Global Digital Music (May) – 'FEARLESS'",
                    "Artist of the Year – Global Digital Music (October) – 'ANTIFRAGILE'"
                ]
            }, 
            {
                title: "K-Golden Disc Awards",
                categories: ["Rookie Artist of the Year"]
            }, 
            {
                title: "Korea First Brand Awards",
                categories: ["Best Female Rookie Idol"]
            },
            {
                title: "MAMA Awards",
                categories: ["Favorite Dance Performance Female Group"]
            },
            {
                title: "Melon Music Awards",
                categories: ["Millions Top 10 Artist – 'UNFORGIVEN'"]
            }
        ]
    },
    {
        year: 2024,
        awards: [
            {
                title: "Circle Chart Music Awards",
                categories: [
                    "Artist of the Year (Digital) – 'UNFORGIVEN (ft. Nile Rodgers)'",
                    "Artist of the Year (Streaming Unique Listeners) – 'UNFORGIVEN (ft. Nile Rodgers)'"
                ]
            }, 
            {
                title: "Circle Chart Music Awards",
                categories: [
                    "Best Album (Bonsang) – 'UNFORGIVEN'",
                    "Best Digital Song (Bonsang) – 'UNFORGIVEN (ft. Nile Rodgers)'"
                ]
            }, 
            {
                title: "Hanteo Music Awards",
                categories: ["Artist of the Year (Bonsang)"]
            },
            {
                title: "Melon Music Awards",
                categories: ["Millions Top 10 Artist – 'UNFORGIVEN'"]
            }
        ]
    }
];

interface Photo {
    img: string
}

interface PhotoGallery {
    all: Photo[];
    yunjin: Photo[];
    chaewoon: Photo[];
    sakura: Photo[];
    eunchae: Photo[];
    kazuha: Photo[];
}

export const photoGalleryImage: PhotoGallery = {
    all: [
        { img: '/assets/antifragile/1.jpeg' },
        { img: '/assets/antifragile/2.jpeg' },
        { img: '/assets/antifragile/3.jpeg' },
        { img: '/assets/antifragile/4.jpeg' },
        { img: '/assets/antifragile/5.jpeg' },
        { img: '/assets/antifragile/6.jpeg' },
        { img: '/assets/antifragile/7.jpeg' },
        { img: '/assets/antifragile/8.jpeg' },
        { img: '/assets/antifragile/9.jpeg' },
        { img: '/assets/antifragile/chaewoon.jpeg' },
        { img: '/assets/antifragile/eunchae.jpg' },
        { img: '/assets/antifragile/img1.jpeg' },
        { img: '/assets/antifragile/kazuha.jpeg' },
        { img: '/assets/antifragile/logo.jpg' },
        { img: '/assets/antifragile/Sakura.jpeg' },
        { img: '/assets/blueFlames/1.jpeg' },
        { img: '/assets/blueFlames/2.jpeg' },
        { img: '/assets/blueFlames/3.jpeg' },
        { img: '/assets/blueFlames/4.jpeg' },
        { img: '/assets/blueFlames/5.jpeg' },
        { img: '/assets/blueFlames/6.jpeg' },
        { img: '/assets/blueFlames/blueFlamesLogo.jpeg' },
        { img: '/assets/burnTheBridge/1.jpg' },
        { img: '/assets/burnTheBridge/2.jpg' },
        { img: '/assets/burnTheBridge/3.jpg' },
        { img: '/assets/burnTheBridge/4.jpg' },
        { img: '/assets/burnTheBridge/burnTheBridge.png' },
        { img: '/assets/crazy/1.jpeg' },
        { img: '/assets/crazy/2.jpeg' },
        { img: '/assets/crazy/3.jpeg' },
        { img: '/assets/crazy/4.jpeg' },
        { img: '/assets/crazy/5.jpeg' },
        { img: '/assets/crazy/crazyLogo.jpg' },
        { img: '/assets/fearless/1.jpeg' },
        { img: '/assets/fearless/2.jpeg' },
        { img: '/assets/fearless/3.jpeg' },
        { img: '/assets/fearless/4.jpeg' },
        { img: '/assets/fearless/5.jpeg' },
        { img: '/assets/fearless/6.jpeg' },
        { img: '/assets/fearless/7.jpeg' },
        { img: '/assets/fearless/8.jpeg' },
        { img: '/assets/fearless/9.jpeg' },
        { img: '/assets/fearless/10.jpeg' },
        { img: '/assets/fearless/11.jpeg' },
        { img: '/assets/fearless/12.jpeg' },
        { img: '/assets/fearless/13.jpeg' },
        { img: '/assets/fearless/14.jpeg' },
        { img: '/assets/fearless/15.jpeg' },
        { img: '/assets/fearless/16.jpeg' },
        { img: '/assets/fearless/17.jpeg' },
        { img: '/assets/fearless/18.jpeg' },
        { img: '/assets/fearless/19.jpeg' },
        { img: '/assets/fearless/20.jpeg' },
        { img: '/assets/fearless/21.jpeg' },
        { img: '/assets/fearless/22.jpeg' },
        { img: '/assets/fearless/23.jpeg' },
        { img: '/assets/fearless/24.jpeg' },
        { img: '/assets/fearless/25.jpeg' },
        { img: '/assets/fearless/26.jpeg' },
        { img: '/assets/fearless/27.jpeg' },
        { img: '/assets/fearless/fearless.png' },
        { img: '/assets/images/img1.jpg' },
        { img: '/assets/images/img2.jpg' },
        { img: '/assets/images/img3.jpg' },
        { img: '/assets/images/img4.jpg' },
        { img: '/assets/images/img5.jpg' },
        { img: '/assets/images/img6.jpg' },
        { img: '/assets/images/img7.jpg' },
        { img: '/assets/images/img8.jpg' },
        { img: '/assets/images/9.jpg' },
        { img: '/assets/images/magazine1.jpg' },
        { img: '/assets/images/yunjin2.webp' },
        { img: '/assets/perfectNight/1.jpeg' },
        { img: '/assets/perfectNight/2.jpeg' },
        { img: '/assets/perfectNight/3.jpeg' },
        { img: '/assets/perfectNight/4.jpeg' },
        { img: '/assets/perfectNight/perfectNight.jpeg' },
        { img: '/assets/smart/1.jpeg' },
        { img: '/assets/smart/2.jpeg' },
        { img: '/assets/smart/3.jpeg' },
        { img: '/assets/smart/4.jpeg' },
        { img: '/assets/smart/5.jpeg' },
        { img: '/assets/smart/smartLogo.jpg' },
        { img: '/assets/banner.jpeg' },
        { img: '/assets/chaewoon.jpg' },
        { img: '/assets/chaewoon4.jpg' },
        { img: '/assets/Eunchae.jpg' },
        { img: '/assets/eunchae2.jpg' },
        { img: '/assets/heroSectionImg.jpg' },
        { img: '/assets/kazuha.jpg' },
        { img: '/assets/kazuhaB1.jpg' },
        { img: '/assets/Sakura.jpg' },
        { img: '/assets/sakura3.jpg' },
        { img: '/assets/yunjin5.jpg' },
        
    ],
    yunjin: [
        { img: '/assets/yunjin/2.jpeg'},
        { img: '/assets/yunjin/2.jpg'},
        { img: '/assets/yunjin/4.jpeg'},
        { img: '/assets/yunjin/9.jpeg'},
        { img: '/assets/yunjin/10.jpeg'},
        { img: '/assets/yunjin/11.jpeg'},
        { img: '/assets/yunjin/12.jpeg'},
        { img: '/assets/yunjin/13.jpeg'},
        { img: '/assets/yunjin/img1.jpeg'},
        { img: '/assets/yunjin/img2.jpg'},
        { img: '/assets/yunjin/img6.jpg'},
    ],
    chaewoon: [
        { img: '/assets/chaewoon/1.jpeg'},
        { img: '/assets/chaewoon/2.jpg'},
        { img: '/assets/chaewoon/5.jpeg'},
        { img: '/assets/chaewoon/6.jpeg'},
        { img: '/assets/chaewoon/7.jpeg'},
        { img: '/assets/chaewoon/16.jpeg'},
        { img: '/assets/chaewoon/17.jpeg'},
        { img: '/assets/chaewoon/18.jpeg'},
        { img: '/assets/chaewoon/chaewoon.jpeg'},
        { img: '/assets/chaewoon/img1.jpg'},
    ],
    sakura: [
        { img: '/assets/sakura/3.jpeg'},
        { img: '/assets/sakura/19.jpeg'},
        { img: '/assets/sakura/20.jpeg'},
        { img: '/assets/sakura/21.jpeg'},
        { img: '/assets/sakura/22.jpeg'},
        { img: '/assets/sakura/23.jpeg'},
        { img: '/assets/sakura/Sakura.jpeg'},
        { img: '/assets/sakura/Sakura.jpg'},
        { img: '/assets/sakura/sakura3.jpg'}
    ],
    eunchae: [
        { img: '/assets/eunchae/1.jpeg'},
        { img: '/assets/eunchae/2.jpeg'},
        { img: '/assets/eunchae/4.jpeg'},
        { img: '/assets/eunchae/eunchae.jpg'},
        { img: '/assets/eunchae/eunchae2.jpg'},
        { img: '/assets/eunchae/Eunchae3.jpg'},
        { img: '/assets/eunchae/img4.jpg'},
    ],
    kazuha:[
        { img: '/assets/kazuha/1.jpeg'},
        { img: '/assets/kazuha/2.jpeg'},
        { img: '/assets/kazuha/3.jpeg'},
        { img: '/assets/kazuha/5.jpeg'},
        { img: '/assets/kazuha/6.jpeg'},
        { img: '/assets/kazuha/7.jpeg'},
        { img: '/assets/kazuha/8.jpeg'},
        { img: '/assets/kazuha/23.jpeg'},
        { img: '/assets/kazuha/img3.jpg'},
        { img: '/assets/kazuha/kazuha.jpeg'},
        { img: '/assets/kazuha/kazuha.jpg'},
        { img: '/assets/kazuha/kazuhaB1.jpg'},
    ]
}