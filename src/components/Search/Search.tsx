import styles from './Search.module.scss'
import Icon from './../../images/search-svgrepo-com 1.svg'
import {FC, useEffect, useState} from "react";
import { fetchData } from "../../redux/AsyncActions";
import axios from "axios";

export const Search:FC = () =>{
    const [value, setValue] = useState('');



    const onChangeInput = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setValue(event.target.value)
    }

    return(
        <div className={styles.search}>
            <input value={value} onChange={onChangeInput} placeholder="Поиск"/>
        </div>
    )
}