import {
    drhealcare1,
    drhealcare2,
    drhealcare3,
    drhealcare4,
    drhealcare5,
    drhealcare6,
    drhealcare7,
    drhealcare8,
    coffee1,
    coffee2,
    coffee3,
    house1,
    house2,
    house3,
    house4,
    home1,
    home2,
    home3,
    office1,
    office2,
    office3,
    villa1,
    villa2,
    villa3,
    villa4,
    thumbnail,
    pavilion1,
    pavilion2,
    pavilion3,
    pavilion4,
    pavilion5,
    pavilion6,
    pavilion7,
} from '../assets/images';
export const spaceProjects = [
    {
        id: 1,
        title: 'PAVILION THE WHALE',
        location: 'Tờ 144 Thửa 138 - Hiệp Bình Chánh, Thủ Đức',
        year: 'Dự án Lý tưởng',
        size: '12mx6m',
        team: ['NGUYỄN THANH THẢO', 'NGUYỄN THỊ TUYẾT NGA', 'NGÔ GIA HÂN'],
        credits: 'TAM CÔ NƯƠNG STUDIO',
        description: [
            '"[The Whale ]" không chỉ là một công trình, mà là một tuyên ngôn về kiến trúc sinh thái. Ý tưởng cốt lõi là tạo ra một nơi trú ẩn, một "tổ kén" giữa cây xanh, nơi con người có thể tìm thấy sự thư thái và cảm hứng.',
            'Hình dáng uốn lượn được lấy cảm hứng từ các yếu tố tự nhiên, giúp công trình dường như "mọc lên" từ mặt đất. đã tập trung vào nguyên tắc Phỏng sinh học (Biomimicry), học hỏi từ các giải pháp thiết kế hiệu quả của thiên nhiên và kết hợp với kiến trúc xanh bền vững  thu thập năng lượng để cung cấp điển trong công trình.',
            'Trong nhóm gồm 3 thanh viên : Nguyễn Thanh Thảo, Nguyễn Thị Tuyết Nga, Ngô Gia Hân là sinh viên kiến trúc, đang học tập và rèn luyện trong lĩnh vực thiết kế và xây dựng, với mong muốn tạo ra những không gian thẩm mỹ, công năng và phù hợp với thực tế sử dụng .',
        ],
        images: [
            {
                image: thumbnail,
                description: 'Thumbnail of the Pavilion The Whale project.',
            },
            {
                image: pavilion3,
                description:
                    'Detailed view of the structural elements inspired by whale anatomy.',
            },
            {
                image: pavilion4,
                description:
                    'Open communal area designed for social interaction and events.',
            },
            {
                image: pavilion5,
                description:
                    'Close-up of custom furniture pieces integrated into the design.',
            },
            {
                image: pavilion6,
                description:
                    'Night view of the Pavilion The Whale illuminated against the skyline.',
            },
            {
                image: pavilion7,
                description:
                    'Aerial shot capturing the full layout and surrounding environment of the pavilion.',
            },
            {
                image: pavilion1,
                description:
                    'Exterior view of the Pavilion The Whale showcasing its unique architecture.',
            },
            {
                image: pavilion2,
                description:
                    'Interior space highlighting the use of natural materials and lighting.',
            },
        ],
        siteAnalysis: {
            title: '1. Bối cảnh & Quy hoạch',
            items: [
                {
                    label: 'Vị trí',
                    content: 'Thửa 138, Tờ 14, Hiệp Bình Chánh, Thủ Đức.',
                },
                {
                    label: 'Hiện trạng',
                    content:
                        'Khu đất 1001m² nằm hoàn toàn trong quy hoạch xanh ven rạch (816.3m²) và đất giao thông (184.3m²).',
                },
                {
                    label: 'Ý tưởng',
                    content:
                        'Chuyển đổi quỹ đất quy hoạch thành công viên tiện ích, kết hợp hài hòa giữa bảo tồn hành lang sông nước và không gian cộng đồng.',
                },
            ],
        },
        climateAnalysis: {
            title: '2. Phân tích Khí hậu',
            items: [
                {
                    label: 'Lợi thế',
                    content:
                        'Tận dụng gió mát tự nhiên từ rạch thổi vào để điều hòa nhiệt độ cho toàn khu vực.',
                },
                {
                    label: 'Giải pháp',
                    content:
                        'Thiết kế hàng rào cây xanh dày để lọc bụi và tiếng ồn từ trục đường chính.',
                },
                {
                    label: 'Thích ứng',
                    content:
                        'Sử dụng bề mặt thấm nước và vật liệu tự nhiên để ứng phó với đặc thù triều cường của vùng Thủ Đức.',
                },
            ],
        },
        strengths: {
            title: '3. Ưu điểm nổi bật',
            items: [
                {
                    label: 'Thẩm mỹ',
                    content:
                        'Hình khối uốn lượn, tính biểu tượng cao (Iconic), dễ tạo hiệu ứng truyền thông.',
                },
                {
                    label: 'Thích ứng',
                    content:
                        'Tận dụng gió tự nhiên từ rạch, phù hợp với quy hoạch đất xanh ven sông.',
                },
                {
                    label: 'Linh hoạt',
                    content:
                        'Cấu trúc lắp ghép, đa năng (nghỉ ngơi, triển lãm, hội chợ).',
                },
            ],
        },
        challengesAndSolutions: {
            title: '4. Thách thức & Giải pháp tối ưu',
            rows: [
                {
                    challenge: 'Kỹ thuật khó / Phí cao',
                    solution:
                        'Dùng hệ màng căng (ETFE/PTFE) thay cho vỏ cứng để giảm trọng lượng và chi phí.',
                },
                {
                    challenge: 'Triều cường Thủ Đức',
                    solution:
                        'Thiết kế sàn nâng (Raised Decking) để nước chảy tự do bên dưới, tạo hiệu ứng "nổi".',
                },
                {
                    challenge: 'Nóng & Ẩm',
                    solution:
                        'Áp dụng thông gió thụ động (khe thoát nhiệt đỉnh mái) và thép mạ kẽm chống rỉ sét.',
                },
            ],
        },
    },
    {
        id: 1,
        title: 'Dr.HealCare',
        location: 'HCM, VIETNAM',
        year: '2025',
        size: '320 m²',
        team: ['Gabriel', 'Huong Nado'],
        credits: 'Gabriel',
        description: [
            'MÉDONGAULE is a Korean fine dining restaurant located in a historical district of Seoul. The project sought to create a contemporary space that respects Korean culinary traditions while introducing modern design elements.',
            'The space is characterized by natural materials and subdued colors. We used traditional Korean clay tiles for the walls, combined with modern concrete floors and wooden furniture custom-designed for the space. The lighting design creates an intimate atmosphere that highlights the carefully prepared dishes.',
            "The client's vision was to create a space where traditional Korean cuisine could be experienced in a setting that feels both authentic and contemporary. The restaurant's layout provides both private dining areas and an open kitchen where guests can observe the preparation of their meals.",
        ],
        images: [
            {
                image: drhealcare1,
                description:
                    'Exterior view of the Dr.HealCare facility showcasing modern architecture.',
            },
            {
                image: drhealcare2,
                description:
                    'Interior reception area with clean, minimalist design.',
            },
            {
                image: drhealcare3,
                description: 'Patient consultation room with natural lighting.',
            },
            {
                image: drhealcare4,
                description: 'Medical equipment area designed for efficiency.',
            },
            {
                image: drhealcare5,
                description: 'Waiting lounge with comfortable seating.',
            },
            {
                image: drhealcare6,
                description: 'Corridor view highlighting the spatial flow.',
            },
            {
                image: drhealcare7,
                description: 'Detail of architectural elements and materials.',
            },
            {
                image: drhealcare8,
                description: 'Night view of the facility exterior.',
            },
        ],
    },
    {
        id: 2,
        title: 'THEM NANG COFFEE',
        location: 'GIA LAI, VIETNAM',
        year: '2024',
        size: '280 m²',
        team: ['Dang Tran', 'Vo Huong'],
        credits: 'Hoang Quan',
        description: [
            'CRAFTED DINING is a contemporary restaurant designed to showcase the intersection of Japanese craftsmanship and modern cuisine. Located in a bustling district of Tokyo, the restaurant aims to provide a serene escape from urban life.',
            'The design draws inspiration from traditional Japanese carpentry, with joinery techniques used throughout the space. We collaborated with local craftsmen to create custom wooden elements that form the backbone of the interior architecture. The ceiling features a grid of wooden beams that create a rhythm of light and shadow throughout the day.',
            'Natural light plays a crucial role in the space, with large windows filtered through custom-designed screens that cast intricate patterns across the dining areas. The material palette is intentionally limited: oak, stone, and brass accents create a warm, cohesive atmosphere that allows the food to take center stage.',
        ],
        images: [
            { image: coffee1, description: null },
            { image: coffee2, description: null },
            { image: coffee3, description: null },
        ],
    },
    {
        id: 3,
        title: 'CONGS HOUSE',
        location: 'Ia Gra - GIA LAI, VIETNAM',
        year: '2024',
        size: '260 m²',
        team: ['Huong Nado', 'Grabiel', 'Hoang Quan'],
        credits: 'Dang Tran',
        description: [
            'The HANNAM-DONG RESIDENCE is a private home located in an exclusive neighborhood of Seoul. The client, an art collector, requested a space that would not only serve as a comfortable living environment but also as a canvas for their extensive art collection.',
            'The architecture responds to the sloped site with a series of terraced levels that follow the natural topography. Each level contains different functional zones, from private living spaces to more public areas for entertaining and displaying art.',
            "Materials were chosen for their ability to age gracefully: concrete, steel, and local woods create a neutral backdrop for the client's collection. The home features custom furniture pieces designed specifically for each space, creating a cohesive environment where architecture and furnishings work in harmony.",
            'Sustainability was a key consideration, with passive solar design principles incorporated throughout. The orientation maximizes natural light while minimizing heat gain in summer, and a sophisticated ventilation system reduces the need for mechanical cooling.',
        ],
        images: [
            { image: house1, description: null },
            { image: house2, description: null },
            { image: house3, description: null },
            { image: house4, description: null },
        ],
    },
    {
        id: 4,
        title: 'Mr.Hien HOUSE',
        location: 'San Francisco, USA',
        year: '2023',
        size: '210 m²',
        team: ['Jiwon Park', 'Alex Thompson'],
        credits: 'Michael Johnson',
        description: [
            'The BLUE BOTTLE STUDIO represents our first project in the United States, a collaboration with the renowned coffee brand to create a flagship location that serves as both cafe and creative workspace.',
            'The design concept centers around transparency and process. The space is organized to reveal the journey of coffee from bean to cup, with the roasting area visible from both inside and outside the building. A central bar serves as the heart of the space, encouraging interaction between baristas and customers.',
            "The material palette draws inspiration from Blue Bottle's brand identity, with a restrained use of color and an emphasis on natural materials. Custom oak and steel furniture pieces were designed specifically for the space, balancing durability with comfort for extended stays.",
            'Acoustics played a key role in the design, with careful attention paid to creating zones that allow for conversation without overwhelming the space with noise. Custom acoustic panels were developed that double as design elements, absorbing sound while adding texture to the walls and ceiling.',
        ],
        images: [
            { image: home2, description: null },
            { image: home3, description: null },
        ],
    },
    {
        id: 5,
        title: 'Environment OFFICE',
        location: 'Jeju Island, South Korea',
        year: '2022',
        size: '380 m²',
        team: ['Jiwon Park', 'Suyeon Kang', 'Hyunsoo Lee'],
        credits: 'Jeongho Park',
        description: [
            'The BEACH RESIDENCE is a vacation home on Jeju Island designed for a family seeking connection with the natural landscape. The house is conceptualized as a series of pavilions linked by covered outdoor spaces, blurring the boundary between architecture and landscape.',
            'The structure is designed to withstand the coastal climate while embracing views of the ocean. Large sliding glass doors can be fully opened to allow sea breezes through the house, while deep overhangs provide protection from summer sun and winter rain.',
            'Local volcanic stone from the island forms the base of the house, while the upper portions are clad in weather-resistant cedar that will silver over time. The interiors feature a combination of concrete floors, plaster walls, and custom woodwork that creates a serene, tactile environment.',
            'Landscape design was integrated from the beginning of the process, with native plantings used throughout the site to minimize water usage and maintain the ecological character of the coastal environment.',
        ],
        images: [
            { image: office1, description: null },
            { image: office2, description: null },
            { image: office3, description: null },
        ],
    },
    {
        id: 6,
        title: 'DONGNAI VILLA',
        location: 'Shanghai, China',
        year: '2023',
        size: '1200 m²',
        team: ['Jiwon Park', 'Lin Chen', 'Minyoung Kim'],
        credits: 'Wei Zhang',
        description: [
            'WORKSPACE WITHIN THE CLOUDS is a corporate headquarters located on the 45th floor of a Shanghai skyscraper. The client, a technology company, sought a space that would reflect their innovative approach while providing a productive environment for their team.',
            "The concept draws inspiration from traditional Chinese landscapes, with the office organized as a series of 'islands' within a larger flowing space. These islands serve different functions, from focused work areas to collaborative zones and social spaces.",
            'The height of the space is emphasized through a series of suspended elements that create a sense of being among clouds. Custom lighting installations respond to the changing natural light throughout the day, subtly shifting the atmosphere of the space.',
            'Sustainability was integrated throughout the project, with energy-efficient systems, responsible material sourcing, and a focus on employee wellbeing through air quality, acoustic comfort, and biophilic design elements.',
        ],
        images: [
            { image: villa1, description: null },
            { image: villa2, description: null },
            { image: villa3, description: null },
            { image: villa4, description: null },
        ],
    },
];
