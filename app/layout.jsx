import '../styles/globals.css';
export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Netlify Starter'
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                <meta name="theme-color" content="#0ea5e9" />
                <meta name="language" content="en" />
                <meta name="author" content="Akshay Kumar" />
                <meta name='auhtornew' content='khiladi'/>
                <title>Akshay&apos;s Tech Blog 2025 | Frontend & AI Dev</title>
                <meta name="description" content="Explore the latest in frontend development, Tailwind CSS, and AI-powered coding with Akshay's tech blog." />
                <meta name="keywords" content="frontend, web development, HTML, CSS, Tailwind, Next.js, JavaScript, AI tools, blog 2025, Akshay Kumar, developer blog" />

                <link rel="canonical" href="https://yourdomain.com/" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://yourdomain.com/" />
                <meta property="og:title" content="Akshay's Tech Blog 2025" />
                <meta property="og:description" content="Explore the latest in frontend development, Tailwind CSS, and AI-powered coding with Akshay." />
                <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />
                <meta property="og:locale" content="en_IN" />
                <meta property="og:site_name" content="Akshay's Tech Blog" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@yourhandle" />
                <meta name="twitter:creator" content="@yourhandle" />
                <meta name="twitter:title" content="Akshay's Tech Blog 2025" />
                <meta name="twitter:description" content="Frontend & AI coding trends with Tailwind, Next.js and more." />
                <meta name="twitter:image" content="https://yourdomain.com/og-image.jpg" />

                <link rel="icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
                <link href="https://fonts.googleapis.com/css2?family=Bitcount+Grid+Double:wght@100..900&display=swap" rel="stylesheet"></link>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
                <link href="https://fonts.googleapis.com/css2?family=Coral+Pixels&display=swap" rel="stylesheet" />

            </head>

            <body className="">
                {children}
            </body>
        </html>
    );
}
