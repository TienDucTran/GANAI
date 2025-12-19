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
    matbang,
    matdung,
    matben,
    matcat,
    pavilionVideo,
} from '../assets/images';
export const spaceProjects = [
    {
        id: 1,
        slug: 'pavilion-the-whale',
        title: { EN: 'PAVILION THE WHALE', VI: 'PAVILION THE WHALE' },
        location: {
            EN: 'Tờ 144 Thửa 138 - Hiệp Bình Chánh, Thủ Đức',
            VI: 'Tờ 144 Thửa 138 - Hiệp Bình Chánh, Thủ Đức',
        },
        year: { EN: 'Ideal Project', VI: 'Dự án Lý tưởng' },
        size: { EN: '12mx6m', VI: '12mx6m' },
        team: {
            EN: ['NGUYỄN THANH THẢO', 'NGUYỄN THỊ TUYẾT NGA', 'NGÔ GIA HÂN'],
            VI: ['NGUYỄN THANH THẢO', 'NGUYỄN THỊ TUYẾT NGA', 'NGÔ GIA HÂN'],
        },
        credits: { EN: 'TAM CÔ NƯƠNG STUDIO', VI: 'TAM CÔ NƯƠNG STUDIO' },
        description: {
            EN: [
                '"[The Whale ]" is not just a building, but a manifesto of ecological architecture. The core idea is to create a shelter, a "cocoon" among the greenery, where people can find relaxation and inspiration.',
                'The curved shape is inspired by natural elements, making the building seem to "grow" from the ground. We focused on the principle of Biomimicry, learning from nature\'s effective design solutions and combining them with sustainable green architecture to collect energy for supply in the building.',
                'The group consists of 3 members: Nguyễn Thanh Thảo, Nguyễn Thị Tuyết Nga, Ngô Gia Hân are architecture students, studying and practicing in the field of design and construction, with the desire to create aesthetic, functional and practical spaces.',
            ],
            VI: [
                '"[The Whale ]" không chỉ là một công trình, mà là một tuyên ngôn về kiến trúc sinh thái. Ý tưởng cốt lõi là tạo ra một nơi trú ẩn, một "tổ kén" giữa cây xanh, nơi con người có thể tìm thấy sự thư thái và cảm hứng.',
                'Hình dáng uốn lượn được lấy cảm hứng từ các yếu tố tự nhiên, giúp công trình dường như "mọc lên" từ mặt đất. đã tập trung vào nguyên tắc Phỏng sinh học (Biomimicry), học hỏi từ các giải pháp thiết kế hiệu quả của thiên nhiên và kết hợp với kiến trúc xanh bền vững  thu thập năng lượng để cung cấp điển trong công trình.',
                'Trong nhóm gồm 3 thanh viên : Nguyễn Thanh Thảo, Nguyễn Thị Tuyết Nga, Ngô Gia Hân là sinh viên kiến trúc, đang học tập và rèn luyện trong lĩnh vực thiết kế và xây dựng, với mong muốn tạo ra những không gian thẩm mỹ, công năng và phù hợp với thực tế sử dụng .',
            ],
        },
        images: [
            {
                image: thumbnail,
                description: 'Thumbnail of the Pavilion The Whale project.',
            },
        ],
        referenceProject: {
            description: {
                EN: 'Reference Materials',
                VI: 'Tài liệu tham khảo',
            },
            descriptionLong: {
                EN: 'Reference materials for the project: steel load-bearing frame supporting large curved shell panels, steel connection system allowing precise assembly and fast construction (characteristic of pavilion). Wood (laminated wood) → Wall and ceiling cladding, creating warmth. Dark wood flooring / finishing materials → Strong contrast with white exterior shell.',
                VI: 'Tham khảo chất liệu công trình về khung thép chịu lực Đỡ các tấm vỏ cong lớn hệ liên kết thép cho phép lắp ghép chính xác, thi công nhanh (đặc trưng pavilion) Gỗ(lam gỗ) → Ốp tường, trần, tạo sự ấm áp Sàn gỗ / vật liệu hoàn thiện tối màu → Tương phản mạnh với vỏ ngoài trắng',
            },
            images: [
                {
                    image: pavilion3,
                    description: {
                        EN: 'Detailed view of the structural elements inspired by whale anatomy.',
                        VI: 'Chi tiết các yếu tố cấu trúc lấy cảm hứng từ giải phẫu cá voi.',
                    },
                },
                {
                    image: pavilion4,
                    description: {
                        EN: 'Open communal area designed for social interaction and events.',
                        VI: 'Khu vực cộng đồng mở được thiết kế cho tương tác xã hội và sự kiện.',
                    },
                },
                {
                    image: pavilion5,
                    description: {
                        EN: 'Close-up of custom furniture pieces integrated into the design.',
                        VI: 'Ảnh cận cảnh các món đồ nội thất tùy chỉnh được tích hợp vào thiết kế.',
                    },
                },
            ],
        },

        siteAnalysis: {
            title: {
                EN: '1. Context & Planning',
                VI: '1. Bối cảnh & Quy hoạch',
            },
            items: [
                {
                    label: { EN: 'Location', VI: 'Vị trí' },
                    content: {
                        EN: 'Plot 138, Sheet 14, Hiệp Bình Chánh, Thủ Đức.',
                        VI: 'Thửa 138, Tờ 14, Hiệp Bình Chánh, Thủ Đức.',
                    },
                },
                {
                    label: { EN: 'Current Status', VI: 'Hiện trạng' },
                    content: {
                        EN: 'The 1001m² plot is completely within the green planning along the creek (816.3m²) and transportation land (184.3m²).',
                        VI: 'Khu đất 1001m² nằm hoàn toàn trong quy hoạch xanh ven rạch (816.3m²) và đất giao thông (184.3m²).',
                    },
                },
                {
                    label: { EN: 'Concept', VI: 'Ý tưởng' },
                    content: {
                        EN: 'Convert the planned land into a utility park, harmoniously combining the preservation of the river corridor and community space.',
                        VI: 'Chuyển đổi quỹ đất quy hoạch thành công viên tiện ích, kết hợp hài hòa giữa bảo tồn hành lang sông nước và không gian cộng đồng.',
                    },
                },
            ],
        },
        climateAnalysis: {
            title: { EN: '2. Climate Analysis', VI: '2. Phân tích Khí hậu' },
            items: [
                {
                    label: { EN: 'Advantage', VI: 'Lợi thế' },
                    content: {
                        EN: 'Utilize natural cool wind blowing in from the creek to regulate temperature throughout the area.',
                        VI: 'Tận dụng gió mát tự nhiên từ rạch thổi vào để điều hòa nhiệt độ cho toàn khu vực.',
                    },
                },
                {
                    label: { EN: 'Solution', VI: 'Giải pháp' },
                    content: {
                        EN: 'Design a thick green fence to filter dust and noise from the main road.',
                        VI: 'Thiết kế hàng rào cây xanh dày để lọc bụi và tiếng ồn từ trục đường chính.',
                    },
                },
                {
                    label: { EN: 'Adaptation', VI: 'Thích ứng' },
                    content: {
                        EN: 'Use permeable surfaces and natural materials to respond to the flooding characteristics of Thủ Đức region.',
                        VI: 'Sử dụng bề mặt thấm nước và vật liệu tự nhiên để ứng phó với đặc thù triều cường của vùng Thủ Đức.',
                    },
                },
            ],
            images: [
                {
                    image: pavilion6,
                    description: {
                        EN: 'Night view of the Pavilion The Whale illuminated against the skyline.',
                        VI: 'Quang cảnh ban đêm của Pavilion The Whale được chiếu sáng trên nền trời.',
                    },
                },
                {
                    image: pavilion7,
                    description: {
                        EN: 'Aerial shot capturing the full layout and surrounding environment of the pavilion.',
                        VI: 'Ảnh chụp từ trên cao ghi lại bố cục đầy đủ và môi trường xung quanh của pavilion.',
                    },
                },
            ],
        },
        drawProject: {
            description: {
                EN: 'Technical drawings of The Whale structure',
                VI: 'Bản vẽ kỹ thuật công trình The Whale',
            },
            images: [
                {
                    image: matbang,
                    description: {
                        EN: 'Technical drawing of the floor plan.',
                        VI: 'Bản vẽ kỹ thuật mặt bằng.',
                    },
                },
                {
                    image: matdung,
                    description: {
                        EN: 'Technical drawing of the elevation view.',
                        VI: 'Bản vẽ kỹ thuật mặt đứng.',
                    },
                },
                {
                    image: matben,
                    description: {
                        EN: 'Technical drawing of the side elevation.',
                        VI: 'Bản vẽ kỹ thuật mặt bên.',
                    },
                },
                {
                    image: matcat,
                    description: {
                        EN: 'Technical drawing of the sectional view.',
                        VI: 'Bản vẽ kỹ thuật mặt cắt.',
                    },
                },
            ],
        },
        AIGEN: {
            description: { EN: 'AI Reference', VI: 'Tham khảo AI' },
            images: [
                {
                    image: pavilion1,
                    description: {
                        EN: 'Exterior view of the Pavilion The Whale showcasing its unique architecture.',
                        VI: 'Toàn cảnh bên ngoài của Pavilion The Whale thể hiện kiến trúc độc đáo.',
                    },
                },
                {
                    image: pavilion2,
                    description: {
                        EN: 'Interior space highlighting the use of natural materials and lighting.',
                        VI: 'Không gian nội thất nổi bật việc sử dụng vật liệu tự nhiên và ánh sáng.',
                    },
                },
            ],
            descriptionVideo: {
                EN: 'Create video with AI',
                VI: 'Khởi tạo video bằng AI',
            },
            videos: [
                {
                    video: pavilionVideo, // Assuming you have imported pavilionVideo from assets
                    description: {
                        EN: 'Video showcasing the Pavilion The Whale project.',
                        VI: 'Video giới thiệu dự án Pavilion The Whale.',
                    },
                },
            ],
        },
        strengths: {
            title: {
                EN: '3. Outstanding Advantages',
                VI: '3. Ưu điểm nổi bật',
            },
            items: [
                {
                    label: { EN: 'Aesthetics', VI: 'Thẩm mỹ' },
                    content: {
                        EN: 'Curved shape, high iconic value (Iconic), easy to create communication effects.',
                        VI: 'Hình khối uốn lượn, tính biểu tượng cao (Iconic), dễ tạo hiệu ứng truyền thông.',
                    },
                },
                {
                    label: { EN: 'Adaptability', VI: 'Thích ứng' },
                    content: {
                        EN: 'Utilize natural wind from the creek, suitable for green land planning along the river.',
                        VI: 'Tận dụng gió tự nhiên từ rạch, phù hợp với quy hoạch đất xanh ven sông.',
                    },
                },
                {
                    label: { EN: 'Flexibility', VI: 'Linh hoạt' },
                    content: {
                        EN: 'Assembled structure, multifunctional (rest, exhibition, fair).',
                        VI: 'Cấu trúc lắp ghép, đa năng (nghỉ ngơi, triển lãm, hội chợ).',
                    },
                },
            ],
        },
        challengesAndSolutions: {
            title: {
                EN: '4. Challenges and Optimal Solutions',
                VI: '4. Thách thức & Giải pháp tối ưu',
            },
            rows: [
                {
                    challenge: {
                        EN: 'Technical difficulty / High cost',
                        VI: 'Kỹ thuật khó / Phí cao',
                    },
                    solution: {
                        EN: 'Use tension membrane system (ETFE/PTFE) instead of rigid shell to reduce weight and cost.',
                        VI: 'Dùng hệ màng căng (ETFE/PTFE) thay cho vỏ cứng để giảm trọng lượng và chi phí.',
                    },
                },
                {
                    challenge: {
                        EN: 'Thu Duc high tide',
                        VI: 'Triều cường Thủ Đức',
                    },
                    solution: {
                        EN: 'Design raised decking to allow water to flow freely underneath, creating a "floating" effect.',
                        VI: 'Thiết kế sàn nâng (Raised Decking) để nước chảy tự do bên dưới, tạo hiệu ứng "nổi".',
                    },
                },
                {
                    challenge: { EN: 'Hot & Humid', VI: 'Nóng & Ẩm' },
                    solution: {
                        EN: 'Apply passive ventilation (heat exhaust vents at roof peak) and galvanized steel to prevent rust.',
                        VI: 'Áp dụng thông gió thụ động (khe thoát nhiệt đỉnh mái) và thép mạ kẽm chống rỉ sét.',
                    },
                },
            ],
        },
    },
    {
        id: 10,
        slug: 'dr-healcare',
        title: { EN: 'Dr.HealCare', VI: 'Dr.HealCare' },
        location: { EN: 'HCM, VIETNAM', VI: 'HCM, VIETNAM' },
        year: { EN: '2025', VI: '2025' },
        size: { EN: '320 m²', VI: '320 m²' },
        team: { EN: ['Gabriel', 'Huong Nado'], VI: ['Gabriel', 'Huong Nado'] },
        credits: { EN: 'Gabriel', VI: 'Gabriel' },
        description: {
            EN: [
                'MÉDONGAULE is a Korean fine dining restaurant located in a historical district of Seoul. The project sought to create a contemporary space that respects Korean culinary traditions while introducing modern design elements.',
                'The space is characterized by natural materials and subdued colors. We used traditional Korean clay tiles for the walls, combined with modern concrete floors and wooden furniture custom-designed for the space. The lighting design creates an intimate atmosphere that highlights the carefully prepared dishes.',
                "The client's vision was to create a space where traditional Korean cuisine could be experienced in a setting that feels both authentic and contemporary. The restaurant's layout provides both private dining areas and an open kitchen where guests can observe the preparation of their meals.",
            ],
            VI: [
                'MÉDONGAULE is a Korean fine dining restaurant located in a historical district of Seoul. The project sought to create a contemporary space that respects Korean culinary traditions while introducing modern design elements.',
                'The space is characterized by natural materials and subdued colors. We used traditional Korean clay tiles for the walls, combined with modern concrete floors and wooden furniture custom-designed for the space. The lighting design creates an intimate atmosphere that highlights the carefully prepared dishes.',
                "The client's vision was to create a space where traditional Korean cuisine could be experienced in a setting that feels both authentic and contemporary. The restaurant's layout provides both private dining areas and an open kitchen where guests can observe the preparation of their meals.",
            ],
        },
        images: [
            {
                image: drhealcare1,
                description: {
                    EN: 'Exterior view of the Dr.HealCare facility showcasing modern architecture.',
                    VI: 'Toàn cảnh bên ngoài của cơ sở Dr.HealCare thể hiện kiến trúc hiện đại.',
                },
            },
            {
                image: drhealcare2,
                description: {
                    EN: 'Interior reception area with clean, minimalist design.',
                    VI: 'Khu vực tiếp tân nội thất với thiết kế sạch sẽ, tối giản.',
                },
            },
            {
                image: drhealcare3,
                description: {
                    EN: 'Patient consultation room with natural lighting.',
                    VI: 'Phòng tư vấn bệnh nhân với ánh sáng tự nhiên.',
                },
            },
            {
                image: drhealcare4,
                description: {
                    EN: 'Medical equipment area designed for efficiency.',
                    VI: 'Khu vực thiết bị y tế được thiết kế cho hiệu quả.',
                },
            },
            {
                image: drhealcare5,
                description: {
                    EN: 'Waiting lounge with comfortable seating.',
                    VI: 'Phòng chờ với ghế ngồi thoải mái.',
                },
            },
            {
                image: drhealcare6,
                description: {
                    EN: 'Corridor view highlighting the spatial flow.',
                    VI: 'Quang cảnh hành lang nổi bật dòng chảy không gian.',
                },
            },
            {
                image: drhealcare7,
                description: {
                    EN: 'Detail of architectural elements and materials.',
                    VI: 'Chi tiết các yếu tố kiến trúc và vật liệu.',
                },
            },
            {
                image: drhealcare8,
                description: {
                    EN: 'Night view of the facility exterior.',
                    VI: 'Quang cảnh ban đêm của bên ngoài cơ sở.',
                },
            },
        ],
    },
    {
        id: 2,
        slug: 'them-nang-coffee',
        title: { EN: 'THEM NANG COFFEE', VI: 'THEM NANG COFFEE' },
        location: { EN: 'GIA LAI, VIETNAM', VI: 'GIA LAI, VIETNAM' },
        year: { EN: '2024', VI: '2024' },
        size: { EN: '280 m²', VI: '280 m²' },
        team: { EN: ['Dang Tran', 'Vo Huong'], VI: ['Dang Tran', 'Vo Huong'] },
        credits: { EN: 'Hoang Quan', VI: 'Hoang Quan' },
        description: {
            EN: [
                'CRAFTED DINING is a contemporary restaurant designed to showcase the intersection of Japanese craftsmanship and modern cuisine. Located in a bustling district of Tokyo, the restaurant aims to provide a serene escape from urban life.',
                'The design draws inspiration from traditional Japanese carpentry, with joinery techniques used throughout the space. We collaborated with local craftsmen to create custom wooden elements that form the backbone of the interior architecture. The ceiling features a grid of wooden beams that create a rhythm of light and shadow throughout the day.',
                'Natural light plays a crucial role in the space, with large windows filtered through custom-designed screens that cast intricate patterns across the dining areas. The material palette is intentionally limited: oak, stone, and brass accents create a warm, cohesive atmosphere that allows the food to take center stage.',
            ],
            VI: [
                'CRAFTED DINING is a contemporary restaurant designed to showcase the intersection of Japanese craftsmanship and modern cuisine. Located in a bustling district of Tokyo, the restaurant aims to provide a serene escape from urban life.',
                'The design draws inspiration from traditional Japanese carpentry, with joinery techniques used throughout the space. We collaborated with local craftsmen to create custom wooden elements that form the backbone of the interior architecture. The ceiling features a grid of wooden beams that create a rhythm of light and shadow throughout the day.',
                'Natural light plays a crucial role in the space, with large windows filtered through custom-designed screens that cast intricate patterns across the dining areas. The material palette is intentionally limited: oak, stone, and brass accents create a warm, cohesive atmosphere that allows the food to take center stage.',
            ],
        },
        images: [
            { image: coffee1, description: null },
            { image: coffee2, description: null },
            { image: coffee3, description: null },
        ],
    },
    {
        id: 3,
        slug: 'congs-house',
        title: { EN: 'CONGS HOUSE', VI: 'CONGS HOUSE' },
        location: {
            EN: 'Ia Gra - GIA LAI, VIETNAM',
            VI: 'Ia Gra - GIA LAI, VIETNAM',
        },
        year: { EN: '2024', VI: '2024' },
        size: { EN: '260 m²', VI: '260 m²' },
        team: {
            EN: ['Huong Nado', 'Grabiel', 'Hoang Quan'],
            VI: ['Huong Nado', 'Grabiel', 'Hoang Quan'],
        },
        credits: { EN: 'Dang Tran', VI: 'Dang Tran' },
        description: {
            EN: [
                'The HANNAM-DONG RESIDENCE is a private home located in an exclusive neighborhood of Seoul. The client, an art collector, requested a space that would not only serve as a comfortable living environment but also as a canvas for their extensive art collection.',
                'The architecture responds to the sloped site with a series of terraced levels that follow the natural topography. Each level contains different functional zones, from private living spaces to more public areas for entertaining and displaying art.',
                "Materials were chosen for their ability to age gracefully: concrete, steel, and local woods create a neutral backdrop for the client's collection. The home features custom furniture pieces designed specifically for each space, creating a cohesive environment where architecture and furnishings work in harmony.",
                'Sustainability was a key consideration, with passive solar design principles incorporated throughout. The orientation maximizes natural light while minimizing heat gain in summer, and a sophisticated ventilation system reduces the need for mechanical cooling.',
            ],
            VI: [
                'The HANNAM-DONG RESIDENCE is a private home located in an exclusive neighborhood of Seoul. The client, an art collector, requested a space that would not only serve as a comfortable living environment but also as a canvas for their extensive art collection.',
                'The architecture responds to the sloped site with a series of terraced levels that follow the natural topography. Each level contains different functional zones, from private living spaces to more public areas for entertaining and displaying art.',
                "Materials were chosen for their ability to age gracefully: concrete, steel, and local woods create a neutral backdrop for the client's collection. The home features custom furniture pieces designed specifically for each space, creating a cohesive environment where architecture and furnishings work in harmony.",
                'Sustainability was a key consideration, with passive solar design principles incorporated throughout. The orientation maximizes natural light while minimizing heat gain in summer, and a sophisticated ventilation system reduces the need for mechanical cooling.',
            ],
        },
        images: [
            { image: house1, description: null },
            { image: house2, description: null },
            { image: house3, description: null },
            { image: house4, description: null },
        ],
    },
    {
        id: 4,
        slug: 'mr-hien-house',
        title: { EN: 'Mr.Hien HOUSE', VI: 'Mr.Hien HOUSE' },
        location: { EN: 'San Francisco, USA', VI: 'San Francisco, USA' },
        year: { EN: '2023', VI: '2023' },
        size: { EN: '210 m²', VI: '210 m²' },
        team: {
            EN: ['Jiwon Park', 'Alex Thompson'],
            VI: ['Jiwon Park', 'Alex Thompson'],
        },
        credits: { EN: 'Michael Johnson', VI: 'Michael Johnson' },
        description: {
            EN: [
                'The BLUE BOTTLE STUDIO represents our first project in the United States, a collaboration with the renowned coffee brand to create a flagship location that serves as both cafe and creative workspace.',
                'The design concept centers around transparency and process. The space is organized to reveal the journey of coffee from bean to cup, with the roasting area visible from both inside and outside the building. A central bar serves as the heart of the space, encouraging interaction between baristas and customers.',
                "The material palette draws inspiration from Blue Bottle's brand identity, with a restrained use of color and an emphasis on natural materials. Custom oak and steel furniture pieces were designed specifically for the space, balancing durability with comfort for extended stays.",
                'Acoustics played a key role in the design, with careful attention paid to creating zones that allow for conversation without overwhelming the space with noise. Custom acoustic panels were developed that double as design elements, absorbing sound while adding texture to the walls and ceiling.',
            ],
            VI: [
                'The BLUE BOTTLE STUDIO represents our first project in the United States, a collaboration with the renowned coffee brand to create a flagship location that serves as both cafe and creative workspace.',
                'The design concept centers around transparency and process. The space is organized to reveal the journey of coffee from bean to cup, with the roasting area visible from both inside and outside the building. A central bar serves as the heart of the space, encouraging interaction between baristas and customers.',
                "The material palette draws inspiration from Blue Bottle's brand identity, with a restrained use of color and an emphasis on natural materials. Custom oak and steel furniture pieces were designed specifically for the space, balancing durability with comfort for extended stays.",
                'Acoustics played a key role in the design, with careful attention paid to creating zones that allow for conversation without overwhelming the space with noise. Custom acoustic panels were developed that double as design elements, absorbing sound while adding texture to the walls and ceiling.',
            ],
        },
        images: [
            { image: home2, description: null },
            { image: home3, description: null },
        ],
    },
    {
        id: 5,
        slug: 'environment-office',
        title: { EN: 'Environment OFFICE', VI: 'Environment OFFICE' },
        location: {
            EN: 'Jeju Island, South Korea',
            VI: 'Jeju Island, South Korea',
        },
        year: { EN: '2022', VI: '2022' },
        size: { EN: '380 m²', VI: '380 m²' },
        team: {
            EN: ['Jiwon Park', 'Suyeon Kang', 'Hyunsoo Lee'],
            VI: ['Jiwon Park', 'Suyeon Kang', 'Hyunsoo Lee'],
        },
        credits: { EN: 'Jeongho Park', VI: 'Jeongho Park' },
        description: {
            EN: [
                'The BEACH RESIDENCE is a vacation home on Jeju Island designed for a family seeking connection with the natural landscape. The house is conceptualized as a series of pavilions linked by covered outdoor spaces, blurring the boundary between architecture and landscape.',
                'The structure is designed to withstand the coastal climate while embracing views of the ocean. Large sliding glass doors can be fully opened to allow sea breezes through the house, while deep overhangs provide protection from summer sun and winter rain.',
                'Local volcanic stone from the island forms the base of the house, while the upper portions are clad in weather-resistant cedar that will silver over time. The interiors feature a combination of concrete floors, plaster walls, and custom woodwork that creates a serene, tactile environment.',
                'Landscape design was integrated from the beginning of the process, with native plantings used throughout the site to minimize water usage and maintain the ecological character of the coastal environment.',
            ],
            VI: [
                'The BEACH RESIDENCE is a vacation home on Jeju Island designed for a family seeking connection with the natural landscape. The house is conceptualized as a series of pavilions linked by covered outdoor spaces, blurring the boundary between architecture and landscape.',
                'The structure is designed to withstand the coastal climate while embracing views of the ocean. Large sliding glass doors can be fully opened to allow sea breezes through the house, while deep overhangs provide protection from summer sun and winter rain.',
                'Local volcanic stone from the island forms the base of the house, while the upper portions are clad in weather-resistant cedar that will silver over time. The interiors feature a combination of concrete floors, plaster walls, and custom woodwork that creates a serene, tactile environment.',
                'Landscape design was integrated from the beginning of the process, with native plantings used throughout the site to minimize water usage and maintain the ecological character of the coastal environment.',
            ],
        },
        images: [
            { image: office1, description: null },
            { image: office2, description: null },
            { image: office3, description: null },
        ],
    },
    {
        id: 6,
        slug: 'dongnai-villa',
        title: { EN: 'DONGNAI VILLA', VI: 'DONGNAI VILLA' },
        location: { EN: 'Shanghai, China', VI: 'Shanghai, China' },
        year: { EN: '2023', VI: '2023' },
        size: { EN: '1200 m²', VI: '1200 m²' },
        team: {
            EN: ['Jiwon Park', 'Lin Chen', 'Minyoung Kim'],
            VI: ['Jiwon Park', 'Lin Chen', 'Minyoung Kim'],
        },
        credits: { EN: 'Wei Zhang', VI: 'Wei Zhang' },
        description: {
            EN: [
                'WORKSPACE WITHIN THE CLOUDS is a corporate headquarters located on the 45th floor of a Shanghai skyscraper. The client, a technology company, sought a space that would reflect their innovative approach while providing a productive environment for their team.',
                "The concept draws inspiration from traditional Chinese landscapes, with the office organized as a series of 'islands' within a larger flowing space. These islands serve different functions, from focused work areas to collaborative zones and social spaces.",
                'The height of the space is emphasized through a series of suspended elements that create a sense of being among clouds. Custom lighting installations respond to the changing natural light throughout the day, subtly shifting the atmosphere of the space.',
                'Sustainability was integrated throughout the project, with energy-efficient systems, responsible material sourcing, and a focus on employee wellbeing through air quality, acoustic comfort, and biophilic design elements.',
            ],
            VI: [
                'WORKSPACE WITHIN THE CLOUDS is a corporate headquarters located on the 45th floor of a Shanghai skyscraper. The client, a technology company, sought a space that would reflect their innovative approach while providing a productive environment for their team.',
                "The concept draws inspiration from traditional Chinese landscapes, with the office organized as a series of 'islands' within a larger flowing space. These islands serve different functions, from focused work areas to collaborative zones and social spaces.",
                'The height of the space is emphasized through a series of suspended elements that create a sense of being among clouds. Custom lighting installations respond to the changing natural light throughout the day, subtly shifting the atmosphere of the space.',
                'Sustainability was integrated throughout the project, with energy-efficient systems, responsible material sourcing, and a focus on employee wellbeing through air quality, acoustic comfort, and biophilic design elements.',
            ],
        },
        images: [
            { image: villa1, description: null },
            { image: villa2, description: null },
            { image: villa3, description: null },
            { image: villa4, description: null },
        ],
    },
];
