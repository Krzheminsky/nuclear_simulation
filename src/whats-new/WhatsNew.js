import React, { Component } from "react";
import './WhatsNew.css';

export default class WhatsNewk extends Component {

    render() {
        return (
            <div className="how">
                <h5 className="about-h3">Слава Україні! Героям слава! </h5>
                <h6 className="about-h3">Додано автоматичне завантаження метеоданих.</h6>
                <p>Метеодані люб'язно надані <a href="https://open-meteo.com/" rel="noreferrer" target="_blank">(https://open-meteo.com/).</a> Це відкриті дані з роздільною здатністю від 2 до 11 км.</p>
                <p>Згідно методики, напрямок та швидкість середнього вітру в районі ядерного вибуху визначають з урахуванням потужності ядерного вибуху. За значенням потужності визначається шар атмосфери, для якого знаходяться дані про середній вітер. Ці значення становлять від 0 до 18 км. Можливості вищезгаданого метеоресурсу - швидкість і напрямок вітру на висотах до 180 метрів. Метеодані на цих висотах використовуються у розрахунках.</p>
                <p>
                    Як це працює. Тепер, у зв'язку із тим, що запит на отримання від серверу метеоданих надходить після вибору місця застосування (аварії), алгоритм наступний:
                    <li>
                        За допомоги "мишки" виберіть на карті місце застосування (виникнення аварії) та натисніть ліву клавішу. Застосунок автоматично здійснить запит метеоданих і, у разі успішного їх отримання, у розділі "Вихідні дані" з'являться оновлені показники швидкості та напрямку вітру.
                    </li>

                    <li>
                        У розділі "Вихідні дані" виберіть потужність вибуху та його вид. Також, за бажанням, можна відкоригувати і швидкість та напрямок вітру. Для коректної роботи застосунку, перед тим, як натиснути кнопку "Змоделювати вибух" усі поля "Вихідних даних" повинні бути заповнені.
                    </li>
                    <li>
                        Після заповнення полів у розділі "Вихідні дані" натисніть кнопку "Змоделювати вибух". У розділі "Уражаючі фактори ядерного вибуху" з'являться розрахункові дані. Тут можна буде переглянути розрахунки ударної хвилі, світлового випромінювання, проникаючої радіації та радіоактивного зараження місцевості.
                    </li>
                    <li>
                        Якщо відсутній зв'язок із метеосервером (і таке може бути...), у розділі "Вихідні дані" висвітлиться надпис: "Помилка завантаження метеоданних із сервера: виберіть швидкість та напрямок вітру самостійно!". Будь ласка, виконайте цю інструкцію, та завершіть натисканням кнопки "Змоделювати вибух".
                    </li>
                </p>
                <p>
                    <span className="attention">Важливо!</span> Після вибору на карті місця застосування (аварії) <span className="attention"> Обов'язково натисніть кнопку "Змоделювати вибух"</span>, для перерахунку з новими метеоданими!
                </p>
                <p>Якщо у Вас є які-небудь пропозиції по удосконаленню цього застосунку, будь ласка, не соромтесь, пишіть на <a href="mailto:krzheminsky@ukr.net">krzheminsky@ukr.net</a></p>
                <p>З повагою та надією на розуміння, автор - Віктор Кржемінський.  </p>
                <h5 className="about-h3">Все буде Україна! </h5>
            </div >
        );
    }
}