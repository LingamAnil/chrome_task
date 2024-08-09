import React, { useRef } from 'react'

function Media() {
   
  return (
    <div style={{overflow:"hidden",textAlign:"center",marginTop:"100px",position:"sticky",top:"100px"}}>
   <div style={{position:"sticky",top:"100px"}}>
    <video src="https://www.google.com/chrome/static/videos/dev-components/non-chrome.webm"autoPlay style={{width:"1200px",borderRadius:"15px",position:"sticky",top:"100px"}}></video>
   </div>
    </div>
  )
}

export default Media;