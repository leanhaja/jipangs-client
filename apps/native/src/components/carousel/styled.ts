import styled from '@emotion/native'

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  position: relative;
`

export const IndicatorWrapper = styled.View`
  align-items: center;
  flex-direction: row;
  margin-top: 16px;
`

export const Indicator = styled.View<{ focused: boolean }>`
  background-color: ${({ focused }) => (focused ? '#262626' : '#dfdfdf')};
  border-radius: 3px;
  height: 6px;
  margin: 0px 4px;
  width: 6px;
`

export const ProgressBarWrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.WHITE};
  bottom: 16px;
  overflow: hidden;
  padding: 4px 12px;
  position: absolute;
  right: 16px;
`

export const ProgressBarText = styled.Text`
  ${({ theme }) => theme.typographies.chip};
  overflow: hidden;
`
