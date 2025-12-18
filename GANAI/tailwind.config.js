/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        colors: {
            white: '#FFFFFF',
            black: '#111',
            grey: '#F3F3F3',
            'dark-grey': '#999',
            'light-grey': '#FAFAFA',
            red: '#FF4E4E',
            transparent: 'transparent',
            twitter: '#1DA1F2',
            purple: '#8B46FF',
            gray: {
                100: '#FAFAFA',
                200: '#F3F3F3',
                300: '#A3A3A3',
                400: '#D4D4D4',
                500: '#A3A3A3',
                600: '#6B6B6B',
                700: '#4B4B4B',
                800: '#2E2E2E',
                900: '#242424',
            },
        },

        fontSize: {
            sm: '12px',
            base: '14px',
            xl: '16px',
            '2xl': '20px',
            '3xl': '28px',
            '4xl': '38px',
            '5xl': '50px',
            '6xl': '60px',
        },

        extend: {
            fontFamily: {
                georgia: ["'Georgia'", 'serif'],
                varela: ['Varela Round', 'Arial', 'sans-serif'],
            },
            spacing: {
                128: '32rem',
                144: '36rem',
                15: '3.75rem',
                70: '17.5rem',
                125: '31.25rem',
            },
            aspectRatio: {
                '4/3': '4 / 3',
                '3/2': '3 / 2',
                '2/3': '2 / 3',
                '9/16': '9 / 16',
                '1/1': '1 / 1',
                '16/9': '16 / 9',
                '2/1': '2 / 1',
            },
            lineHeight: {
                'extra-loose': '2.5',
                12: '3rem',
            },
            maxWidth: {
                xxs: '16rem',
                xxxs: '12rem',
            },
            borderWidth: {
                DEFAULT: '1px',
                0: '0',
                1: '1px',
                2: '2px',
                3: '3px',
            },
            boxShadow: {
                custom: '0 4px 20px rgba(0,0,0,0.08)',
                hover: '0 8px 30px rgba(0,0,0,0.12)',
            },
            screens: {
                '2xl': '1536px',
            },
            animation: {
                'spin-slow': 'spin 3s linear infinite',
                'bounce-slow': 'bounce 3s infinite',
                wiggle: 'wiggle 1s ease-in-out infinite',
                pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                fade: 'fade 1s ease-in-out',
                'fade-in': 'fadeIn 0.5s ease-out',
                'fade-out': 'fadeOut 0.5s ease-out',
                'slide-in': 'slideIn 0.5s ease-out',
                'slide-out': 'slideOut 0.5s ease-out',
                'scale-in': 'scaleIn 0.5s ease-out',
                'scale-out': 'scaleOut 0.5s ease-out',
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
                fade: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeOut: {
                    '0%': { opacity: '1' },
                    '100%': { opacity: '0' },
                },
                slideIn: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideOut: {
                    '0%': { transform: 'translateY(0)', opacity: '1' },
                    '100%': { transform: 'translateY(20px)', opacity: '0' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.9)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                scaleOut: {
                    '0%': { transform: 'scale(1)', opacity: '1' },
                    '100%': { transform: 'scale(0.9)', opacity: '0' },
                },
            },
            transitionProperty: {
                height: 'height',
                spacing: 'margin, padding',
                width: 'width',
                position: 'top, right, bottom, left',
            },
            transitionDuration: {
                400: '400ms',
                2000: '2000ms',
            },
            transitionTimingFunction: {
                bounce: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                'in-out-back': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
            },
        },
    },
    plugins: [],
    corePlugins: {
        lineClamp: true,
    },
};
