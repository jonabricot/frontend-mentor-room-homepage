import React from 'react'

import { Button } from '@/components/Button'
import { Ratio } from '@/components/media/Ratio'
import { Media } from '@/components/media/Media'

export function CarouselControl({direction = 'left', ...props}) {
  return <Button {...props} css={{ ...props.css, padding: 0 }} color="black">
    <Ratio ratio={1} align="center">
      <Media name={`icon-angle-${direction}.svg`}/>
    </Ratio>
  </Button>
}