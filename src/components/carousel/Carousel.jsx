import React, { useRef, useState } from 'react'
import ReactCarousel from 'react-elastic-carousel'

import { styled } from '/stiches.config'
import { Ratio } from '@/components/media/Ratio'
import { Column, Grid } from '@/layout/Grid'
import { CarouselControl } from '@/components/carousel/CarouselControl'

const StyledCarousel = styled('div', {
  position: 'relative',
  '& .rec': {
    margin: 0
  },
  // Fixing some artefacts when swiping on images using this lib.
  '& img': {
    pointerEvents: 'none'
  },
  '@medium': {
    '& .rec': {
      height: '100% !important',
    }
  }
})

export function Carousel({children, ...props}) {
  const [value, setValue] = useState(0)
  const carousel = useRef(null)
  
  function next() {
    carousel.current.slideNext()
  }
  
  function previous() {
    carousel.current.slidePrev()
  }
  
  return <StyledCarousel {...props}>
    <ReactCarousel ref={carousel} value={value} onChange={setValue} plugins={['infinite']} itemsToShow={1} showArrows={false} pagination={false}>
      {children}
    </ReactCarousel>
    <Ratio ratio={1} container={{ css: { position: 'absolute', top: 0, left: 0, right: 0, pointerEvents: 'none' }, fluid: { '@medium': true } }}>
      <Grid css={{position: 'absolute', bottom: 0, left: 0, right: 0}}>
        <Column column={{ '@initial': "16 / 21", '@medium': "13 / 15" }} css={{ display: 'flex', pointerEvents: 'all' }}>
          <CarouselControl direction='left' css={{ flex: '1' }} onClick={previous}/>
          <CarouselControl direction='right' css={{ flex: '1' }} onClick={next}/>
        </Column>
      </Grid>
    </Ratio>
  </StyledCarousel>
}