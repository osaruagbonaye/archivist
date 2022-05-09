import { useState, useEffect } from "react";
const useFetch = (url)=>{
    //const [name, setName] = useState('mario');
    const [data, setData] = useState([])
    const handleDelete =  (id)=>{
        const newData = data.filter(data=>(data.id != id));
        setData(newData);
    }
    useEffect(()=>{
        const abortCont = new AbortController();
        fetch(url, {signal: abortCont.signal}).then(res=>{
            /* if(!res.ok){
              throw Error('Could not fetch the data for that resource');  
            } */
            return res.json();
        }).then(data=>{
            setData(data);
        }).catch(err=>{
            console.log(err);
        })

        //return ()=>(abortCont.abort());
    }, [url])

    return {data, handleDelete}
}
export default useFetch