'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/styles/lib/utils'
import { monoFont } from '@/styles/fonts/fonts'
import { Github, Twitter, Mail } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface BaseFooterProps {
    color?: string;
    navigationLinks?: React.ReactNode;
    className?: string;
    showToTop?: boolean;
    showSectionName?: boolean;
    showSocialLinks?: boolean;
    showCopyright?: boolean;
}

export function BaseFooter({ 
    color = 'purple', 
    navigationLinks, 
    className,
    showToTop = true,
    showSectionName = true,
    showSocialLinks = true,
    showCopyright = true
}: BaseFooterProps) {
    const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear())

    useEffect(() => {
        setCurrentYear(new Date().getFullYear()) // Update the year only on the client side
    }, [])

    const socialLinks = [
        { href: "mailto:sid1.618033@gmail.com", icon: <Mail className="w-3 h-3 sm:w-4 sm:h-4" /> },
        { href: "https://github.com/Alearner12", icon: <Github className="w-3 h-3 sm:w-4 sm:h-4" /> },
        { href: "https://x.com/SID1618033?t=jMyifMlBDH28NcsniIvAPA&s=09", icon: <Twitter className="w-3 h-3 sm:w-4 sm:h-4" /> }
    ]
    
    return (
        <footer className={cn("mt-auto pt-12", className)}>
            {/* Super subtle gradient line */}
            <div className="relative w-full mb-8">
                <div className="absolute inset-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-400/20 to-transparent" />
            </div>

            <div className={cn(
                monoFont.className,
                "w-full max-w-screen-md mx-auto px-4",
                "flex flex-col items-center gap-4 sm:gap-6",
                "text-sm text-muted-foreground/60"
            )}>
                {/* Navigation Links - First Row */}
                {navigationLinks && (showToTop || showSectionName) && (
                    <div className="flex flex-wrap items-center justify-center gap-x-3">
                        {navigationLinks}
                    </div>
                )}

                {/* Bottom section with copyright and social links */}
                <div className="w-full flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex flex-col items-center sm:items-start gap-1">
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                            © {currentYear} sidhartha.dev
                        </span>
                        <span className="text-xs text-gray-400 dark:text-gray-500">
                            Design inspired by{' '}
                            <a 
                                href="https://github.com/sumitdotml/website" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-purple-500 transition-colors"
                            >
                                Sumit's Portfolio
                            </a>
                        </span>
                    </div>
                    {showSocialLinks && (
                        <div className="flex items-center gap-6">
                            {socialLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ 
                                        duration: 0.2,
                                        delay: index * 0.1 
                                    }}
                                >
                                    <Link
                                        href={link.href}
                                        target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                                        className={cn(
                                            "block text-purple-400/80 hover:text-purple-400",
                                            "transition-all duration-200",
                                            "-m-2 p-2",
                                            "hover:bg-purple-400/10 rounded-md",
                                            "hover:shadow-md hover:shadow-purple-500/5"
                                        )}
                                    >
                                        {link.icon}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Bottom padding */}
            <div className="h-8" />
        </footer>
    )
}
