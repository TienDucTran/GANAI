# Dynamic Meta Tags Implementation Guide

This guide explains how to implement and use the dynamic meta tag system for better SEO and social media sharing across your GANAI application.

## Overview

The meta tag system consists of three main components:

1. **Meta Configuration** (`src/config/meta.js`) - Defines SEO data for each page
2. **useMeta Hook** (`src/hooks/useMeta.js`) - Manages dynamic meta tag updates
3. **Meta Component** (`src/components/Meta.jsx`) - Easy-to-use wrapper component

## Features

- ✅ Dynamic page titles and descriptions
- ✅ Open Graph tags for social media sharing
- ✅ Twitter Card support
- ✅ Canonical URLs
- ✅ Structured data (JSON-LD)
- ✅ Keyword optimization
- ✅ Automatic meta tag management

## Quick Start

### 1. Basic Usage

Add the Meta component to any page:

```jsx
import Meta from '../components/Meta';

const MyPage = () => {
    return (
        <div>
            <Meta pageKey="home" />
            {/* Your page content */}
        </div>
    );
};
```

### 2. Custom Meta Data

Override default meta data for specific pages:

```jsx
const MyPage = () => {
    const customMeta = {
        title: 'Custom Page Title | GANAI',
        description: 'Custom page description for better SEO',
        image: '/custom-image.jpg',
        keywords: 'custom, keywords, for, this, page',
    };

    return (
        <div>
            <Meta pageKey="home" customMeta={customMeta} />
            {/* Your page content */}
        </div>
    );
};
```

### 3. Dynamic Meta Data

For pages with dynamic content (like SpaceDetail):

```jsx
const SpaceDetail = () => {
    const { id } = useParams();
    const [currentProject, setCurrentProject] = useState(null);

    const getDynamicMeta = () => {
        if (!currentProject) return {};

        return {
            title: `${currentProject.title} | GANAI Design Studio`,
            description: currentProject.description,
            image: currentProject.images[0],
            url: `https://ganai.com/spaces/${currentProject.id}`,
            keywords: `${currentProject.title}, ${currentProject.location}, design project`,
        };
    };

    return (
        <div>
            <Meta pageKey="spaceDetail" customMeta={getDynamicMeta()} />
            {/* Your page content */}
        </div>
    );
};
```

## Configuration

### Meta Configuration File

The `src/config/meta.js` file contains default meta data for all pages:

```javascript
const metaConfig = {
    default: {
        title: 'GANAI - Creative Design Studio',
        description: 'Discover innovative design solutions...',
        keywords: 'design studio, architecture, interior design...',
        image: '/og-image.jpg',
        url: 'https://ganai.com',
        type: 'website',
        siteName: 'GANAI',
        twitterHandle: '@ganai_design',
    },
    home: {
        title: 'GANAI - Creative Design Studio | Home',
        description: 'Welcome to GANAI, where creativity meets innovation...',
        // ... more specific meta data
    },
    // ... other pages
};
```

### Adding New Pages

1. Add meta configuration to `src/config/meta.js`:

```javascript
const metaConfig = {
    // ... existing pages
    newPage: {
        title: 'New Page | GANAI Design Studio',
        description: 'Description for the new page',
        keywords: 'relevant, keywords, for, new, page',
        image: '/images/new-page-og.jpg',
        url: 'https://ganai.com/new-page',
        type: 'website',
    },
};
```

2. Add the route to `src/config/routes.js`:

```javascript
const routes = {
    // ... existing routes
    newPage: '/new-page',
};
```

3. Add the route to `src/routes/index.js`:

```javascript
import NewPage from '../pages/newPage.page';

const PublicRoutes = [
    // ... existing routes
    { path: config.routes.newPage, component: NewPage },
];
```

4. Use the Meta component in your page:

```jsx
import Meta from '../components/Meta';

