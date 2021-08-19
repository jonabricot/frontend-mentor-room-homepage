import React from 'react'
import { styled } from '/stiches.config'
import { Box } from '@/layout/Box'
import { Arrow } from '@/icon/Arrow'

export const StyledLink = styled('a', {
  display: 'inline-flex',
  alignItems: 'center',
  color: 'black',
  textTransform: 'uppercase',
  fontWeight: 300,
  letterSpacing: '10px',
  textDecoration: 'none',
  transition: '$all',
  '&:hover': {
    color: '$gray'
  }
})

export function Link({children, ...props}) {
  return <StyledLink {...props}>
    <Box as='span' css={{ marginRight: '3em' }}>{children}</Box>
    <Box as='span'>
      <Arrow/>
    </Box>
  </StyledLink>
}