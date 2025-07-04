'use client';
import React, { useState } from 'react';
import Logo from '../icons/logo.svg';
import Sun from '../icons/sun.svg';
import Moon from '../icons/moon.svg';
import Image from 'next/image';

const ArticlePage = () => {
    const [darkMode, setDarkMode] = useState(false);
    const articles = [
        {
            title: '🔧 2025 Web Trends: What’s Hot in HTML & CSS',
            date: 'July 3, 2025',
            desc: `In 2025, HTML5 is still king, but CSS now supports powerful features like container queries, native nesting, and new responsive units.`,
            code: `@container style(width > 500px) {\n  .card {\n    background: lightblue;\n  }\n}`,
            image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1170&auto=format&fit=crop'
        },
        {
            title: '🤖 Using AI Tools in Web Development (2025 Edition)',
            date: 'June 30, 2025',
            desc: `AI-assisted development is the norm. Tools like ChatGPT, Copilot X, and auto-documenting extensions make shipping apps faster.`,
            code: '',
            image: 'https://images.unsplash.com/photo-1675557009285-b55f562641b9?q=80&w=1170&auto=format&fit=crop'
        },
        {
            title: '🌙 Dark Mode in 2025: Best Practices',
            date: 'June 20, 2025',
            desc: `Dark mode is a usability feature. Learn how to implement native dark mode toggles using Tailwind and system preferences.`,
            code: `<html class="dark">\n  <body class="bg-white dark:bg-gray-900 text-black dark:text-white">`,
            image: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=1170&auto=format&fit=crop'
        },
        {
            title: '⚡ Web Performance Tools You Should Use in 2025',
            date: 'June 15, 2025',
            desc: `Lighthouse is still relevant, but tools like WebPageTest, Bundlephobia, and React Profiler are essential for debugging UI.`,
            code: '',
            image: 'https://images.unsplash.com/photo-1633307057722-a4740ba0c5d0?q=80&w=1170&auto=format&fit=crop'
        },
        {
            title: '📱 Mobile-First Design Strategies for 2025',
            date: 'June 10, 2025',
            desc: `With mobile usage dominating, designers prioritize mobile-first layouts using responsive utility classes and minimal design.`,
            code: `@media (max-width: 768px) {\n  .navbar {\n    display: none;\n  }\n}`,
            image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1170&auto=format&fit=crop'
        },
        {
            title: '🔒 Securing Your Web App in 2025',
            date: 'June 5, 2025',
            desc: `Security is more important than ever. Modern best practices include CSP headers, two-factor auth, and encrypted storage.`,
            code: `Content-Security-Policy: default-src 'self'; script-src 'self' https://apis.example.com`,
            image: 'https://images.unsplash.com/photo-1603899122406-e7eb957f9fd6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            title: '📦 Optimizing JavaScript Bundles with ES Modules',
            date: 'June 1, 2025',
            desc: `Tree shaking and ES modules reduce bundle size. Tools like Vite and Turbopack improve load time and performance.`,
            code: `import { Button } from 'ui-library'; // Only the button gets bundled\n`,
            image: 'https://imgs.search.brave.com/s-bYDWhYAvwRu4oj59-xI-5RE1pOXvT4ybzJdlaWaF0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9rZWVw/Y29kaW5nLmlvL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIzLzA3/L2ltYWdlLTYxLnBu/Zw'
        },
        {
            title: '🚀 Jamstack in 2025: Still Relevant?',
            date: 'May 25, 2025',
            desc: `Jamstack is evolving with SSR support, edge rendering, and serverless databases. Ideal for performance-focused apps.`,
            code: `export const getStaticProps = async () => {\n  return { props: { data: await fetchData() } };\n}`,
            image: 'https://imgs.search.brave.com/FM5ij4sozvGpPu-QrjmchZLcgRab80PtWjVeRSz40XM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mcmFt/ZXJ1c2VyY29udGVu/dC5jb20vaW1hZ2Vz/LzJ3c1FIWDFCV1o5/SE9xNDVoYVBRMDVi/R2dRcy5qcGc'
        }
    ];

    return (
        <div
            className={`relative min-h-screen transition-colors duration-500 ${
                darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
            }`}
        >
            {/* Header */}
            <header
                className={`text-center py-10 shadow-md transition-colors duration-500 ${
                    darkMode ? 'bg-gray-500' : 'bg-red-100'
                }`}
                id="header"
            >
                <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold bitCoin transition-all duration-500">
                    Akshay&apos;s Tech Blogs <br /> 2025
                </h1>
                <p className="sm:text-xl lg:text-4xl mt-2 coral text-black transition-opacity duration-500">
                    Exploring Frontend and AI-powered development basic
                </p>
            </header>

            {/* Main Articles */}
            <main className="max-w-4xl mx-auto px-4 py-10 space-y-12 transition-all duration-500">
                {articles.map((item, index) => {
                    return (
                        <div key={index} className="relative">
                            <Image src={Logo} alt="logo" height={80} width={80} className="absolute left-0 top-0" />
                            <span className="absolute text-red-700 ml-[6%] text-9xl top-0">{index + 1}</span>

                            <article
                                className={`${
                                    darkMode ? 'bg-black text-white' : 'bg-white text-black'
                                } shadow-md rounded-xl overflow-hidden transition-colors duration-500`}
                            >
                                <img src={item.image} alt="Article image" className="w-full h-80 object-cover" />
                                <div className="p-6">
                                    <h2 className="text-2xl font-semibold text-blue-600 dark:text-yellow-400">
                                        {item.title}
                                    </h2>
                                    <p className="text-sm text-gray-400 mt-1">{`Published on ${item.date}`}</p>
                                    <p className="mt-4 text-gray-700 dark:text-gray-300">{item.desc}</p>
                                    {item.code && (
                                        <pre className="bg-gray-900 text-green-400 p-4 rounded-lg mt-4 text-sm overflow-auto">
                                            <code>{item.code}</code>
                                        </pre>
                                    )}
                                </div>
                            </article>
                        </div>
                    );
                })}
            </main>

            {/* Footer */}
            <footer
                className={`text-center text-sm mt-12 py-6 shadow-md transition-colors duration-500 ${
                    darkMode ? 'bg-gray-800 text-gray-400' : 'bg-red-100 text-gray-500'
                }`}
                id="footer"
            >
                &copy; 2025 Akshay Kumar. Built with ❤️ using Tailwind CSS.
            </footer>

            {/* Toggle Button */}
            <button
                onClick={() => setDarkMode(!darkMode)}
                className="cursor-pointer w-fit rounded-2xl hover:shadow-lg p-2 bg-gradient-to-r from-slate-300 to-slate-500 fixed top-[70%] left-[90%] transition duration-300"
            >
                <Image src={darkMode ? Sun : Moon} alt="theme-toggle" height={100} width={45} />
            </button>
        </div>
    );
};
export default ArticlePage;
