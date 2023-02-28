import {FC} from "react";
import styles from './Navbar.module.scss'


export const Navbar: FC = () =>{

    return(
        <div className={styles.Navbar}>
            <div>
                ID
                <img src="#" alt="#"/>
            </div>
            <div>
                Заголовок
                <img src="#" alt=""/>
            </div>
            <div>
                Описание
                <img src="#" alt=""/>
            </div>

        </div>
    )
}
