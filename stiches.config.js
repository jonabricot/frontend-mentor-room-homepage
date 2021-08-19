import { createCss } from '@stitches/react';

export const { styled, css, global, keyframes, getCssString, theme, config } = createCss({
  theme: {
    colors: {
      primary: 'hsl(0, 0%, 0%)',
      gray: 'hsl(0, 0%, 63%)',
      darkGray: 'hsl(0, 0%, 27%)',
      white: 'hsl(0, 0%, 100%)'
    },
    transitions: {
      all: 'all 0.3s ease',
    },
  },
  media: {
    small: '(min-width: 480px)',
    medium: '(min-width: 768px)',
    large: '(min-width: 1024px)',
  },
});