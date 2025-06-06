import { Box, Text } from 'theme-ui'
import YTCarouselCards from './yt-carousel-cards'
import { keyframes } from '@emotion/react'
import React, { useEffect, useState } from 'react'
import Ticker from 'react-ticker'
import PageVisibility from 'react-page-visibility'
import { Fade } from 'react-reveal'
/** @jsxImportSource theme-ui */

export default function YTCarousel({ cards }) {
  let [speed, setSpeed] = useState(5)

  const [pageIsVisible, setPageIsVisible] = useState(true)

  const handleVisibilityChange = isVisible => {
    setPageIsVisible(isVisible)
  }

  return (
    <PageVisibility onChange={handleVisibilityChange}>
      {pageIsVisible && (
        <Box sx={{ mt: 4 }}>
          <Text
            variant="eyebrow"
            as="h4"
            sx={{
              fontSize: ['22px', 2, 3],
              mt: [4, 4, 5],
              maxWidth: 'layout',
              width: '90vw',
              margin: 'auto'
            }}
          >
            Some of the cool things we've hosted previously
            </Text>
          <Ticker speed={speed} sx={{ overflowX: 'hidden' }}>
            {() => (
              <Box
                as="div"
                sx={{ display: 'flex', py: [4, 5, 5] }}
                onMouseOver={() => setSpeed(2)}
                onMouseOut={() => setSpeed(6)}
              >
                {cards.map((card, idx) => (
                  <YTCarouselCards key={idx} {...card} />
                ))}
              </Box>
            )}
          </Ticker>
        </Box>
      )}
    </PageVisibility>
  )
}
