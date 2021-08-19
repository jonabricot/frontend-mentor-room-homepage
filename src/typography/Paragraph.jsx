import { styled } from '/stiches.config'

export const Paragraph = styled('p', {
  lineHeight: 1.5,
  variants: {
    muted: {
      true: {
        color: '$gray',
      },
    }
  },
})