import React from "react";
import "./LeftAdd.css";
import Wind from "../wind/Wind";

import { useDispatch } from "react-redux";
import { addWind, addTypeExplosion, addPower } from "../store/cloudeSlice";
import { useSelector } from "react-redux";

function LeftAdd(props) {
  const dispatch = useDispatch();
  const meteo = useSelector((state) => state.cloud.currentWeather);
  const { status, error } = useSelector((state) => state.cloud);

  // Достаем из джейсона скорость и направление ветра
  const currentTime = meteo.current_weather.time.slice(0, -2) + "00";
  const findTime = meteo.hourly.time;
  const currentWindspeed = meteo.hourly.windspeed_180m;
  const currentHourly = findTime.indexOf(currentTime);

  const windspeed_180m = +currentWindspeed[currentHourly];

  // and find

  const result = (e) => {
    e.preventDefault();
    let elements = e.target.elements;
    let power = elements["power"].value;
    let wind = elements["wind"].value;
    let typeExplosion = elements["type-explosion"].value;
    dispatch(addWind(+wind));
    dispatch(addTypeExplosion(typeExplosion));
    dispatch(addPower(+power));

    // let obj = {
    //     typeExplosion,
    //     power,
    //     wind
    // }
    // props.calcFunction(obj);
  };

  // const calcWind = (data) => {
  //     props.calcWind(data);
  //     let directionWind = data;
  //     dispatch(addDirectionWind({ directionWind }))
  // }

  return (
    <div className="left-add">
      <h5 className="h5">Вихідні дані</h5>
      <div className="errorr">
        {status === "loading" && (
          <span>Завантаження метеоданих з сервера...</span>
        )}
        {error && (
          <span>
            Помилка завантаження метеоданних із сервера:{" "}
            <span className="errorrr">
              виберіть швидкість та напрямок вітру самостійно!
            </span>
          </span>
        )}
        <span className="transparent">P</span>
      </div>
      <form onSubmit={result}>
        <div className="form-group">
          <table className="table table-hover">
            <tbody>
              <tr>
                <th scope="row">
                  <label className="form-label">
                    Потужність вибуху (в кілотоннах)
                  </label>
                </th>
                <td>
                  <input
                    type="number"
                    className="form-num"
                    defaultValue={20}
                    name="power"
                    step="0.1"
                    min="0.1"
                    max="100000"
                  />
                </td>
              </tr>
              <tr>
                <th scope="row">
                  <label forhtml="exampleSelect1" className="form-label">
                    Вид вибуху
                  </label>
                </th>
                <td>
                  <select
                    className="form-select"
                    id="exampleSelect3"
                    name="type-explosion"
                  >
                    <option> Наземний </option>
                    <option> Повітряний </option>
                  </select>
                </td>
              </tr>

              <tr>
                <th scope="row">
                  <label className="form-label">Швидкість вітру (км/год)</label>
                </th>
                <td>
                  <input
                    type="number"
                    className="form-num"
                    key={windspeed_180m}
                    defaultValue={windspeed_180m}
                    name="wind"
                    step="0.1"
                    min="0.1"
                    max="100"
                  />
                </td>
              </tr>

              <tr>
                <th scope="row">
                  <label forhtml="exampleInput6" className="form-label">
                    Напрямок вітру <br />
                    <span className="wind">
                      (азимут напрямку, з якого дме вітер!)
                    </span>
                  </label>
                </th>
                <td>
                  <Wind />
                </td>
              </tr>
            </tbody>
          </table>

          <button type="submit" className="btn btn-outline-primary">
            Змоделювати вибух
          </button>
        </div>
      </form>
    </div>
  );
}

export default LeftAdd;
