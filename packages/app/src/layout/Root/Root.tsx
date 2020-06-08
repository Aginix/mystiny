import React, { FC, useCallback, useState } from 'react'
import { Frame, useBreakpoints } from '@mystiny/ui'
import PrimarySidebar from './PrimarySidebar'
import PrimaryTopBar from './PrimaryTopBar'

const Root: FC<{}> = ({ children }) => {
  const isTabletDown = useBreakpoints('down', 'sm');
  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);
  const toggleMobileNavigationActive = useCallback(
    () => setMobileNavigationActive((mobileNavigationActive) => !mobileNavigationActive),
    [],
  );

  const topbarMarkup = <PrimaryTopBar showNavigationToggle onNavigationToggle={toggleMobileNavigationActive} />;

  const navigationMarkup = (
    <PrimarySidebar
      open={isTabletDown ? mobileNavigationActive : true}
      handleClose={toggleMobileNavigationActive}
      addSpaceForTopBar
    />
  )

  return <Frame topBar={topbarMarkup} navigation={navigationMarkup}>{children}</Frame>
}

export default Root