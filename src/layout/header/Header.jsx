import React, { useState } from 'react'

import { styled } from '/stiches.config'
import { Box } from '@/layout/Box'
import { HeaderBackground } from '@/layout/header/HeaderBackground'
import { HeaderLink } from '@/layout/header/HeaderLink'
import { HeaderLinks } from '@/layout/header/HeaderLinks'
import { HeaderBrand } from '@/layout/header/HeaderBrand'
import { HeaderToggle } from '@/layout/header/HeaderToggle'
import { HeaderSection, NavigationSection } from '@/layout/Section'

const StyledHeader = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  padding: '0 1rem',
  height: '130px',
  display: 'flex',
  alignItems: 'center',
  zIndex: 2,
  '@medium': {
    right: 'auto',
    padding: '0 4rem',
  }
})

export function Header() {
  const [visibleHeader, setVisibleHeader] = useState(false)
  
  return <>
    <StyledHeader>
      <HeaderToggle onClick={() => setVisibleHeader(!visibleHeader)} toggled={visibleHeader}/>
      <Box css={{ flex: 1, textAlign: 'center', '@medium': { flex: 'auto' } }}>
        <HeaderSection>
          <HeaderBrand href="/">room</HeaderBrand>
        </HeaderSection>
      </Box>
      <NavigationSection>
        <HeaderLinks visible={visibleHeader} toggleable={{ '@medium': false }}>
          <HeaderLink href="/">home</HeaderLink>
          <HeaderLink href="/">shop</HeaderLink>
          <HeaderLink href="/">about</HeaderLink>
          <HeaderLink href="/">contact</HeaderLink>
        </HeaderLinks>
      </NavigationSection>
      
    </StyledHeader>
    <HeaderBackground show={visibleHeader}/>
  </>
}