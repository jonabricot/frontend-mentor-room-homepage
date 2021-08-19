import React from 'react'

import { Box } from '@/layout/Box'
import { Title } from '@/typography/Title'
import { Paragraph } from '@/typography/Paragraph'
import { Link } from '@/typography/Link'

export function CarouselContent({ title, content, link, ...attrs }) {
  return <Box {...attrs}>
    <Title>{title}</Title>
    <Paragraph muted css={{ marginBottom: '3em' }}>{content}</Paragraph>
    <Link href={link.href}>{link.text}</Link>
  </Box>
}