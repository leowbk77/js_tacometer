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
    const [numbersColor, setNumbersColor] = useState('#aaf876');
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
    };

    const handleBackgroundChange = (val) => {
        setBackground(val)
    };

    const generateRpmDataList = () => {
        const ranges = [];
        const minRedLine = 7000;
        const maxRedLine = 12000;
        let k = 1;

        for (let i = minRedLine; i <= maxRedLine; i += 1000) {
            ranges.push(
                <option key={k} value={i} label={String(i/1000)}/>
            );
            k++;
        }
        return(ranges);
    };

    return(
        <div className={style.main}>
            <div className={style.top}>
                <div className={style.topLeft}>
                    <Tacometer redline={redlineVal} needleAngle={rpm} needleColor={needleColor} numbersColor={numbersColor} scaleColor={scalesColor} background={background}/>
                    <input type="range" id="rpmInput" className={style.rpmInput} min="-90" max={90} onChange={handleRpmChange}/>
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
                                <input type="color" id="numbercolor" name="numbercolor" value={numbersColor} onChange={(e) => setNumbersColor(e.target.value)}/>
                                <label htmlFor="needlecolor"> Numbers</label>
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
                        <div>
                            <input className={style.redlineInputRangeList} type="range" name="redlineinputrangelist" id="redlineinputrangelist" list="rpmDataList" min="7000" max="12000" step="1000" value={redlineVal} onChange={(e) => handleRedlineChange(e)}/>
                            <datalist id="rpmDataList">
                                {generateRpmDataList()}
                            </datalist>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LayoutBoard;