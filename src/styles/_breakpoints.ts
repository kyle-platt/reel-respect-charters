/**
 *  These are the primary breakpoints that encompass almost all layouts:
 *    mobile: 320-479px,
 *    tablet: 480-1023px,
 *    desktop: 1024px+
 */

const device = {
  // teeny: 320 /* minimum size supported */,
  mobileS: 374 /* mobileS: 320-374px */,
  mobileL: 479 /* mobileL: 375-479px */,
  /* tablet: 480-1023px */
  tabletS: 767 /* tabletS: 480-767px */,
  tabletL: 1023 /* tabletL: 768-1023px */,
  /* desktop: 1024px+ */
}

export const layout = {
  /** Target only one specific type of device */
  mobileS: `(max-width: ${device.mobileS}px)`,
  mobileL: `(min-width: ${device.mobileS + 1}px) and (max-width: ${
    device.mobileL
  }px)`,
  mobile: `(max-width: ${device.mobileL}px)`,
  tabletS: `(min-width: ${device.mobileL + 1}px) and (max-width: ${
    device.tabletS
  }px)`,
  tabletL: `(min-width: ${device.tabletS + 1}px) and (max-width: ${
    device.tabletL
  }px)`,
  tablet: `(min-width: ${device.mobileL + 1}px) and (max-width: ${
    device.tabletL
  }px)`,
  desktop: `(min-width: ${device.tabletL + 1}px)`,
}
