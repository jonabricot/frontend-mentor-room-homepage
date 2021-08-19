import { styled } from '/stiches.config'

export const HeaderLink = styled('a', {
  position: 'relative',
  marginRight: '2em',
  marginTop: '.5em',
  marginBottom: '.5em',
  color: '$primary',
  textDecoration: 'none',
  '&:after': {
    content: '',
    position: 'absolute',
    top: '100%',
    width: '50%',
    marginTop: '.5em',
    height: '2px',
    backgroundColor: 'transparent',
    left: '50%',
    transform: 'translateX(-50%)',
    transition: '$all'
  },
  '&:hover': {
    '&:after': {
      backgroundColor: '$white'
    }
  },
  '@medium': {
    color: '$white',
    marginRight: '3em',
  }
})