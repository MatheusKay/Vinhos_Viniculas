import styled from 'styled-components'

import { media } from '../../../styles/estiloGlobal'

export const HeaderSkeleton = styled.header`
  padding: 24px;

  .header_skeleton_container {
    display: flex;
    column-gap: 96px;

    @media (max-width: ${media.mobile}) {
      display: none;
    }

    @media (max-width: ${media.tablet}) {
      column-gap: 2em;
    }
  }

  @media (max-width: ${media.mobile}) {
    padding: 16px;
  }
`

export const HeaderSkeletonDesktop = styled.div`
  .header_skeleton_logo {
    width: 214px;
    height: 96px;

    @media (min-width: ${media.tablet}) and (max-width: ${media.desktop}) {
      width: 11em;
    }

    @media (max-width: ${media.tablet}) {
      width: 10em;
    }
  }

  .header_skeleton_infos {
    width: 100%;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    row-gap: 36px;

    .header_skeleton_links {
      width: 100%;
      height: 19px;
    }

    .header_skeleton_infos_carrinho {
      display: flex;
      justify-content: space-between;

      .header_skeleton_input {
        width: 37em;
        height: 42px;

        @media (max-width: ${media.tablet}) {
          width: 19em;
        }
      }

      .header_skeleton_button {
        width: 188px;
        height: 42px;

        @media (max-width: ${media.tablet}) {
          width: 4em;
        }
      }
    }
  }
`

export const HeaderSkeletonMobile = styled.div`
  width: 100%;

  .header_skeleton_mobile {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header_skeleton_menu {
    width: 36px;
    height: 39px;
    border-radius: 8px;
  }

  .header_skeleton_carrinho {
    width: 44px;
    height: 42px;
    border-radius: 8px;
  }

  .header_skeleton_logo {
    width: 8em;
    height: 3.5em;
  }

  @media (min-width: ${media.tablet}) {
    display: none;
  }
`
