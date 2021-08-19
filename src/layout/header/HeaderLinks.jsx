import { styled } from '/stiches.config'

export const HeaderLinks = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  flexWrap: 'wrap',
  variants: {
    visible: {
      true: {}
    },
    toggleable: {
      true: {
        position: 'absolute',
        background: '$white',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        transform: 'translateY(-100%)',
        transition: '$all',
        paddingLeft: '4rem',
      },
      false: {
        position: 'relative',
        background: 'transparent',
        transform: 'none',
        paddingLeft: '0'
      }
    },
  },
  compoundVariants: [
    {
      toggleable: true,
      visible: true,
      css: {
        transform: 'translateY(0)',
        zIndex: 2
      },
    },
  ],
  defaultVariants: {
    toggleable: true,
    visible: false
  }
})