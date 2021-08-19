import { styled } from '/stiches.config'
import React from 'react'

export const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(20, 1fr)',
})

export const StyledColumn = styled('div', {
  gridColumn: '1 / 21'
})

export function Column({column = {}, row = '', ...props}) {
  props.css = {
    ...props.css,
    gridColumn: column['@initial'] ?? '',
    '@medium': {
      ...props.css?.['@medium'],
      gridColumn: column['@medium'],
      gridRow: row
    }
  }
  return <StyledColumn {...props}/>
}