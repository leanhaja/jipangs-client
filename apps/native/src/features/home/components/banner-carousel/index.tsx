import { Pressable, StyleProp, ViewStyle } from 'react-native'

import Banner, { BannerProps } from '../../../../components/banner'
import Carousel from '../../../../components/carousel'

export interface LinkBannerProps extends BannerProps {
  link: string
}

export interface BannerCarouselProps {
  bannerWidth: number
  containerStyle?: StyleProp<ViewStyle>
  isProgressBarVisible?: boolean
  items: LinkBannerProps[]
  onBannerClick?: (link: string, title: string) => void
}

function BannerCarousel({
  bannerWidth,
  containerStyle,
  isProgressBarVisible = false,
  items: banners,
  onBannerClick,
}: BannerCarouselProps) {
  return (
    <Carousel
      renderItem={({ item: { link, subTitle, title } }) => (
        <Pressable
          onPress={() => {
            onBannerClick?.(link, title)
          }}
        >
          <Banner
            containerStyle={{ width: bannerWidth }}
            subTitle={subTitle}
            title={title}
          />
        </Pressable>
      )}
      contentContainerStyle={containerStyle}
      isProgressBarVisible={isProgressBarVisible}
      slideWidth={bannerWidth}
      slides={banners}
    />
  )
}

export default BannerCarousel
