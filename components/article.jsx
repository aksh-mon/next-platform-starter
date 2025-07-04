import React from 'react'

const article = () => {
    return (
        <div>

                <header class="text-center py-10 bg-white shadow-md">
                    <h1 class="text-4xl font-bold text-blue-700">🧠 Akshay's Tech Blogs 2025</h1>
                    <p class="text-gray-500 mt-2">Exploring frontend and AI-powered development</p>
                </header>

                <main class="max-w-4xl mx-auto px-4 py-10 space-y-12">
                    <article class="bg-white shadow-md rounded-xl overflow-hidden">
                        <img
                            src="https://source.unsplash.com/800x400/?code,keyboard"
                            alt="Coding setup"
                            class="w-full h-60 object-cover"
                        />
                        <div class="p-6">
                            <h2 class="text-2xl font-semibold text-blue-600">
                                🔧 2025 Web Trends: What&apos;s Hot in HTML & CSS
                            </h2>
                            <p class="text-sm text-gray-400 mt-1">Published on July 3, 2025</p>
                            <p class="mt-4 text-gray-700">
                                In 2025, HTML5 is still king, but CSS now supports powerful features like
                                <strong>container queries</strong>, <strong>native nesting</strong>, and enhanced responsive utilities.
                            </p>
                            <pre class="bg-gray-900 text-green-400 p-4 rounded-lg mt-4 text-sm overflow-auto">
                               
                            </pre>
                        </div>
                    </article>

                    <article class="bg-white shadow-md rounded-xl overflow-hidden">
                        <img
                            src="https://source.unsplash.com/800x400/?ai,technology"
                            alt="AI Technology"
                            class="w-full h-60 object-cover"
                        />
                        <div class="p-6">
                            <h2 class="text-2xl font-semibold text-blue-600">
                                🤖 Using AI Tools in Web Development (2025 Edition)
                            </h2>
                            <p class="text-sm text-gray-400 mt-1">Published on June 30, 2025</p>
                            <p class="mt-4 text-gray-700">
                                AI-assisted development is becoming the norm. Tools like <strong>ChatGPT</strong>,
                                <strong>Copilot X</strong>, and auto-documenting plugins make it faster to ship modern apps.
                            </p>
                            <p class="mt-2 text-gray-700">
                                In 2025, developers are not just coding — they're collaborating with AI to write tests, refactor code,
                                and even suggest accessibility improvements on the fly.
                            </p>
                        </div>
                    </article>
                </main>

                <footer class="text-center text-sm text-gray-500 mt-12 py-6 border-t">
                    &copy; 2025 Akshay Kumar. Built with ❤️ using Tailwind CSS.
                </footer>

    </div >
  )
}

export default article