const NewPage = () => {
    return (
        <div>
            <Meta pageKey="newPage" />
            {/* Your page content */}
        </div>
    );
};
```

## Meta Tags Generated

The system automatically generates the following meta tags:

### Basic SEO

- `<title>` - Page title
- `<meta name="description">` - Page description
- `<meta name="keywords">` - Page keywords
- `<link rel="canonical">` - Canonical URL

### Open Graph (Facebook, LinkedIn)

- `<meta property="og:title">` - Page title
- `<meta property="og:description">` - Page description
- `<meta property="og:image">` - Featured image
- `<meta property="og:url">` - Page URL
- `<meta property="og:type">` - Content type
- `<meta property="og:site_name">` - Site name

### Twitter Cards

- `<meta name="twitter:card">` - Card type
- `<meta name="twitter:title">` - Page title
- `<meta name="twitter:description">` - Page description
- `<meta name="twitter:image">` - Featured image
- `<meta name="twitter:site">` - Twitter handle

### Structured Data (JSON-LD)

- Organization schema for better search engine understanding

## Best Practices

### 1. Unique Titles and Descriptions

- Keep titles under 60 characters
- Keep descriptions between 150-160 characters
- Make each page's meta data unique

### 2. Image Optimization

- Use high-quality images (1200x630px recommended for social sharing)
- Optimize images for web (compress, use WebP format)
- Include alt text for accessibility

### 3. Keywords

- Use relevant, natural keywords
- Don't overstuff keywords
- Focus on user intent

### 4. URLs

- Use clean, descriptive URLs
- Include canonical URLs to prevent duplicate content
- Use HTTPS for all URLs

### 5. Social Media

- Test your pages on Facebook Debugger and Twitter Card Validator
- Use engaging images for social sharing
- Write compelling descriptions for social media

## Testing

### 1. Facebook Debugger

Visit: https://developers.facebook.com/tools/debug/
Enter your URL to test Open Graph tags

### 2. Twitter Card Validator

Visit: https://cards-dev.twitter.com/validator
Enter your URL to test Twitter Cards

### 3. Google Rich Results Test

Visit: https://search.google.com/test/rich-results
Test structured data implementation

### 4. SEO Tools

- Google Search Console
- Screaming Frog SEO Spider
- SEMrush
- Ahrefs

## Troubleshooting

### Meta tags not updating

1. Check if the pageKey matches the config
2. Verify the Meta component is imported and used
3. Clear browser cache and reload

### Social media not showing correct data

1. Use Facebook Debugger to refresh cache
2. Check image URLs are absolute
3. Verify Open Graph tags are properly formatted

### Duplicate meta tags

1. The system automatically removes duplicates
2. Check for conflicting meta tags in your HTML head

## Advanced Usage

### Custom Hook Usage

You can use the `useMeta` hook directly for more control:

```jsx
import useMeta from '../hooks/useMeta';

const MyPage = () => {
    const customMeta = {
        title: 'Custom Title',
        description: 'Custom description',
    };

    useMeta('home', customMeta);

    return <div>{/* Your page content */}</div>;
};
```

### Dynamic Meta with API Data

```jsx
const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Fetch product data
        fetchProduct(id).then(setProduct);
    }, [id]);

    const getDynamicMeta = () => {
        if (!product) return {};

        return {
            title: `${product.name} | GANAI Products`,
            description: product.description,
            image: product.image,
            url: `https://ganai.com/products/${product.id}`,
            keywords: `${product.name}, ${product.category}, design products`,
        };
    };

    return (
        <div>
            <Meta pageKey="products" customMeta={getDynamicMeta()} />
            {/* Product content */}
        </div>
    );
};
```

## Performance Considerations

- Meta tags are updated efficiently using DOM manipulation
- No unnecessary re-renders
- Minimal impact on page load time
- Automatic cleanup of old meta tags

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11+ (with polyfills if needed)
- Mobile browsers

## Conclusion

This dynamic meta tag system provides comprehensive SEO optimization for your GANAI application. By following this guide, you can ensure that all your pages have proper meta tags for better search engine visibility and social media sharing.

For questions or issues, refer to the troubleshooting section or check the implementation in the existing pages for examples.
