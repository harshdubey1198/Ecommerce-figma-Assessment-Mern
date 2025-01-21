import React from 'react'
import breadcrumbImage from "../assets/img/breadcrumbImage.jpg"
import { ArrowRight, ChevronRight } from 'akar-icons'
function HeadingBreadcrumb() {
  return (
    <div 
  className="d-flex justify-content-center align-items-center"
  style={{
    position: 'relative',
    height: "316px",
}}
>
  <div 
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `url(${breadcrumbImage})`,
      backgroundPosition: "center center",
      backgroundSize: "cover",
      filter: "blur(2px)", 
      zIndex: -1 
    }}
  />
  
  <div className="d-flex flex-column">
    <span
      style={{
        fontFamily: 'Poppins',
        fontSize: '48px',
        fontWeight: 500,
        lineHeight: '72px',
        textAlign: 'left',
        textUnderlinePosition: 'from-font',
        textDecorationSkipInk: 'none',
        zIndex: 1 
      }}
    >
      Shop
    </span>
    <span>
      Home
      <ChevronRight strokeWidth={2} size={20} />
      Shop
    </span>
  </div>
</div>

  )
}

export default HeadingBreadcrumb