import { styled } from '/stiches.config'

export const HeaderBackground = styled('div', {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  zIndex: 1,
  opacity: 0,
  pointerEvents: 'none',
  transition: '$all',
  variants: {
    show: {
      true: {
        opacity: 1
      }
    }
  }
})