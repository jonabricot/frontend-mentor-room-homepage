import { styled } from '/stiches.config'
import { HeaderLink } from '@/layout/header/HeaderLink'

export const HeaderBrand = styled(HeaderLink, {
  fontSize: '20px',
  color: '$white',
  marginRight: 0,
  '@medium': {
    marginRight: '3em'
  }
})