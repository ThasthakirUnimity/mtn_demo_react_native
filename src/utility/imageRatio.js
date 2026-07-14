
export const getSizeByAuto = (newWidth, newHeight, orgWidth, orgHeight) => {
  let optimalWidth = 0
  let optimalHeight = 0
  let ratio = 1
  if (orgHeight < orgWidth) {
    // *** Image to be resized is wider (landscape)
    const calculation = getSizeByFixedHeight(newHeight, orgWidth, orgHeight)
    optimalWidth = calculation.width
    optimalHeight = newHeight
    ratio = calculation.ratio
  } else if (orgHeight > orgWidth) {
    // *** Image to be resized is taller (portrait)
    optimalWidth = newWidth
    const calculation = getSizeByFixedWidth(newWidth, orgWidth, orgHeight)
    optimalHeight = calculation.height
    ratio = calculation.ratio
  } else {
    // *** Image to be resizerd is a square
    const calculation = getSizeByFixedHeight(newHeight, orgWidth, orgHeight)
    optimalWidth = calculation.width
    optimalHeight = newHeight
    ratio = calculation.ratio
    if (newHeight < newWidth) {
    } else if (newHeight > newWidth) {
      optimalWidth = newWidth
      const calculation = getSizeByFixedWidth(newWidth, orgWidth, orgHeight)
      optimalHeight = calculation.height
      ratio = calculation.ratio
    } else {
      // *** Sqaure being resized to a square
      optimalWidth = newWidth
      optimalHeight = newHeight
    }
  }

  return { ratio, width: optimalWidth, height: optimalHeight }
}

export const getSizeByFixedWidth = (newWidth, orgWidth, orgHeight) => {
  const ratio = orgHeight / orgWidth
  const newHeight = newWidth * ratio
  return { ratio, height: newHeight }
}

export const getSizeByFixedHeight = (newHeight, orgWidth, orgHeight) => {
  const ratio = orgWidth / orgHeight
  const newWidth = newHeight * ratio
  return { ratio, width: newWidth }
}
