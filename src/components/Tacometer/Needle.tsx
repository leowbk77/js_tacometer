import style from './Needle.module.css';
import { useState } from 'react'

const Needle = () => {
    const [maxAngle, setMaxAngle] = useState(90);
    
    return(
        <div className={style.needle} id={"agulha"}>
            <div className={style.needleHead}></div>
            <div className={style.needleBody}></div>
        </div>
    );
};

export default Needle;