import React from 'react'
import { styled } from '/stiches.config'

const StyledSection = styled('section')

export function Section({tag = 'section', role = 'section', children, ...props}) {
  return <StyledSection as={tag} role={role} {...props}>{children}</StyledSection>
}

export function HeaderSection({children, ...props}) {
  return <Section tag="header" role="banner" {...props}>{children}</Section>
}

export function NavigationSection({children, ...props}) {
  return <Section tag="nav" role="navigation" {...props}>{children}</Section>
}

export function MainSection({children, ...props}) {
  return <Section tag="main" role="main" {...props}>{children}</Section>
}

export function FooterSection({children, ...props}) {
  return <Section tag="footer" role="contentinfo" {...props}>{children}</Section>
}