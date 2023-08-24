import { useState,useEffect } from "react";
import { MAX_JOBS,LIMIT_INCREMENT } from "./Offset";

function Limit() {
    const [reload,setReload]=useState(false);
    const [count,setCount]=useState(LIMIT_INCREMENT);
    const handleScroll=()=>{
        if(window.innerHeight+document.documentElement.scrollTop !=document.documentElement.offsetHeight|| reload){
            return false
        }

        setReload(true);
    }
    useEffect(()=>{
        if(!reload){
            return;
        }

        if(count+LIMIT_INCREMENT >= MAX_JOBS){
            setCount(MAX_JOBS);
        }else{
            setCount(count+LIMIT_INCREMENT);
        }

        setReload(false);
    },[reload]);

    useEffect(()=>{
        window.addEventListener('scroll',handleScroll);
        return()=>window.removeEventListener('scroll',handleScroll);
    },[]);
    return 
}

export default Limit;