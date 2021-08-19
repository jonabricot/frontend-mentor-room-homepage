import React from 'react'

import { Column, Grid } from '@/layout/Grid'
import { Ratio } from '@/components/media/Ratio'
import { CarouselContent } from '@/components/carousel/CarouselContent'

export function CarouselSlide({media, title, content, link}) {
  return <Grid css={{ height: '100%' }}>
    <Column column={{ '@medium': "span 12" }}>
      <Ratio ratio={1} container={{ fluid: { '@medium': true } }}>
        {media}
      </Ratio>
    </Column>
    <Column column={{ '@medium': "span 8" }} css={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem 1.5rem', '@medium': { padding: '80px' } }}>
      <CarouselContent title={title} content={content} link={link}/>
    </Column>
  </Grid>
}