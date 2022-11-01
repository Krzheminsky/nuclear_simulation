import React, { Component } from "react";
import './HowToWork.css';


export default class HowToWork extends Component {

    render() {


        return (

            <div className="how">
                <h5 className="about-h3">Слава Україні! Героям слава! </h5>
                <p>Шановні співвітчизники, доброго часу доби!</p>
                <p>
                    Перед використанням застосунку NuclearSimulation автор зауважує: застосунок НЕ Є ОФІЦІЙНИМ ДЖЕРЕЛОМ отримання розрахункових даних, він задуманий, як освітній ресурс. Його не слід використовувати для аварійного планування або реагування на надзвичайні ситуації, коли на карту можуть бути поставлені життя та здоров'я. Це не ідеальне моделювання. Будь ласка, не використовуйте NuclearSimulation, щоб прогнозувати реальний вибух. Дякую.
                </p>
                <p>
                    Окрема подяка  Alex Wellerstein <a href="https://nuclearsecrecy.com" target="_blank">(https://nuclearsecrecy.com)</a>, матеріалами якого я користувався при розробці цього застосунку.
                </p>
                <p>
                    Також дякую фахівцям Департаменту організації заходів цивільного захисту ДСНС України за консультації щодо розрахунків розмірів зон зараження на сліді хмари (радіоактивне зараження місцевості).
                </p>
                <p>
                    Метеодані люб'язно надані <a href="https://open-meteo.com/" rel="noreferrer" target="_blank">(https://open-meteo.com/)</a>, за що їм теж велика подяка!</p>
                <p>
                    NuclearSimulation розроблено з метою допомоги фахівцям з цивільного захисту та громадянам оперативно, швидко визначити основні загрози, які можуть виникнути при застосуванні ядерної зброї, а також для фахівців навчально-методичних центрів цивільного захисту та безпеки життєдіяльності для проведення занять із відповідними категоріями громадян.
                </p>
                <p>
                    Також зауважу, що це спрощена модель вибуху, яка розглядає тільки наземний вибух та вибух у повітрі на висоті 500 метрів.
                </p>
                <p>
                    Згідно методики, напрямок та швидкість середнього вітру в районі ядерного вибуху визначають з урахуванням потужності ядерного вибуху. За значенням потужності визначається шар атмосфери, для якого знаходяться дані про середній вітер. Ці значення становлять від 0 до 18 км. Можливості метеоресурсу "Open Meteo" - швидкість і напрямок вітру на висотах до 180 метрів. Метеодані на цих висотах і використовуються у розрахунках.
                </p>

                <h6 className="about-h3">
                    Моделювання вибуху:
                </h6>
                <p>
                    Перед початком роботи зайдіть на головну сторінку з картою місцевості. За допомоги "мишки" виберіть на карті місце застосування (виникнення аварії) та натисніть ліву клавішу. Застосунок автоматично здійснить запит метеоданих і, у разі успішного їх отримання, у розділі "Вихідні дані" з'являться оновлені показники швидкості та напрямку вітру.
                </p>

                <p>
                    У розділі "Вихідні дані" виберіть потужність вибуху та його вид. Також, за бажанням, можна відкоригувати і швидкість та напрямок вітру. Для коректної роботи застосунку, перед тим, як натиснути кнопку "Змоделювати вибух" усі поля "Вихідних даних" повинні бути заповнені.
                </p>
                <p>
                    Після заповнення полів у розділі "Вихідні дані" натисніть кнопку "Змоделювати вибух". У розділі "Уражаючі фактори ядерного вибуху" з'являться розрахункові дані. Тут можна буде переглянути розрахунки ударної хвилі, світлового випромінювання, проникаючої радіації та радіоактивного зараження місцевості.
                </p>
                <p>
                    На карті відобразяться всі уражаючі фактори.
                    Для того, щоб вибрати відображення окремих категорій факторів у правому верхньому куті мапи є піктограмка шарів, клікнувши на яку, ви зможете вибрати окремі шари з уражаючими факторами.
                </p>
                <p>
                    Також, при кліці лівою клавішею мишки на відображенні загроз, можна побачити їх основні характеристики.
                </p>
                <p> Якщо відсутній зв'язок із метеосервером (і таке може бути...), у розділі "Вихідні дані" висвітлиться надпис: "Помилка завантаження метеоданних із сервера: виберіть швидкість та напрямок вітру самостійно!". Будь ласка, виконайте цю інструкцію, та завершіть натисканням кнопки "Змоделювати вибух".
                </p>

                <p><span className="attention">Важливо!</span> Після вибору на карті місця аварії (натисканням лівої клавіші миші) <span className="attention"> Обов'язково натисніть кнопку "Змоделювати вибух"</span>, для перерахунку з новими метеоданими!</p>

                <p>
                    Інструментами Polyline та Polygon можна користуватися для визначення відстані та площі.
                </p>
                <p>
                    Враховуючи, що ліва клавіша миші задіяна у побудові, визначенні місця та нанесення на мапу ядерного вибуху, доцільно використовувати ПРАВУ КЛАВІШУ МИШІ! Вибір інструменту (Polyline або Polygon) проводиться ЛІВОЮ КЛАВІШОЮ МИШІ, а нанесення на мапу - ПРАВОЮ КЛАВІШОЮ МИШІ.
                </p>
                <p>
                    При задіянні інструментів (Polyline або Polygon) висвітлюється меню: Finish (завершити), Delete Last Point (видалити останню точку) та Cansel (відмінити). Доцільно їх використовувати для зазначених операцій.
                </p>
                <p>
                    Результати вимірювань відстані та/або площі можна побачити внизу під мапою.
                </p>
                <p>З повагою та надією на розуміння, автор - Віктор Кржемінський. <a href="mailto:krzheminsky@ukr.net">krzheminsky@ukr.net</a> </p>
                <h5 className="about-h3 top">Все буде Україна! </h5>
            </div >
        );
    }
}