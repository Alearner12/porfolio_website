'use client'

import { cn } from '@/styles/lib/utils'
import TextHeading from '@/common-components/text-heading/text-heading'
import Text from '@/common-components/text/text'
import Link from 'next/link'

export function HomepageSocials() {
    return (
        <div>
            <TextHeading as="h2" weight="bold">Socials</TextHeading>
            <Text className="text-muted-foreground leading-relaxed">
  I’m always open to connect! ✉️ <br />
  Drop me an email at{' '}
  <Link
    href="mailto:sid1.618033@gmail.com"
    className="text-purple-500 hover:underline font-semibold"
  >
    sid1.618033@gmail.com
  </Link>{' '}
  or say hi on{' '}
  <Link
    href="https://x.com/SID1618033?t=jMyifMlBDH28NcsniIvAPA&s=09"
    className="text-purple-500 hover:underline font-semibold"
  >
    Twitter
  </Link>
  . <br />
  Happy to chat about tech, projects, or anything interesting! 🚀
</Text>


        </div>

    )
} 