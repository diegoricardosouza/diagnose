import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { GroupDeviceProps } from '.'
import * as ItemDeviceStyles from 'components/ItemDevice/styles'

export const Wrapper = styled.article<GroupDeviceProps>`
  ${({ src }) => css`
    background: url(${src}) fixed no-repeat;
    background-size: cover;
    min-height: 49.4rem;
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    clip-path: polygon(100% 0, 100% 90%, 0 100%, 0 10%);
    flex-wrap: wrap;

    ${media.greaterThan('medium')`
      clip-path: polygon(100% 0, 100% 70%, 0 100%, 0 30%);
    `}
  `}
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(51, 51, 51, 0.7);
  z-index: 0;
`

export const ContainerWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
`

export const DeviceWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 3.5rem;
  flex-wrap: wrap;

  ${ItemDeviceStyles.Wrapper} {
    margin: 1.5rem 0;
    flex: 0 0 50%;
  }

  ${media.greaterThan('medium')`
    margin-top: 5rem;

    ${ItemDeviceStyles.Wrapper} {
      flex: inherit;
    }
  `}
`
