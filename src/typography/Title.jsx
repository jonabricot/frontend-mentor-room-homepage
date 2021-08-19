import React from 'react'
import { styled } from '/stiches.config'

export const StyledTitle = styled('div', {
  variants: {
    type: {
      1: {
        fontSize: '24px',
        fontWeight: '600',
        '@medium': {
          fontSize: '34px',
        }
      },
      2: {
        fontSize: '13px',
        fontWeight: '700',
        letterSpacing: '5px',
        textTransform: 'uppercase'
      },
    }
  },
  defaultVariants: {
    type: 1
  }
})

export function Title({tag = 'h1', children, ...props}) {
  return <StyledTitle as={tag} {...props}>{children}</StyledTitle>
}