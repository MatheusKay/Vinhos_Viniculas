import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import {
  HeaderSkeleton,
  HeaderSkeletonDesktop,
  HeaderSkeletonMobile
} from './style'

const SkeletonHeader = () => (
  <HeaderSkeleton>
    <HeaderSkeletonDesktop className="container header_skeleton_container">
      <Skeleton className="header_skeleton_logo" />
      <div className="header_skeleton_infos">
        <div className="header_skeleton_infos_carrinho">
          <Skeleton className="header_skeleton_input" />
          <Skeleton className="header_skeleton_button" />
        </div>
        <Skeleton className="header_skeleton_links" />
      </div>
    </HeaderSkeletonDesktop>
    <HeaderSkeletonMobile>
      <div className="container header_skeleton_mobile">
        <Skeleton className="header_skeleton_menu" />
        <Skeleton className="header_skeleton_logo" />
        <Skeleton className="header_skeleton_carrinho" />
      </div>
    </HeaderSkeletonMobile>
  </HeaderSkeleton>
)

export default SkeletonHeader
