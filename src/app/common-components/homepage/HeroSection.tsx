'use client'

import { motion } from 'framer-motion'
import { monoFont } from '@/styles/fonts/fonts'
import { cn } from '@/styles/lib/utils'
import TextHeading from '@/common-components/text-heading/text-heading'
import Text from '@/common-components/text/text'
import { StackVertical } from '@/common-components/layout-stack/layout-stack'
import Link from 'next/link'
import Image from 'next/image'
import Ruler from '../ruler/ruler'

export function HeroSection() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative pb-8"
        >
            {/* Content */}
            <div className="relative">
                <StackVertical gap="xs">
                    {/* Emoji with floating animation */}
                    <motion.div
                        animate={{ 
                            y: [0, -10, 0],
                        }}
                        transition={{ 
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className={cn("text-2xl sm:text-3xl md:text-4xl", monoFont.className)}
                    >
                        👾
                    </motion.div>

                    {/* Name and title with staggered fade-in */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="relative"
                    >
                        <TextHeading as="h1" className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                            Sidhartha.dev
                        </TextHeading>
                    </motion.div>

                    {/* Introduction with staggered fade-in */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Text >
                            Hi! I am Sidhartha.
                        </Text>

                        <Ruler color='colorless' marginTop='sm' marginBottom='none'/>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <Text>
                                I'm a CS undergrad with a flair for algorithms, a love for competitive code, exploring the depths of machine learning and the vast web. Fueled by coffee, glad to have you here—wander and discover :)
                            </Text>
                            <Ruler color='colorless' marginTop='sm' marginBottom='none'/>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                                <Text>
                                    This is my graph of thoughts, notes, and ideas.
                                </Text>

                                <Ruler color='colorless' marginTop='sm' marginBottom='none'/>

                                <Text>
                                    I ramble about things on my{' '}
                                    <Link href="/blog" className="text-purple-500 font-bold hover:underline">
                                        blog
                                    </Link>
                                    ; you can check it out if you're interested.
                                </Text>

                                <Ruler color='colorless' marginTop='sm' marginBottom='none'/>

                                <Text>
                                    I also document my learnings through learning reflections every week. You can take a look at those{' '}
                                    <Link href="/learning" className="text-purple-500 font-bold hover:underline">
                                        here
                                    </Link>
                                    .
                                </Text>
                                
                        </motion.div>
                    </motion.div>
                </StackVertical>
            </div>

            {/* Image section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-8 -mb-8"
            >
                <div className="relative w-full aspect-[4/3] sm:aspect-[2/1] md:aspect-[21/9] rounded-lg overflow-hidden">
                    <Image
                        className="object-cover"
                        fill
                        src="/stars.jpg" 
                        alt="Look at the Stars"
                        priority
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
                    />
                </div>
            </motion.div>
        </motion.div>
    )
} 