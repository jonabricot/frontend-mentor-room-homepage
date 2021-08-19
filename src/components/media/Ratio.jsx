import React from 'react'
import { styled } from '/stiches.config'

export const StyledRatio = styled('div', {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  variants: {
    align: {
      center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
    }
  }
})

export const StyledRatioContainer = styled('div', {
  position: 'relative',
  variants: {
    fluid: {
      true: {
        width: '100%',
        height: '100%',
        paddingBottom: '0 !important'
      },
    }
  }
})

export function Ratio({ratio, children, container, ...props}) {
  return <StyledRatioContainer style={{ paddingBottom: `calc(100% * ${ratio})` }} {...container}>
    <StyledRatio {...props}>{children}</StyledRatio>
  </StyledRatioContainer>
}