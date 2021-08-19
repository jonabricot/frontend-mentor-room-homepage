import React from 'react'

import { ButtonIcon } from '@/components/Button'
import { Ratio } from '@/components/media/Ratio'
import { Media } from '@/components/media/Media'

export function CarouselControl({direction = 'left', ...props}) {
  return <ButtonIcon {...props} css={{ ...props.css, padding: 0 }} color="black" action={`Carousel ${direction} control`}>
    <Ratio ratio={1} align="center">
      <Media name={`icon-angle-${direction}.svg`}/>
    </Ratio>
  </ButtonIcon>
}