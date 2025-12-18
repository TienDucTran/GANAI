import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
const resources = {
    EN: {
        translation: {
            home: 'Home',
            spaces: 'Spaces',
            exhibitions: 'Exhibitions',
            products: 'Products',
            introduce: 'About',
            contact: 'Contact',
            theme: 'Theme',
            // Home page translations
            'home.heroTitle': 'Spaces That Speak to the Soul',
            'home.heroDescription':
                'GANAI Design was founded in Ho Chi Minh City with the belief that great spaces always carry emotions and create lasting connections with people.',
            'home.exploreSpaces': 'Explore Spaces',
            'home.aboutStudio': 'About Studio',
            'home.featuredProject': 'Featured Project',
            'home.featuredProjectImage': 'Featured Project Image',
            'home.featuredProjectTitle': 'Modern Minimalist Space',
            'home.featuredProjectDescription':
                'A clean, minimalist space with focus on functionality and aesthetic simplicity. This project showcases how AI can enhance the design process while maintaining the core principles of minimalist design.',
            'home.featuredProjectLocation': 'Seoul, South Korea • 2023',
            'home.viewProject': 'View Project',
            'home.designPhilosophy': 'Design Philosophy',
            'home.designPhilosophyDesc1':
                'With great respect for tradition as a valuable resource, the studio strives to create beautiful possibilities for the future that preserve and honor the essence of good design.',
            'home.designPhilosophyDesc2':
                'Instead of allowing traditional design principles to fade over time, we seek to safeguard and celebrate these assets by reinterpreting aesthetics through a contemporary, technology-enhanced lens.',
            'home.learnMore': 'Learn More',

            'home.getInTouch': 'Get in Touch',
            'home.contactDesc':
                'We wish to deliver you the best. From our studio to yours.',
            'home.contactUs': 'Contact Us',
            'home.image': 'Image',
            'home.explore': 'Explore',
            // Introduce page translations
            'introduce.aboutStudio': 'About GANAI Studio',
            'introduce.ourStoryTitle': 'Our Story',
            'introduce.ourStoryP1':
                'Founded in Ho Chi Minh City, GANAI Studio emerged from a passion for creating spaces that harmonize functionality with aesthetic beauty. Our journey began with a simple vision: to transform living and working environments into thoughtfully designed spaces that inspire and elevate everyday experiences.',
            'introduce.ourStoryP2':
                "Drawing inspiration from Vietnam's rich cultural heritage and contemporary design trends, we create interiors that reflect the unique personality and lifestyle of each client while maintaining a timeless elegance.",
            'introduce.ourPhilosophyTitle': 'Our Philosophy',
            'introduce.ourPhilosophyP1':
                'At GANAI Studio, we believe that exceptional design should be accessible to everyone. Our approach centers on understanding the unique needs and aspirations of our clients, then creating personalized solutions that transform their vision into reality.',
            'introduce.ourPhilosophyP2':
                'We are committed to sustainable practices, incorporating eco-friendly materials and energy-efficient solutions whenever possible. By balancing aesthetics, functionality, and environmental consciousness, we create spaces that are both beautiful and responsible.',
            'introduce.ourExpertiseTitle': 'Our Expertise',
            'introduce.residentialDesignTitle': 'Residential Design',
            'introduce.residentialDesignDesc':
                'Transform your home into a sanctuary that reflects your personal style and meets your functional needs. From apartments to villas, we create living spaces that inspire.',
            'introduce.commercialSpacesTitle': 'Commercial Spaces',
            'introduce.commercialSpacesDesc':
                'Elevate your business with interiors that communicate your brand identity and enhance productivity. We specialize in retail, hospitality, and office environments.',
            'introduce.furnitureDesignTitle': 'Furniture Design',
            'introduce.furnitureDesignDesc':
                'Our custom furniture solutions blend form and function, creating signature pieces that complement your space perfectly and stand the test of time.',
            'introduce.spacePlanningTitle': 'Space Planning',
            'introduce.spacePlanningDesc':
                'Maximize the potential of your space with our thoughtful planning services, ensuring optimal flow, functionality, and aesthetic harmony.',
            'introduce.ourValuesTitle': 'Our Values',
            'introduce.innovationTitle': 'Innovation',
            'introduce.innovationDesc':
                'We constantly explore new ideas, materials, and techniques to bring fresh perspectives to every project.',
            'introduce.qualityTitle': 'Quality',
            'introduce.qualityDesc':
                'We are committed to excellence in every detail, from concept development to final execution.',
            'introduce.collaborationTitle': 'Collaboration',
            'introduce.collaborationDesc':
                'We believe in the power of partnership, working closely with clients, craftsmen, and specialists to achieve exceptional results.',
            'introduce.ctaText':
                "Ready to transform your space? Let's create something beautiful together.",
            'introduce.ctaButton': 'Contact Us',
            // Contact page translations
            'contact.title': 'Contact GANAI Studio',
            'contact.visitUs': 'Visit Us',
            'contact.address1': '1st Floor, 51 Street 24A',
            'contact.address2': 'An Phu Ward, Thu Duc City',
            'contact.address3': 'Ho Chi Minh City',
            'contact.address4': 'Vietnam',
            'contact.contactUs': 'Contact Us',
            'contact.phone': 'Phone',
            'contact.email': 'Email',
            'contact.openingHours': 'Opening Hours',
            'contact.hours.weekdays': 'Monday - Friday: 08:00 AM - 6:00 PM',
            'contact.hours.saturday': 'Saturday: 09:00 AM - 5:00 PM',
            'contact.hours.sunday': 'Sunday: Closed',
            'contact.form.title': 'Contact Us Directly',
            'contact.form.label': 'Your Mobile Phone Number',
            'contact.form.placeholder': 'e.g., 0123-456-789',
            'contact.form.helper':
                "Enter your mobile number and we'll contact you back as soon as possible.",
            'contact.form.submit': 'Request a Call Back',
            'contact.form.sending': 'Sending...',
            'contact.form.success':
                "Thank you! We'll contact you shortly at the provided number.",
            'contact.findUs': 'Find Us',
            'contact.error.invalidPhone':
                'Please enter a valid Vietnamese phone number',
        },
    },
    VI: {
        translation: {
            home: 'Trang chủ',
            spaces: 'Không gian',
            exhibitions: 'Triển lãm',
            products: 'Sản phẩm',
            introduce: 'Giới thiệu',
            contact: 'Liên hệ',
            theme: 'Chủ đề',
            // Home page translations
            'home.heroTitle': 'Không gian chạm đến tâm hồn',
            'home.heroDescription':
                'GANAI Design được thành lập tại TP. Hồ Chí Minh với niềm tin rằng những không gian tuyệt vời luôn mang theo cảm xúc và tạo nên kết nối bền vững với con người.',
            'home.exploreSpaces': 'Khám phá Không gian',
            'home.aboutStudio': 'Về Studio',
            'home.featuredProject': 'Dự án nổi bật',
            'home.featuredProjectImage': 'Hình ảnh Dự án Nổi bật',
            'home.featuredProjectTitle': 'Không gian tối giản hiện đại',
            'home.featuredProjectDescription':
                'Một không gian tối giản, sạch sẽ tập trung vào chức năng và sự đơn giản thẩm mỹ. Dự án này thể hiện cách AI có thể nâng cao quá trình thiết kế mà vẫn giữ vững các nguyên tắc cốt lõi của phong cách tối giản.',
            'home.featuredProjectLocation': 'Seoul, Hàn Quốc • 2023',
            'home.viewProject': 'Xem Dự án',
            'home.designPhilosophy': 'Triết lý thiết kế',
            'home.designPhilosophyDesc1':
                'Với sự tôn trọng truyền thống như một nguồn tài nguyên quý giá, studio hướng đến tạo ra những khả năng tươi đẹp cho tương lai, đồng thời gìn giữ và tôn vinh tinh hoa của thiết kế tốt.',
            'home.designPhilosophyDesc2':
                'Thay vì để các nguyên tắc thiết kế truyền thống mai một theo thời gian, chúng tôi mong muốn bảo tồn và tôn vinh những giá trị này bằng cách tái hiện thẩm mỹ qua lăng kính công nghệ hiện đại.',
            'home.learnMore': 'Tìm hiểu thêm',
            'home.getInTouch': 'Liên hệ với chúng tôi',
            'home.contactDesc':
                'Chúng tôi mong muốn mang đến cho bạn những điều tốt nhất. Từ studio của chúng tôi đến bạn.',
            'home.contactUs': 'Liên hệ',
            'home.image': 'Hình ảnh',
            'home.explore': 'Khám phá',
            // Introduce page translations
            'introduce.aboutStudio': 'Về GANAI Studio',
            'introduce.ourStoryTitle': 'Câu chuyện của chúng tôi',
            'introduce.ourStoryP1':
                'Được thành lập tại TP. Hồ Chí Minh, GANAI Studio ra đời từ niềm đam mê tạo nên những không gian hài hòa giữa công năng và vẻ đẹp thẩm mỹ. Hành trình của chúng tôi bắt đầu với một tầm nhìn đơn giản: biến đổi không gian sống và làm việc thành những nơi được thiết kế tinh tế, truyền cảm hứng và nâng tầm trải nghiệm hàng ngày.',
            'introduce.ourStoryP2':
                'Lấy cảm hứng từ di sản văn hóa Việt Nam và các xu hướng thiết kế đương đại, chúng tôi sáng tạo nên những không gian nội thất phản ánh cá tính, lối sống riêng của từng khách hàng mà vẫn giữ được nét thanh lịch vượt thời gian.',
            'introduce.ourPhilosophyTitle': 'Triết lý của chúng tôi',
            'introduce.ourPhilosophyP1':
                'Tại GANAI Studio, chúng tôi tin rằng thiết kế xuất sắc nên dành cho tất cả mọi người. Phương châm của chúng tôi là thấu hiểu nhu cầu, mong muốn riêng của từng khách hàng để tạo ra giải pháp cá nhân hóa, biến ý tưởng thành hiện thực.',
            'introduce.ourPhilosophyP2':
                'Chúng tôi cam kết thực hành phát triển bền vững, sử dụng vật liệu thân thiện môi trường và các giải pháp tiết kiệm năng lượng khi có thể. Bằng cách cân bằng giữa thẩm mỹ, công năng và ý thức môi trường, chúng tôi kiến tạo nên những không gian vừa đẹp vừa có trách nhiệm.',
            'introduce.ourExpertiseTitle': 'Chuyên môn của chúng tôi',
            'introduce.residentialDesignTitle': 'Thiết kế nhà ở',
            'introduce.residentialDesignDesc':
                'Biến ngôi nhà của bạn thành chốn bình yên phản ánh phong cách cá nhân và đáp ứng nhu cầu sử dụng. Từ căn hộ đến biệt thự, chúng tôi tạo nên không gian sống truyền cảm hứng.',
            'introduce.commercialSpacesTitle': 'Không gian thương mại',
            'introduce.commercialSpacesDesc':
                'Nâng tầm doanh nghiệp của bạn với nội thất thể hiện bản sắc thương hiệu và tăng hiệu quả làm việc. Chúng tôi chuyên về không gian bán lẻ, khách sạn và văn phòng.',
            'introduce.furnitureDesignTitle': 'Thiết kế nội thất',
            'introduce.furnitureDesignDesc':
                'Các giải pháp nội thất riêng biệt của chúng tôi kết hợp hài hòa giữa hình thức và công năng, tạo nên những sản phẩm đặc trưng phù hợp hoàn hảo với không gian và bền vững theo thời gian.',
            'introduce.spacePlanningTitle': 'Quy hoạch không gian',
            'introduce.spacePlanningDesc':
                'Tối ưu hóa tiềm năng không gian với dịch vụ quy hoạch hợp lý, đảm bảo luồng di chuyển, công năng và sự hài hòa thẩm mỹ.',
            'introduce.ourValuesTitle': 'Giá trị cốt lõi',
            'introduce.innovationTitle': 'Sáng tạo',
            'introduce.innovationDesc':
                'Chúng tôi không ngừng khám phá ý tưởng, vật liệu và kỹ thuật mới để mang lại góc nhìn tươi mới cho từng dự án.',
            'introduce.qualityTitle': 'Chất lượng',
            'introduce.qualityDesc':
                'Chúng tôi cam kết sự xuất sắc trong từng chi tiết, từ phát triển ý tưởng đến hoàn thiện cuối cùng.',
            'introduce.collaborationTitle': 'Hợp tác',
            'introduce.collaborationDesc':
                'Chúng tôi tin vào sức mạnh của sự hợp tác, làm việc chặt chẽ với khách hàng, nghệ nhân và chuyên gia để đạt kết quả xuất sắc.',
            'introduce.ctaText':
                'Sẵn sàng biến đổi không gian của bạn? Hãy cùng nhau tạo nên điều tuyệt vời.',
            'introduce.ctaButton': 'Liên hệ',
            // Contact page translations
            'contact.title': 'Liên hệ GANAI Studio',
            'contact.visitUs': 'Đến với chúng tôi',
            'contact.address1': 'Lầu 1, 51 Đường 24A',
            'contact.address2': 'Phường An Phú, TP Thủ Đức',
            'contact.address3': 'TP Hồ Chí Minh',
            'contact.address4': 'Việt Nam',
            'contact.contactUs': 'Liên hệ',
            'contact.phone': 'Điện thoại',
            'contact.email': 'Email',
            'contact.openingHours': 'Giờ mở cửa',
            'contact.hours.weekdays': 'Thứ 2 - Thứ 6: 08:00 a.m - 18:00 p.m',
            'contact.hours.saturday': 'Thứ 7: 09:00 a.m - 17:00 p.m',
            'contact.hours.sunday': 'Chủ nhật: Đóng cửa',
            'contact.form.title': 'Liên hệ trực tiếp',
            'contact.form.label': 'Số điện thoại di động của bạn',
            'contact.form.placeholder': 'vd: 0123-456-789',
            'contact.form.helper':
                'Nhập số điện thoại, chúng tôi sẽ liên hệ lại sớm nhất.',
            'contact.form.submit': 'Yêu cầu gọi lại',
            'contact.form.sending': 'Đang gửi...',
            'contact.form.success':
                'Cảm ơn bạn! Chúng tôi sẽ liên hệ lại sớm qua số điện thoại đã cung cấp.',
            'contact.findUs': 'Tìm chúng tôi',
            'contact.error.invalidPhone':
                'Vui lòng nhập số điện thoại Việt Nam hợp lệ',
        },
    },
};

const savedLanguage = localStorage.getItem('language') || 'EN';

i18n.use(initReactI18next).init({
    resources,
    lng: savedLanguage,
    fallbackLng: 'EN',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
