import React from 'react'

import { Media } from '@/components/media/Media'
import { styled } from '/stiches.config'

const StyledHeaderToggle = styled('button', {
  position: 'absolute',
  zIndex: 3,
  background: 'transparent',
  border: 0,
  width: '3em',
  height: '3em',
  '@medium': {
    display: 'none'
  }
})

export function HeaderToggle({ toggled, ...props }) {
  return <StyledHeaderToggle {...props}>
    <Media name={toggled ? "icon-close.svg" : "icon-hamburger.svg"}/>
  </StyledHeaderToggle>
}