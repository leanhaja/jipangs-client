import { FontResource, useFonts } from 'expo-font'

import PretendardBlack from '../../assets/fonts/Pretendard-Black.ttf'
import PretendardBold from '../../assets/fonts/Pretendard-Bold.ttf'
import PretendardExtraBold from '../../assets/fonts/Pretendard-ExtraBold.ttf'
import PretendardExtraLight from '../../assets/fonts/Pretendard-ExtraLight.ttf'
import PretendardLight from '../../assets/fonts/Pretendard-Light.ttf'
import PretendardMedium from '../../assets/fonts/Pretendard-Medium.ttf'
import PretendardRegular from '../../assets/fonts/Pretendard-Regular.ttf'
import PretendardSemiBold from '../../assets/fonts/Pretendard-SemiBold.ttf'
import PretendardThin from '../../assets/fonts/Pretendard-Thin.ttf'

export default function useLoadFonts() {
  const [fontsLoaded, error] = useFonts({
    'Pretendard-Black': PretendardBlack as FontResource,
    'Pretendard-Bold': PretendardBold as FontResource,
    'Pretendard-ExtraBold': PretendardExtraBold as FontResource,
    'Pretendard-ExtraLight': PretendardExtraLight as FontResource,
    'Pretendard-Light': PretendardLight as FontResource,
    'Pretendard-Medium': PretendardMedium as FontResource,
    'Pretendard-Regular': PretendardRegular as FontResource,
    'Pretendard-SemiBold': PretendardSemiBold as FontResource,
    'Pretendard-Thin': PretendardThin as FontResource,
  })

  return [fontsLoaded, error]
}
