import { styled } from '/stiches.config'

export const Button = styled('button', {
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