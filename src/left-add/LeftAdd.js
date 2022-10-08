import React, { Component } from "react";
import './LeftAdd.css';
import Wind from "../wind/Wind";


export default class LeftAdd extends Component {

    result = (e) => {
        e.preventDefault();
        let elements = e.target.elements;
        let power = elements['power'].value;
        let wind = elements['wind'].value;
        let typeExplosion = elements['type-explosion'].value;

        let obj = {
            typeExplosion,
            power,
            wind
        }
        this.props.calcFunction(obj);
    }


    render() {

        const calcWind = (data) => {
            this.props.calcWind(data);
        }


        return (
            <div className="left-add">
                <h5 className="h5">Вихідні дані</h5>
                <form onSubmit={this.result}>
                    <div className="form-group">
                        <table className="table table-hover">
                            <tbody>
                                <tr>
                                    <th scope="row">
                                        <label className="form-label">Потужність вибуху (в кілотоннах)</label>
                                    </th>
                                    <td>
                                        <input type="number" className="form-num" defaultValue={20} name="power" step="0.1" min="0.1" max="100000" />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <label forhtml="exampleSelect1" className="form-label">Вид вибуху</label>
                                    </th>
                                    <td>
                                        <select className="form-select" id="exampleSelect3" name="type-explosion">
                                            <option> Наземний </option>
                                            <option> Повітряний </option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">
                                        <label className="form-label">Швидкість вітру (м/с)</label>
                                    </th>
                                    <td>
                                        <input type="number" className="form-num" defaultValue={1} name="wind" step="0.1" min="0.1" max="20" />
                                    </td>
                                </tr>

                                <tr>
                                    <th scope="row">
                                        <label forhtml="exampleInput6" className="form-label">Напрямок вітру</label>
                                    </th>
                                    <td>
                                        <Wind calcWind={calcWind} />
                                    </td>
                                </tr>

                            </tbody>
                        </table >

                        <button
                            type="submit"
                            className="btn btn-outline-primary">Змоделювати вибух</button>
                    </div>
                </form>
            </div >
        );
    }
}