'use client'
import Image from "next/image"
import BaseContainer from "@/common-components/base-container/base-container"
import { StackVertical } from "@/common-components/layout-stack/layout-stack"
import TextHeading from "@/common-components/text-heading/text-heading"
import Text from "@/common-components/text/text"
import { SectionFooter } from "@/common-components/footer/SectionFooter"
import Link from "next/link"
import { DynamicBreadcrumb } from "@/common-components/breadcrumb/breadcrumb"
import { ThemeToggle } from "@/styles/components/ui/theme-toggle"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a14]">
      <BaseContainer size="md" paddingX="md" paddingY="lg" className="flex-1">
        <StackVertical gap="md">
          {/* Breadcrumb and Theme Toggle */}
          <div className="flex items-center justify-between">
            <DynamicBreadcrumb
              items={[
                { href: '/', label: 'Home', emoji: '👾' },
                { label: '404 Not Found' }
              ]}
            />
            <ThemeToggle />
          </div>
          
          {/* Center content in page */}
          <div className="flex flex-col items-center justify-center py-20">
            {/* 404 Card with white background */}
            <Image
              src="/custom404.avif"
              alt="404 Error Illustration"
              fill
              priority
              style={{ objectFit: "contain" }}
              ></Image>
            <div className="bg-white dark:bg-white rounded-lg shadow-lg p-8 max-w-md w-full mb-8">
              <TextHeading as="h1" weight="bold" className="text-center text-[#1a1a47] text-3xl mb-2">
                Oops!
              </TextHeading>
              <div className="text-center text-sm text-gray-600 mb-4">
                404 - PAGE NOT FOUND
              </div>
              <Text className="text-center text-sm text-gray-500 mb-6">
                The page you are looking for might have been removed or is temporarily unavailable.
              </Text>
              <div className="flex justify-center">
                <Link href="/" className="py-2 px-4 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition-colors">
                  GO TO HOMEPAGE
                </Link>
              </div>
            </div>

            {/* Bottom text */}
            <TextHeading as="h2" weight="bold" className="text-white text-center mb-4">
              Page Not Found
            </TextHeading>
            <Text className="text-white text-center mb-8 max-w-md mx-auto">
              Oops! The page you're looking for doesn't exist or has been moved.
              Let's get you back on track.
            </Text>
            
            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
                Back to Home
              </Link>
              <Link href="/blog" className="py-2 px-4 border border-gray-300 text-white rounded-md hover:bg-gray-800 transition-colors">
                Visit Blog
              </Link>
            </div>
          </div>
        </StackVertical>
      </BaseContainer>
      <SectionFooter color="purple" />
    </div>
  )
}