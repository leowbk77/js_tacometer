import { useState } from 'react';
import Tacometer from '../Tacometer/Tacometer';
import InputRadioCheck from '../InputRadioCheck/InputRadioCheck';

import style from './LayoutBoard.module.css';

const LayoutBoard = () => {
    const [rpm, setRpm] = useState(0);
    const [redlineVal, setRedlineVal] = useState(8000);
    /* Criar um context futuramente */
    const [needleColor, setNeedleColor] = useState('#ff0f0f');
    const [scalesColor, setScalesColor] = useState('#aaf876');
    const [background, setBackground] = useState('tabby');
    /*vars temporarias para mockup*/
    const [driver, setDriverName] = useState('wbk');
    const [car, setCar] = useState('corolla86');
    const [track, setTrack] = useState('Laguna Seca');

    const handleRpmChange = (e) => {
        setRpm(Number(e.target.value));
    };

    const handleRedlineChange = (e) => {
        // tratamento de erro pendente
        setRedlineVal(Number(e.target.value));
    }

    const handleBackgroundChange = (val) => {
        setBackground(val)
    };

    return(
        <div className={style.main}>
            <div className={style.top}>
                <div className={style.topLeft}>
                    <Tacometer redline={redlineVal} needleAngle={rpm} needleColor={needleColor} scaleColor={scalesColor} background={background}/>
                    <input type="range" id="rpmInput" min="-90" max={90} onChange={handleRpmChange}/>
                </div>
                <div className={style.topRight}>
                </div>
            </div>
            <div className={style.bottom}>
                <div className={style.bottomHead}>
                    <h2 className={style.bottomHeadH2}>
                        <strong>CONFIG</strong>
                    </h2>
                    <div className={style.bottomInfo}>
                        <p className={style.bottomInfoP}><strong>CAR: {car}</strong></p>
                        <p className={style.bottomInfoP}><strong>DRIVER: {driver}</strong></p>
                        <p className={style.bottomInfoP}><strong>TRACK: {track}</strong></p>
                    </div>
                </div>
                <div className={style.bottomConfigs}>
                    <div className={style.bottomConfigsLayout}>
                        <div className={style.needleAndScalesDiv}>
                            <div className={style.configsColorPickers}>
                                <input type="color" id="scalecolor" name="scalecolor" value={scalesColor} onChange={(e) => setScalesColor(e.target.value)}/>
                                <label htmlFor="scalecolor"> Escales</label>
                            </div>
                            <div className={style.configsColorPickers}>
                                <input type="color" id="needlecolor" name="needlecolor" value={needleColor} onChange={(e) => setNeedleColor(e.target.value)}/>
                                <label htmlFor="needlecolor"> Needle</label>
                            </div>
                        </div>
                        <div className={style.backgroundSelector}>
                            <InputRadioCheck name="FLAMES" checked={background === 'flames'} value="flames" onChange={handleBackgroundChange}/>
                            <InputRadioCheck name="TABBY" checked={background === 'tabby'} value="tabby" onChange={handleBackgroundChange}/>
                            <InputRadioCheck name="GRIFFIN" checked={background === 'griffin'} value="griffin" onChange={handleBackgroundChange}/>
                        </div>
                    </div>
                    <div className={style.bottomConfigsLayout2}>
                        <input type="number" name="redlineinput" id="redlineinput" value={redlineVal} onChange={(e) => handleRedlineChange(e)}/>
    
                        <input type="range" name="redlineinputrange" id="redlineinputrange" min="7000" max="12000" step="1000" value={redlineVal} onChange={(e) => handleRedlineChange(e)}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LayoutBoard;