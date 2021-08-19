import React from 'react'
import { getMediaPath, Media } from '@/components/media/Media'
import { styled, config } from '/stiches.config'

const StyledPicture = styled('picture')

export function ResponsiveMedia({name, ...props}) {
  return <StyledPicture>
    <source srcSet={getMediaPath(`desktop-${name}`)} media={config.media.medium}/>
    <Media name={`mobile-${name}`} {...props}/>
  </StyledPicture>
}