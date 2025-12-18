import React from 'react';
import Meta from '../components/Meta';

const Products = () => {
    const styles = {
        container: {
            padding: '40px 20px',
            maxWidth: '1200px',
            margin: '0 auto',
        },
        header: {
            textAlign: 'center',
            marginBottom: '60px',
        },
        heading: {
            fontSize: '36px',
            fontWeight: 'bold',
            marginBottom: '16px',
            color: '#242424',
        },
        subheading: {
            fontSize: '18px',
            color: '#6B6B6B',
            maxWidth: '700px',
            margin: '0 auto',
        },
        categoriesContainer: {
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '40px',
        },
        categoryButton: {
            padding: '8px 16px',
            backgroundColor: '#f0f0f0',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: 'pointer',
            color: '#6B6B6B',
            transition: 'all 0.2s ease',
        },
        activeCategory: {
            backgroundColor: '#242424',
            color: 'white',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '30px',
        },
        card: {
            backgroundColor: 'white',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            transition: 'transform 0.2s ease-in-out',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
        },
        cardImage: {
            height: '200px',
            backgroundColor: '#e0e0e0',
            position: 'relative',
        },
        cardContent: {
            padding: '20px',
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
        },
        cardTitle: {
            fontSize: '20px',
            fontWeight: '600',
            marginBottom: '10px',
        },
        cardText: {
            fontSize: '15px',
            color: '#6B6B6B',
            marginBottom: '15px',
            flex: '1',
        },
        priceRow: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '15px',
        },
        price: {
            fontSize: '20px',
            fontWeight: 'bold',
            color: '#242424',
        },
        badge: {
            display: 'inline-block',
            padding: '4px 8px',
            backgroundColor: '#e0f7fa',
            color: '#00838f',
            borderRadius: '4px',
            fontSize: '12px',
            fontWeight: '500',
        },
        button: {
            display: 'inline-block',
            width: '100%',
            padding: '10px',
            backgroundColor: '#242424',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
            textAlign: 'center',
            textDecoration: 'none',
        },
    };

    // Product data
    const products = [
        {
            id: 1,
            title: 'AI Design Assistant',
            description:
                'An intelligent assistant that helps you create beautiful interior designs based on your preferences.',
            price: '$149.99',
            category: 'Software',
            badge: 'New',
        },
        {
            id: 2,
            title: 'Smart Home Hub',
            description:
                'Control your entire home with this AI-powered hub that learns your preferences over time.',
            price: '$299.99',
            category: 'Hardware',
            badge: 'Best Seller',
        },
        {
            id: 3,
            title: 'Design Template Collection',
            description:
                'A curated set of AI-generated design templates for various room types and styles.',
            price: '$49.99',
            category: 'Templates',
            badge: null,
        },
        {
            id: 4,
            title: 'Virtual Room Scanner',
            description:
                'Scan any room and get instant 3D models and design suggestions from our AI.',
            price: '$199.99',
            category: 'Hardware',
            badge: 'Limited',
        },
        {
            id: 5,
            title: 'AI Color Palette Generator',
            description:
                'Generate perfect color palettes for your space based on your existing furniture and preferences.',
            price: '$29.99',
            category: 'Software',
            badge: null,
        },
        {
            id: 6,
            title: 'Premium Design Course',
            description:
                'Learn how to use AI tools to enhance your design workflow with this comprehensive course.',
            price: '$79.99',
            category: 'Courses',
            badge: 'Popular',
        },
    ];

    // Get unique categories
    const categories = [
        'All',
        ...new Set(products.map((product) => product.category)),
    ];

    return (
        <div style={styles.container}>
            <Meta pageKey="products" />
            <header style={styles.header}>
                <h1 style={styles.heading}>Our Products</h1>
                <p style={styles.subheading}>
                    Discover our range of AI-powered design products that help
                    you create beautiful, functional spaces with ease.
                </p>
            </header>

            <div style={styles.categoriesContainer}>
                {categories.map((category, index) => (
                    <button
                        key={index}
                        style={{
                            ...styles.categoryButton,
                            ...(index === 0 ? styles.activeCategory : {}),
                        }}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div style={styles.grid}>
                {products.map((product) => (
                    <div key={product.id} style={styles.card}>
                        <div style={styles.cardImage}>
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    color: '#6B6B6B',
                                    fontWeight: '500',
                                }}
                            >
                                Product Image
                            </div>
                        </div>
                        <div style={styles.cardContent}>
                            <h2 style={styles.cardTitle}>{product.title}</h2>
                            <p style={styles.cardText}>{product.description}</p>
                            <div style={styles.priceRow}>
                                <span style={styles.price}>
                                    {product.price}
                                </span>
                                {product.badge && (
                                    <span style={styles.badge}>
                                        {product.badge}
                                    </span>
                                )}
                            </div>
                            <button style={styles.button}>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;
