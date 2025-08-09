import { useState } from 'react';
import Tacometer from '../Tacometer/Tacometer';

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

    const handleBackgroundChange = (e) => {
        setBackground(e.target.value)
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
                    <h2 className={style.bottomHeadH2}>CONFIG</h2>
                    <div className={style.bottomInfo}>
                        <p className={style.bottomInfoP}><strong>CAR: {car}</strong></p>
                        <p className={style.bottomInfoP}><strong>DRIVER: {driver}</strong></p>
                        <p className={style.bottomInfoP}><strong>TRACK: {track}</strong></p>
                    </div>
                </div>
                <div className={style.bottomConfigs}>
                    <div className={style.configsColorPickers}>
                        <input type="color" id="scalecolor" name="scalecolor" value={scalesColor} onChange={(e) => setScalesColor(e.target.value)}/>
                        <label htmlFor="scalecolor"> Escales</label>
                    </div>
                    <div className={style.configsColorPickers}>
                        <input type="color" id="needlecolor" name="needlecolor" value={needleColor} onChange={(e) => setNeedleColor(e.target.value)}/>
                        <label htmlFor="needlecolor"> Needle</label>
                    </div>
                    <div className={style.backgroundSelector}>
                        <form>
                            <fieldset>
                                <legend>BACKGROUND</legend>
                                <div>
                                    <input type="radio" id="flames" name="flames" value="flames" checked={background === 'flames'} onChange={handleBackgroundChange}/>
                                    <label htmlFor="flames">FLAMES</label>
                                </div>
                                <div>
                                    <input type="radio" id="griffin" name="griffin" value="griffin" checked={background === 'griffin'} onChange={handleBackgroundChange}/>
                                    <label htmlFor="griffin">GRIFFIN</label>
                                </div>
                                <div>
                                    <input type="radio" id="tabby" name="tabby" value="tabby" checked={background === 'tabby'} onChange={handleBackgroundChange}/>
                                    <label htmlFor="tabby">TABBY</label>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LayoutBoard;