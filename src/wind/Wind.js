import React from "react";
import CircularSlider from "@fseehawer/react-circular-slider";
import "./Wind.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addDirectionWind } from "../store/cloudeSlice";

const Wind = () => {
  const dispatch = useDispatch();

  const meteo = useSelector((state) => state.cloud.currentWeather);
  // Достаем из джейсона скорость и направление ветра
  const currentTime = meteo.current_weather.time.slice(0, -2) + "00";
  const findTime = meteo.hourly.time;
  const currentWinddirection = meteo.hourly.winddirection_180m;
  const currentHourly = findTime.indexOf(currentTime);
  const winddirection_180m = currentWinddirection[currentHourly];
  // and find
  const arrow = useSelector((state) => state.cloud.direction.directionWind);

  return (
    <div className="wind" style={{ position: "relative" }}>
      <CircularSlider
        label=""
        min={1}
        max={360}
        width={98}
        direction={1}
        knobSize={18}
        trackSize={0}
        dataIndex={!winddirection_180m ? 360 : winddirection_180m}
        progressSize={0}
        knobPosition="top"
        knobColor="tomato"
        appendToValue="°"
        valueFontSize="12px"
        // labelFontSize="10px"
        verticalOffset="-3px"
        // progressColorFrom="grey"
        // progressColorTo="grey"
        onChange={(directionWind) => {
          dispatch(addDirectionWind({ directionWind }));
        }}
      />
      <div
        className="arrow"
        style={{
          transform: `rotate(${arrow}deg)`,
        }}
      ></div>
    </div>
  );
};

export default Wind;
