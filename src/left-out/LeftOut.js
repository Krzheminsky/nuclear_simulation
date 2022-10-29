import React, { Component } from "react";
import './LeftOut.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FireBall, Overpressure20, DepthA, WidthA, DepthB, WidthB, DepthV, WidthV, DepthG, WidthG, Overpressure10, Overpressure5, Overpressure1, ThermalRadiation1, ThermalRadiation2, ThermalRadiation3, IonizingКadiation500, IonizingКadiation100 } from '../calculation/calcFuncs';


function LeftOut() {

    let depthA = +DepthA();
    let widthA = +WidthA();
    let depthB = +DepthB();
    let widthB = +WidthB();
    let depthV = +DepthV();
    let widthV = +WidthV();
    let depthG = +DepthG();
    let widthG = +WidthG();
    let fireBall = +FireBall();
    let overpressure20 = +Overpressure20();
    let overpressure10 = +Overpressure10();
    let overpressure5 = +Overpressure5();
    let overpressure1 = +Overpressure1();
    let thermalRadiation1 = +ThermalRadiation1();
    let thermalRadiation2 = +ThermalRadiation2();
    let thermalRadiation3 = +ThermalRadiation3();
    let ionizingКadiation500 = +IonizingКadiation500();
    let ionizingКadiation100 = +IonizingКadiation100();



    let checkTypeO = (param) => {
        return param != 'NaN' && !isNaN(param) ? param : '0';
    }


    return (

        <div className="left-out">
            <h5 className="h5">Уражаючі фактори ядерного вибуху</h5>

            <div className="accordion" id="accordionExample">

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            Ударна хвиля
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <table className="table table-hover">
                                <tbody >
                                    <tr>
                                        <th scope="row">Радіус вогняної кулі (км)</th>
                                        <td>{checkTypeO(fireBall)}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Радіус ураження вкрай важкої ступіні (спостерігається пошкодження органів не
                                            сумісне з життям) та зони суцільного руйнування (км)</th>
                                        <td>{checkTypeO(overpressure20)}</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">Радіус ураження важкої ступіні (сильні контузії, травми черепа та скелета, розриви
                                            органів черевної порожнини) та зони сильного руйнування (км)</th>
                                        <td>{checkTypeO(overpressure10)}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Радіус ураження середньої ступіні (вивихи кінцівок, контузії середньої важкості,
                                            кровотеча з вух, носа, тощо) (км)</th>
                                        <td>{checkTypeO(overpressure5)}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Радіус ураження легкої ступіні (легка контузія, синяк, тощо) та зони слабких
                                            руйнувань (км)</th>
                                        <td>{checkTypeO(overpressure1)}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Світлове випромінювання
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <table className="table table-hover">
                                <tbody >
                                    <tr>
                                        <th scope="row">Радіус дії світлового випромінювання - опіки III ступеню (омертвіння всіх шарів шкіри та прилеглих тканин) (км)</th>
                                        <td>{checkTypeO(thermalRadiation3)}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Радіус дії світлового випромінювання – опіки II ступеню (утворення пухирів) (км)</th>
                                        <td>{checkTypeO(thermalRadiation2)}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Радіус дії світлового випромінювання - опіки I ступеню (почервоніння та набряк шкіри) (км)</th>
                                        <td>{checkTypeO(thermalRadiation1)}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Проникаюча радіація під час вибуху
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <table className="table table-hover">
                                <tbody >
                                    <tr>
                                        <th scope="row">Радіус випромінювання 500 бер (можливий летальний результат приблизно через 1 місяць, 15% тих, хто вижив, зрештою помруть від раку) (км)</th>
                                        <td>{checkTypeO(ionizingКadiation500)}</td>

                                    </tr>
                                    <tr>
                                        <th scope="row">Радіус випромінювання 100 бер (спричиняє хворобу, ймовірність смерті менше 5% протягом 60 днів, 3% тих, хто вижив, помруть від раку) (км)</th>
                                        <td>{checkTypeO(ionizingКadiation100)}</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Радіоактивне зараження місцевості
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <table className="table table-hover">
                                <tbody >
                                    <tr className="zone-infection">
                                        <td className="zone-infection">
                                            Зона надзвичайно небезпечного зараження (зона Г) на зовнішній межі Д = 4000 рад. Рівні радіації Ро = 800 Р/год., Р10 = 50 Р/год. Роботи зупиняються на декілька діб та поновлюються після спаду рівня радіації до безпечного значення.
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row"> Глибина зони (км)</th>
                                        <td>{checkTypeO(depthG)}</td>

                                    </tr>
                                    <tr>
                                        <th scope="row"> Ширина зони (км)</th>
                                        <td>{checkTypeO(widthG)}</td>
                                    </tr>
                                    <tr className="zone-infection">
                                        <td className="zone-infection">Зона небезпечного зараження (зона В) - Д = 1200-4000 рад. Рівень радіації на зовнішній межі Ро = 240 Р/год., Р10 = 15 Р/год. У цій зоні роботи на об'єктах зупиняються від 1 до 3—4 діб. Люди евакуйовуються чи ховаються в захисних спорудах.
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row"> Глибина зони (км)</th>
                                        <td>{checkTypeO(depthV)}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"> Ширина зони (км)</th>
                                        <td>{checkTypeO(widthV)}</td>
                                    </tr>
                                    <tr className="zone-infection">
                                        <td className="zone-infection">Зона сильного зараження (зона Б) - Д = 400-1200 рад. Рівень радіації на зовнішній межі Ро = 80 Р/год., Р10 = 5 Р/год. Роботи зупиняються на 1 добу. Люди ховаються у сховищах чи евакуйовуються.
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row"> Глибина зони (км)</th>
                                        <td>{checkTypeO(depthB)}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"> Ширина зони (км)</th>
                                        <td>{checkTypeO(widthB)}</td>
                                    </tr>
                                    <tr className="zone-infection">
                                        <td className="zone-infection">Зона помірного зараження (зона А) - Д = 40-400 рад. Рівень радіації на зовнішній межі зони Ро = 8 Р/год., Р10 = 0,5 Р/год. В зоні А роботи на об'єктах, як правило, не зупиняються. На відкритій місцевості, розташованій у середині зони чи у її внутрішній межі, роботи припиняються на декілька годин.
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row"> Глибина зони (км)</th>
                                        <td>{checkTypeO(depthA)}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"> Ширина зони (км)</th>
                                        <td>{checkTypeO(widthA)}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );

}

export default LeftOut