import axios from 'axios';
import { selectFields } from '../Util/SelectField';
export const baseUrl="https://hacker-news.firebaseio.com/v0/";
export const newStoriesUrl=`${baseUrl}jobstories.json`;
export const storyUrl=`${baseUrl}item/`;


 export const getStory=async(storyId)=>{
    const result =await axios.get(`${storyUrl+storyId}.json`).then(({data})=>data && selectFields(data));
    return result;
 }

export const getStroyIds=async()=>{
    const result =await axios.get(newStoriesUrl).then(({data})=>data);
    return result;
}