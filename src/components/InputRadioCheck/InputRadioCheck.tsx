import { useState, PropsWithChildren } from 'react';

import style from './InputRadioCheck.module.css';

type Props = PropsWithChildren<{
    checked: boolean,
    name: string,
    value: string | number | boolean,
    onChange: (value: string | number | boolean) => void,
}>;

const InputRadioCheck = ({checked = false, name, value, onChange}: Props) => {

    const handleClick = () => {
        if (!checked) {
            onChange(value);
        }
    };

    return(
        <div className={style.layout} onClick={handleClick}>
            <div className={style.main} >
                <div className={style.dotMarker} style={{display: `${checked ? 'block' : 'none'}`}}/>
            </div>
            <p><strong>{name}</strong></p>
        </div>
    );
};

export default InputRadioCheck;