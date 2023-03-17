import { useState } from 'react'
import {
  FlatList,
  ListRenderItem,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleProp,
  ViewStyle,
} from 'react-native'

import * as Styled from './styled'

interface CarouselProps<T> {
  contentContainerStyle?: StyleProp<ViewStyle>
  gap?: number
  isIndicatorVisible?: boolean
  isProgressBarVisible?: boolean
  renderItem: ListRenderItem<T>
  slideWidth: number
  slides: T[]
}

function Carousel<T>({
  contentContainerStyle,
  gap = 0,
  isIndicatorVisible = false,
  isProgressBarVisible = false,
  renderItem,
  slideWidth,
  slides,
}: CarouselProps<T>) {
  const [slideIndex, setSlideIndex] = useState(0)

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const newSlideIndex = Math.round(
      e.nativeEvent.contentOffset.x / (slideWidth + gap)
    )
    setSlideIndex(newSlideIndex)
  }

  const progressBarText = `${slideIndex + 1}/${slides.length}`

  return (
    <Styled.Container>
      <FlatList
        automaticallyAdjustContentInsets={false}
        contentContainerStyle={contentContainerStyle}
        data={slides}
        decelerationRate="fast"
        horizontal
        onScroll={onScroll}
        pagingEnabled
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        snapToAlignment="start"
        snapToInterval={slideWidth + gap}
      />
      {isIndicatorVisible && (
        <Styled.IndicatorWrapper>
          {Array.from({ length: slides.length }, (_, i) => i).map((i) => (
            <Styled.Indicator
              key={`indicator-${i}`}
              focused={i === slideIndex}
            />
          ))}
        </Styled.IndicatorWrapper>
      )}
      {isProgressBarVisible && (
        <Styled.ProgressBarWrapper style={{ borderRadius: 12 }}>
          <Styled.ProgressBarText>{progressBarText}</Styled.ProgressBarText>
        </Styled.ProgressBarWrapper>
      )}
    </Styled.Container>
  )
}

export default Carousel
