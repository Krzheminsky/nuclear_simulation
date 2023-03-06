import React, { Component } from "react";

export default class Application extends Component {

    render() {
        return (
            <div className="how">
                <h6 className="about-h3">Завантажуйте мобільний додаток! </h6>

                <p>До Вашої уваги мобільний застосунок NuclearSim, <a href="http://nuclearsimulation.inf.ua/app-release.apk" download="" title="Завантажити мобільний застосунок NuclearSim">завантажуйте будь ласка.</a> Цей застосунок сторено під платформу Android.</p>

                <p>Але, оскільки я не реєстрував його у Play Market, то Google Play при завантаженні на телефон каже, що це - небезпечний додаток, і він заблокований.</p>
                <p>Якщо на то Ваша воля, можете натиснути "Докладніше" і далі - "Усе одно установити". Далі, Google Play запропонує надіслати додаток на перевірку безпеки. Тут - Ваш вибір. Я не надсилав і не знаю, скільки ця перевірка буде тривати:-)</p>
                <p> У використанні застосунок дуже простий:
                    <li>за потреби, отримуємо метеодані та передаємо їх до вихідних даних;</li>
                    <li>у вихідних даних вибираємо потужність та вид вибуху, при бажанні коригуємо швидкість і напрямок вітру;</li>
                    <li>клацаємо, щоб змоделювати вибух.</li></p>
                <p>Для кращої візуалізації розрахунки та моделювання вибуху виконано тотожними кольорами.</p>
                <p>Якщо у Вас є які-небудь пропозиції по удосконаленню цього застосунку, будь ласка, не соромтесь, пишіть на <a href="mailto:krzheminsky@ukr.net">krzheminsky@ukr.net</a></p>
                <h5 className="about-h3">Все буде Україна! </h5>
            </div >
        );
    }
}