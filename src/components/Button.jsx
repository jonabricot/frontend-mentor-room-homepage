import React from 'react'
import { styled } from '/stiches.config'

export const StyledButton = styled('button', {
  border: 'none',
  cursor: 'pointer',
  transition: '$all',
  variants: {
    color: {
      black: {
        backgroundColor: '$primary',
        '&:hover': {
          backgroundColor: '$darkGray'
        }
      },
    },
  },
  defaultVariants: {
    color: 'black'
  }
})

export function Button({label, children, ...props}) {
  return <StyledButton {...props}>
    {children}
  </StyledButton>
}

export function ButtonIcon({action, icon, children, ...props}) {
  return <Button aria-label={action} {...props}>
    {children}
  </Button>
}