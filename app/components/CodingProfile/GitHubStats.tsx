"use client"

import { SITE_NAP } from "@/config/siteConfig"
import { Icon } from "@/app/components/Icon"
import { Link } from "@/app/utils/Link"
import { GitHubCalendar } from "react-github-calendar"
import { useEffect, useState } from "react"
import { MotionDiv } from "@/app/utils/lazy-ui"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

interface GitHubUser {
    login: string
    public_repos: number
    followers: number
    following: number
    public_gists: number
    avatar_url: string
}

interface Repo {
    name: string
    description: string
    language: string
    stargazers_count: number
    forks_count: number
    html_url: string
    owner: {
        login: string
    }
}

export const GitHubStats = () => {
    const [stats, setStats] = useState<GitHubUser | null>(null)
    const [topRepos, setTopRepos] = useState<Repo[]>([])
    const [readmeContent, setReadmeContent] = useState<string>("")
    const username = SITE_NAP.profiles.github.split("/").pop() || "HarshPariya"

    useEffect(() => {
        // 1. Fetch User Stats
        fetch(`https://api.github.com/users/${username}`)
            .then(res => res.json())
            .then(data => setStats(data))
            .catch(() => setStats(null))

        // 2. Fetch Repos and sort by stars (Reliable alternative to Pinned Repos)
        fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`)
            .then(res => res.json())
            .then(data => {
                if (Array.isArray(data)) {
                    // Sort by stars descending
                    const sorted = data.sort((a: Repo, b: Repo) => b.stargazers_count - a.stargazers_count)
                    setTopRepos(sorted.slice(0, 6))
                }
            })
            .catch(err => console.error("Failed to fetch repos", err))

        // 3. Fetch Profile README (Raw content)
        // Try 'main' branch first
    }, [username])


    if (!stats) {
        return (
            <div className="h-full rounded-3xl border border-[var(--beige-200)] bg-white/80 p-8 shadow-sm">
                <div className="flex animate-pulse flex-col gap-4">
                    <div className="h-12 w-12 rounded-full bg-[var(--beige-200)]"></div>
                    <div className="h-4 w-32 bg-[var(--beige-200)]"></div>
                    <div className="h-32 w-full rounded-xl bg-[var(--beige-100)]"></div>
                </div>
            </div>
        )
    }

    return (
        <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="group relative h-full overflow-hidden rounded-3xl border border-[var(--beige-200)] bg-white/80 p-8 shadow-sm transition-all hover:shadow-md"
        >
            <div className="relative z-10 flex flex-col gap-8">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <div className="absolute inset-0 rounded-full bg-[var(--beige-200)] opacity-30 blur-md"></div>
                            <Icon name="github" className="relative h-12 w-12 text-stone-700" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-stone-800">GitHub</h3>
                            <Link href={SITE_NAP.profiles.github} target="_blank" className="text-sm font-medium text-stone-500 hover:text-stone-700">
                                @{stats.login}
                            </Link>
                        </div>
                    </div>
                    <Link
                        href={SITE_NAP.profiles.github}
                        target="_blank"
                        className="hidden rounded-full border border-[var(--beige-300)]/50 bg-transparent px-5 py-2 text-sm font-medium text-stone-700 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[var(--beige-100)] sm:block"
                    >
                        View Profile
                    </Link>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    {[
                        { label: "Repositories", value: stats.public_repos },
                        { label: "Followers", value: stats.followers },
                        { label: "Following", value: stats.following },
                        { label: "Gists", value: stats.public_gists },
                    ].map((stat, i) => (
                        <div key={i} className="rounded-2xl border border-[var(--beige-200)] bg-[var(--beige-50)] p-4 transition-colors hover:bg-[var(--beige-100)]">
                            <p className="text-sm font-medium text-stone-500">{stat.label}</p>
                            <p className="mt-1 text-2xl font-bold tracking-tight text-stone-800">{stat.value}</p>
                        </div>
                    ))}
                </div>

                {/* Top Repositories */}
                {topRepos.length > 0 && (
                    <div className="mt-2">
                        <p className="mb-4 text-base font-semibold text-stone-800">Top Repositories</p>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            {topRepos.map((repo, i) => (
                                <Link
                                    key={i}
                                    href={repo.html_url}
                                    target="_blank"
                                    className="flex flex-col gap-2 rounded-xl border border-[var(--beige-200)] p-4 transition-all hover:border-[var(--beige-400)]/60 hover:shadow-sm bg-[var(--beige-50)]"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="font-semibold text-stone-800 truncate">{repo.name}</span>
                                        <div className="flex items-center gap-1 text-xs text-stone-500">
                                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" className="fill-current text-yellow-500">
                                                <path d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25z"></path>
                                            </svg>
                                            {repo.stargazers_count}
                                        </div>
                                    </div>
                                    <p className="line-clamp-2 text-xs text-stone-500">{repo.description}</p>
                                    <div className="mt-auto flex items-center gap-2">
                                        {repo.language && (
                                            <div className="flex items-center gap-1">
                                                <span className="h-2 w-2 rounded-full bg-[var(--beige-400)]"></span>
                                                <span className="text-xs text-stone-500">{repo.language}</span>
                                            </div>
                                        )}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}


                {/* Calendar */}
                <div className="mt-2 text-sm">
                    <p className="mb-4 text-base font-semibold text-stone-800">Contributions</p>
                    <div className="overflow-x-auto pb-2 scrollbar-hide">
                        <div className="min-w-[600px]">
                            <GitHubCalendar
                                username={username}
                                colorScheme="light"
                                fontSize={12}
                                blockSize={12}
                                blockMargin={4}
                                style={{ color: "#5c4633" }}
                                theme={{
                                    light: ["#f5ebe0", "#e8d5c0", "#d4b896", "#b08968", "#7c5e43"],
                                    dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Profile README */}
                {readmeContent && (
                    <div className="mt-6 border-t border-black/15 pt-6">
                        <p className="mb-4 text-base font-semibold text-stone-800">Profile README</p>
                        <div className="prose prose-sm prose-stone max-w-none overflow-hidden rounded-xl bg-[var(--beige-50)] p-6">
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={{
                                    h1: ({ node, ...props }) => <h1 className="text-xl font-bold mb-2 text-stone-800" {...props} />,
                                    h2: ({ node, ...props }) => <h2 className="text-lg font-semibold mb-2 mt-4 text-stone-800" {...props} />,
                                    h3: ({ node, ...props }) => <h3 className="text-base font-semibold mb-1 mt-3 text-stone-800" {...props} />,
                                    p: ({ node, ...props }) => <p className="mb-2 text-stone-600 leading-relaxed" {...props} />,
                                    a: ({ node, ...props }) => <a className="text-[var(--beige-600)] hover:underline" target="_blank" {...props} />,
                                    ul: ({ node, ...props }) => <ul className="list-disc pl-5 mb-2 text-stone-600" {...props} />,
                                    ol: ({ node, ...props }) => <ol className="list-decimal pl-5 mb-2 text-stone-600" {...props} />,
                                    img: ({ node, ...props }) => <img className="max-w-full h-auto rounded-lg my-2" {...props} />,
                                    code: ({ node, ...props }) => <code className="bg-[var(--beige-100)] rounded px-1 py-0.5 text-sm font-mono text-stone-700" {...props} />,
                                    pre: ({ node, ...props }) => <pre className="bg-[var(--beige-100)] rounded p-3 overflow-x-auto my-2 text-sm" {...props} />,
                                }}
                            >
                                {readmeContent}
                            </ReactMarkdown>
                        </div>
                    </div>
                )}
            </div>
        </MotionDiv>
    )
}
