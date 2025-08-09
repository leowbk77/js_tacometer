import { PropsWithChildren } from "react";
import flames from '../../img/flames.png';
import tabby from '../../img/tabby.png';
import griffin from '../../img/griffin.png';

/* 
Angulo da agulha hardcoded temporariamente
*/
//import Needle from "./Needle";
import style from './Tacometer.module.css';

type Props = PropsWithChildren<{
    redline: number,
    needleAngle: number,
    needleColor: string,
    scaleColor: string,
    background: string,
}>;

const Tacometer = ({redline, needleAngle, needleColor = 'red', scaleColor = '#aaf876', background = 'tabby'}: Props) => {

    const backgrounds: Record<string, string> = {
        flames,
        tabby,
        griffin
    }

    const generateScales = () => {
        const numberOfScales = (redline / 1000) + 1; // numero de mostradores -> (redline / 1000 + 1) <- redline é o RPM max;
        const angleBetweenScales = 180 / numberOfScales; //para encontrar o angulo entre os mostradores: (180 / n) <- n é o número de mostradores
        const scales = []
        for(let i = 0; i < numberOfScales; i++){
            const angle = (-90) + (i * angleBetweenScales); //angulo do mostrador i
            scales.push(
                <div key={i} className={style.scale} style={{transform: `rotate(${angle}deg)`}}>
                    <div className={style.scaleHead} style={{background: `${scaleColor}`}}></div>
                    <div className={style.scaleBody}></div>
                </div>
            )
        }
        return scales;
    };

    return(
        <>
            <div className={style.tacometer}>
                <div className={style.bkgimg} style={{backgroundImage: `url(${backgrounds[background]})`}}></div>

                <div className={style.needle} id={"agulha"} style={{transform: `rotate(${needleAngle}deg)`}}>
                    <div className={style.needleHead} style={{background: `${needleColor}`}}></div>
                    <div className={style.needleBody}></div>
                </div>
                
                {generateScales()}
            </div>
        </>
    );
};

export default Tacometer;