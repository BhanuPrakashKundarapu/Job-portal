import React,{useEffect,useState,useMemo} from 'react'
// import { getStroyIds } from '../../services/hacnewsAPI';
import { getStroyIds,getStory } from '../../../services/hacnewsAPI';
import Story from '../../Story';
import Limit from '../../../Addons/scrolling/Limit';
import {AiOutlineReload }from 'react-icons/ai';
import {ImLink} from 'react-icons/im'

function Stories() {

    const [storyIds,setStoryIds]=useState([]);
    // const [items,setItems]=useState([]);
    const [visible,setVisible]=useState(5);
    const testload=()=>{
        // alert("hello")
        setVisible((preValue)=>(preValue)+5 );
    };
    useEffect(()=>{
        getStroyIds().then(data=>setStoryIds(data));

    },[]);
    return (<div >
        {storyIds.slice(0,visible).map(storyId=><Story key={storyId} storyId={storyId} button={testload}/>)}
         <button onClick={testload} className='Loadmore'>load<AiOutlineReload className='load-icons'/></button>
         <br></br>
        </div>
    );
}

export default Stories;