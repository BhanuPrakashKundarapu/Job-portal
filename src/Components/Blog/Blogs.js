import React,{useEffect,useState} from 'react'
import { getStroyIds } from '../../services/hacnewsAPI';
import Stroies from './Stories/Stories';
import "./Blogs.css"
import {MdDarkMode} from 'react-icons/md'
import {BsFillBrightnessHighFill,BsImageFill} from 'react-icons/bs';
function Blog() {
    const [dark,setDark]=useState('white')
    const [colWhite,setColwhite]=useState("black")
    const [hide,setHide]=useState(true);
    const bgWhite=()=>{
        setDark("rgb(39, 40, 41,0.8)");
        setColwhite("white")
        setHide(false);
    }
    const bgBlack=()=>{
        setDark("white");
        setColwhite("black")
        setHide(!hide);
    }
    return ( <div style={{background:`${dark}`}}>
    <div className='Addons'>
    {
        hide?
    <button onClick={bgWhite}><MdDarkMode className='icons'/></button>:
    <button onClick={bgBlack}> <BsFillBrightnessHighFill className='icons'/> </button>
    }
    </div>
    <div class="container text-center">
  <div class="row">
    <div  className='blogs' style={{color:`${colWhite}`,padding:"20px"}}>
       <Stroies/>
    </div>
    </div>
  </div>
</div>
     );
}
export default Blog;

