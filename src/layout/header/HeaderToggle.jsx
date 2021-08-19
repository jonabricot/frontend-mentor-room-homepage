import React from 'react'

import { Media } from '@/components/media/Media'
import { ButtonIcon } from '@/components/Button'

export function HeaderToggle({ toggled, ...props }) {
  return <ButtonIcon css={{
    position: 'absolute',
    background: 'transparent',
    zIndex: 3,
    width: '3em',
    height: '3em',
    '@medium': {
      display: 'none'
    }
  }} action={toggled ? "Close mobile menu" : "Open mobile menu"} color={null} {...props}>
    <Media name={toggled ? "icon-close.svg" : "icon-hamburger.svg"}/>
  </ButtonIcon>
}