import styled from '@emotion/styled'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  background-color: ${(props) => props.theme.colors.WHITE};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  bottom: 0px;
  gap: 8px;
  overflow: hidden;
  padding: 24px 24px 60px 24px;
  position: absolute;
  text-align: start;
  width: 100%;
  z-index: ${(props) => props.theme.levels.BASE};
`

export const SelectItem = styled.button`
  height: 48px;
  text-align: start;
  width: 100%;
  ${(props) => props.theme.p1}

  :not(:last-child) {
    margin-bottom: 8px;
  }
`
export const Title = styled.h1`
  color: #9e9e9e;
  ${(props) => props.theme.p1}
  margin-bottom:18px;
`
export const BackDrop = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colors.BLACK}0C;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  margin-bottom: 91px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: ${(props) => props.theme.levels.BACKGROUND};
`
