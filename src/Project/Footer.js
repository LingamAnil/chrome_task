import React from 'react'
import { IoIosTimer } from "react-icons/io";
import Media from '../Media';
function Footer() {
  return (
    <div id='Fast'>
      <div id='fast1'>
        <div style={{display:"flex",gap:"10px",textAlign:"center",marginLeft:"500px"}}>
          <h1 style={{fontSize:"60px",fontWeight:"700",textAlign:"center"}}>The</h1> 
          <div style={{fontSize:"60px",fontWeight:"700",height:'82px',width:"201px",backgroundColor:" #CEEAD6",color:"#188038",borderRadius:"45px",textAlign:"center",display:"flex",justifyContent:"center",marginTop:"10px",}}><IoIosTimer style={{marginTop:"15px"}}/> fast</div>  
          <h1 style={{fontSize:"60px",fontWeight:"700"}}>way to do</h1>
        </div>
        <h1 style={{fontSize:"60px",fontWeight:"700"}}>things online</h1>
      </div>
      <Media/>
    </div>
  )
}

export default Footer