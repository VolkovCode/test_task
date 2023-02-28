import {useEffect, useState} from "react";
import axios from "axios/index";


export const Table = () =>{
   const [value,setValue]=useState<{
       ID: number,
       title: string,
       body: string,
   }>()
    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
                setValue(data);
            } catch (error) {
                console.log(error, ' ERROR');
            }
        }
        fetchData();
    }, []);
    return(

    )
}