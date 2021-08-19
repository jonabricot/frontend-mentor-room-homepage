import React from 'react'
import { styled } from '/stiches.config'

const StyledImage = styled('img', {
  maxWidth: '100%',
  variants: {
    fluid: {
      true: {
        display: 'block',
        width: '100%',
        height: '100%',
        maxHeight: '100%',
        objectFit: 'cover',
        objectPosition: 'center'
      }
    }
  }
})

export function getMediaPath(name) {
  return `/images/${name}`
}

export function Media({name, ...props}) {
  return <StyledImage src={getMediaPath(name)} alt={name} {...props} />
}