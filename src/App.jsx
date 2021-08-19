import React from 'react'

import { Box } from '@/layout/Box'
import { Carousel, CarouselSlide } from '@/components/carousel'
import { ResponsiveMedia } from '@/components/media/ResponsiveMedia'
import { Column, Grid } from '@/layout/Grid'
import { Title } from '@/typography/Title'
import { Paragraph } from '@/typography/Paragraph'
import { Media } from '@/components/media/Media'
import { Header } from '@/layout/header'
import { MainSection } from '@/layout/Section'

function App() {
  return <div>
    <Header/>
    <MainSection>
      <Grid css={{ gridTemplateColumns: '1fr', gridTemplateAreas: `"header" "header" "footer"`, '@medium': { height: '100vh', gridTemplateRows: '1fr 1fr 1fr' } }}>
        <Carousel css={{ gridArea: 'header', maxWidth: '100vw' }}>
          <CarouselSlide
            media={<ResponsiveMedia name="image-hero-1.jpg" fluid/>}
            title="Discover innovative ways to decorate"
            content="We provide unmatched quality, comfort, and style for property owners across the country.
Our experts combine form and function in bringing your vision to life. Create a room in your
own style with our collection and make your property a reflection of you and what you love."
            link={{ href: "http://google.fr", text: "Shop now" }}
          />
          <CarouselSlide
            media={<ResponsiveMedia name="image-hero-2.jpg" fluid/>}
            title="We are available all across the globe"
            content="With stores all over the world, it's easy for you to find furniture for your home or place of business.
  Locally, we’re in most major cities throughout the country. Find the branch nearest you using our
  store locator. Any questions? Don't hesitate to contact us today."
            link={{ href: "http://google.fr", text: "Shop now" }}
          />
          <CarouselSlide
            media={<ResponsiveMedia name="image-hero-3.jpg" fluid/>}
            title="Manufactured with the best materials"
            content="Our modern furniture store provide a high level of quality. Our company has invested in advanced technology
  to ensure that every product is made as perfect and as consistent as possible. With three decades of
  experience in this industry, we understand what customers want for their home and office."
            link={{ href: "http://google.fr", text: "Shop now" }}
          />
        </Carousel>
        <Grid css={{ gridArea: 'footer' }}>
          <Column column={{ '@medium': "span 6" }}><Media name="image-about-dark.jpg" fluid={{ '@medium': true }}/></Column>
          <Column column={{ '@medium': "span 8" }} css={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box css={{ padding: '2rem' }}>
              <Title type={2} tag="h2">About our furniture</Title>
              <Paragraph muted>Our multifunctional collection blends design and function to suit your individual taste.
                Make each room unique, or pick a cohesive theme that best express your interests and what
                inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                or anything in between. Product specialists are available to help you create your dream space.</Paragraph>
            </Box>
          </Column>
          <Column column={{ '@medium': "span 6" }}><Media name="image-about-light.jpg" fluid={{ '@medium': true }}/></Column>
        </Grid>
      </Grid>
    </MainSection>
  </div>
}

export default App
