import React,{useEffect,useState} from 'react'
import { getStory } from '../services/hacnewsAPI';
import './Blog/Blogs.css';
import {ImLink} from 'react-icons/im'
import { mapTime } from '../Addons/Time';
function Story({ storyId }) {
    const [story,setStory]=useState({});

    useEffect(()=>{
        getStory(storyId).then(data=>data && data.url && setStory(data));
    },[]);
    return ( 
      <div className='blogs'>
      {story && story.url?(
            <div className='parent'>
            <h1>title: {story.title}</h1>
            <em>By: {story.by}</em> <br/>
            <p>posted at: {mapTime(story.time)}</p> <br/><br/>
            <div className='button-div'>
           <button className='button'><a href={story.url} target='_blank'>Click to Apply<ImLink/></a></button>
            </div>
            </div>
            ):null}
            </div>       
    );
}

export default Story;


{/* <div class="container text-center">
  <div class="row">
    <div class="col">
      Column
    </div>
  </div>
</div> */}