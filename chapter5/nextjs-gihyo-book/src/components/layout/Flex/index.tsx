/* eslint-disable prettier/prettier */
import styled from 'styled-components'
import Box, { BoxProps } from 'components/layout/Box'
import type {
  Responsive,
  CSSPropertyAlignContent,
  CSSPropertyAlignItems,
  CSSPropertyAlignSelf,
  CSSPropertyFlexDirection,
  CSSPropertyFlexWrap,
  CSSPropertyJustifyContent,
  CSSPropertyJustifyItems,
  CSSPropertyJustifySelf,
} from 'types/styles'
import { toPropValue } from 'utils/styles'

type FlexProps = BoxProps & {
  alignContent?: Responsive<CSSPropertyAlignContent>
  alignItems?: Responsive<CSSPropertyAlignItems>
  alignSelf?: Responsive<CSSPropertyAlignSelf>
  flexBasis?: Responsive<string>
  flexDirection?: Responsive<CSSPropertyFlexDirection>
  flexGrow?: Responsive<string>
  flexShrink?: Responsive<string>
  flexWrap?: Responsive<CSSPropertyFlexWrap>
  justifyContent?: Responsive<CSSPropertyJustifyContent>
  justifyItems?: Responsive<CSSPropertyJustifyItems>
  justifySelf?: Responsive<CSSPropertyJustifySelf>
  order?: Responsive<string>
}

const Flex = styled(Box)<FlexProps>`
  ${(props) => toPropValue('align-content', props.alignContent, props.theme)}
  ${(props) => toPropValue('align-items', props.alignItems, props.theme)}
  ${(props) => toPropValue('align-self', props.alignSelf, props.theme)}
  ${(props) => toPropValue('flex-basis', props.flexBasis, props.theme)}
  ${(props) => toPropValue('flex-direction', props.flexDirection, props.theme)}
  ${(props) => toPropValue('flex-grow', props.flexGrow, props.theme)}
  ${(props) => toPropValue('flex-shrink', props.flexShrink, props.theme)}
  ${(props) => toPropValue('flex-wrap', props.flexWrap, props.theme)}
  ${(props) => toPropValue('justify-content', props.justifyContent, props.theme)}
  ${(props) => toPropValue('justify-items', props.justifyItems, props.theme)}
  ${(props) => toPropValue('justify-self', props.justifySelf, props.theme)}
  ${(props) => toPropValue('order', props.order, props.theme)}
`

Flex.defaultProps = {
  display: 'flex',
}

export default Flex
