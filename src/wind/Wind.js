import React from 'react';
import CircularSlider from '@fseehawer/react-circular-slider';
import "./Wind.css"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { addDirectionWind } from '../store/cloudeSlice'


const Wind = () => {

    const dispatch = useDispatch();

    const meteo = useSelector(state => state.cloud.currentWeather)
    // Достаем из джейсона скорость и направление ветра
    const currentTime = meteo.current_weather.time;
    const findTime = meteo.hourly.time
    const currentWinddirection = meteo.hourly.winddirection_180m
    const currentHourly = findTime.indexOf(currentTime)
    const winddirection_180m = currentWinddirection[currentHourly]
    // and find


    return (
        <div className='wind'>
            <CircularSlider
                label=""
                min={1}
                max={360}
                width={50}
                direction={1}
                knobSize={10}
                trackSize={4}
                dataIndex={!winddirection_180m ? 360 : winddirection_180m}
                progressSize={4}
                knobPosition="top"
                knobColor="tomato"
                appendToValue="°"
                valueFontSize="12px"
                labelFontSize='10px'
                verticalOffset='4px'
                progressColorFrom="grey"
                progressColorTo="grey"
                onChange={directionWind => {
                    dispatch(addDirectionWind({ directionWind }))
                }}
            />
        </div>
    )
};

export default Wind;