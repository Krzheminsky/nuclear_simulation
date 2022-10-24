
import React, { Component } from "react";


export default class CalculationFirst extends Component {

    fireBall() {
        const { dataExplosion: { typeExplosion, power } } = this.props;
        if (!power) {
            return 0
        }
        else if (typeExplosion === 'Наземний') {
            return (0.0813 * Math.pow(+power, 0.3956)).toFixed(2)
        }
        else {
            return (0.0592 * Math.pow(+power, 0.4045)).toFixed(2)
        }
    }

    overpressure20() {
        const { dataExplosion: { typeExplosion, power } } = this.props;
        if (!power) {
            return 0
        }
        else if (typeExplosion === 'Наземний') {
            return (0.2187 * Math.pow(+power, 0.3327)).toFixed(2)
        }
        else if (power >= 15) {
            return (0.2273 * Math.pow(+power, 0.3327)).toFixed(2)
        }
        else {
            return 0
        }
    }

    overpressure10() {
        const { dataExplosion: { typeExplosion, power } } = this.props;
        if (!power) {
            return 0
        }
        else if (typeExplosion === 'Наземний') {
            return (0.3096 * Math.pow(+power, 0.3347)).toFixed(2)
        }
        else if (power >= 0.5) {
            return (0.274 * Math.pow(+power, 0.3609)).toFixed(2)
        }
        else {
            return 0
        }
    }

    overpressure5() {
        const { dataExplosion: { typeExplosion, power } } = this.props;
        if (!power) {
            return 0
        }
        else if (typeExplosion === 'Наземний') {
            return (0.4559 * Math.pow(+power, 0.334)).toFixed(2)
        }
        else if (power >= 0.5) {
            return (0.4891 * Math.pow(+power, 0.342)).toFixed(2)
        }
        else {
            return 0
        }
    }

    overpressure1() {
        const { dataExplosion: { typeExplosion, power } } = this.props;
        if (!power) {
            return 0
        }
        else if (typeExplosion === 'Наземний') {
            return (1.1768 * Math.pow(+power, 0.3333)).toFixed(2)
        }
        else if (power >= 0.3) {
            return (1.8689 * Math.pow(+power, 0.2896)).toFixed(2)
        }
        else {
            return 0
        }
    }

    thermalRadiation1() {
        const { dataExplosion: { typeExplosion, power } } = this.props;
        if (!power) {
            return 0
        }
        else if (typeExplosion === 'Наземний') {
            return (1.0551 * Math.pow(+power, 0.4103)).toFixed(2)
        }
        else if (power >= 0.3) {
            return (1.1248 * Math.pow(+power, 0.4246)).toFixed(2)
        }
        else {
            return 0
        }
    }

    thermalRadiation2() {
        const { dataExplosion: { typeExplosion, power } } = this.props;
        if (!power) {
            return 0
        }
        else if (typeExplosion === 'Наземний') {
            return (0.7414 * Math.pow(+power, 0.4181)).toFixed(2)
        }
        else if (power >= 0.3) {
            return (0.6635 * Math.pow(+power, 0.4571)).toFixed(2)
        }
        else {
            return 0
        }
    }

    thermalRadiation3() {
        const { dataExplosion: { typeExplosion, power } } = this.props;
        if (!power) {
            return 0
        }
        else if (typeExplosion === 'Наземний') {
            return (0.5658 * Math.pow(+power, 0.4185)).toFixed(2)
        }
        else if (power >= 0.5) {
            return (0.5758 * Math.pow(+power, 0.4381)).toFixed(2)
        }
        else {
            return 0
        }
    }

    ionizingКadiation500() {
        const { dataExplosion: { typeExplosion, power } } = this.props;
        if (!power) {
            return 0
        }
        else if (typeExplosion === 'Наземний') {
            return (0.8328 * Math.pow(+power, 0.1656)).toFixed(2)
        }
        else if (power >= 0.3) {
            return (0.7253 * Math.pow(+power, 0.1804)).toFixed(2)
        }
        else {
            return 0
        }
    }

    ionizingКadiation100() {
        const { dataExplosion: { typeExplosion, power } } = this.props;
        if (!power) {
            return 0
        }
        else if (typeExplosion === 'Наземний') {
            return (1.1067 * Math.pow(+power, 0.1449)).toFixed(2)
        }
        else {
            return (0.9645 * Math.pow(+power, 0.1626)).toFixed(2)
        }
    }

    depthA() {
        const { dataExplosion: { typeExplosion, power, wind } } = this.props;
        if (!power) {
            return 0
        }
        else if (typeExplosion === 'Наземний') {
            if (+power < 0.1 && wind <= 50) {
                return (((-0.0002 * Math.pow(wind, 2)) + (wind * 0.018) + 0.682) * ((-224.68 * Math.pow(+power, 2)) + (62.928 * +power) + 0.4484)).toFixed(2)
            }
            else if ((+power >= 0.1 && +power <= 0.5) && wind <= 50) {
                return (((-0.0002 * Math.pow(wind, 2)) + (wind * 0.0248) + 0.5351) * ((-15.833 * Math.pow(power, 2)) + (22.75 * +power) + 2.3833)).toFixed(2)
            }
            else if ((+power > 0.5 && +power <= 5) && wind <= 75) {
                return (((2e-06 * Math.pow(wind, 3)) - (0.0004 * Math.pow(wind, 2)) + (wind * 0.0288) + 0.4772) * ((-0.482 * Math.pow(+power, 2)) + (7.2812 * +power) + 6.6225)).toFixed(2)
            }
            else if (+power > 5 && +power <= 100) {
                return (((-8e-05 * Math.pow(wind, 2)) + (wind * 0.0181) + 0.5594) * ((-0.0059 * Math.pow(+power, 2)) + (1.6953 * +power) + 24.244)).toFixed(2)
            }
            else if (+power > 100 && +power <= 1000) {
                return (((-8e-05 * Math.pow(wind, 2)) + (wind * 0.0181) + 0.5594) * ((-0.0003 * Math.pow(+power, 2)) + (0.5834 * +power) + 84.208)).toFixed(2)
            }

            else if (+power > 1000 && +power <= 10000) {
                return ((0.3859 * Math.log(wind) - 0.2432) * ((-5e-06 * Math.pow(+power, 2)) + (0.1251 * +power) + 244.31)).toFixed(2)
            }
            else if (+power > 10000) {
                return (((0.0729 * wind / 3.6) + 1.0619) * 27.223 * Math.pow(+power, 0.305)).toFixed(2)
            }
            else {
                return 0
            }
        }
        else if (typeExplosion === 'Повітряний') {
            if (+power < 0.05) {
                return 0
            }
            else if ((+power >= 0.05 && +power < 0.1) && (wind >= 10 && wind <= 18)) {
                return 1.1
            }
            else if ((+power >= 0.05 && +power < 0.1) && (wind >= 19 && wind <= 25)) {
                return 1
            }
            else if ((+power >= 0.1 && +power <= 0.5) && wind <= 50) {
                return ((0.0097 * Math.log(wind) + 0.8781) * (1.566 * Math.log(+power) + 5.5257)).toFixed(2)
            }
            else if ((+power > 0.5 && +power <= 5) && wind <= 75) {
                return ((0.1763 * Math.log(wind) + 0.4015) * (4.0928 * Math.log(+power) + 6.7782)).toFixed(2)
            }
            else if (+power > 5 && +power <= 100) {
                return ((0.3226 * Math.log(wind) - 0.0252) * (19.033 * Math.log(+power) - 27.488)).toFixed(2)
            }
            else if (+power > 100 && +power <= 1000) {
                return ((0.3226 * Math.log(wind) - 0.0252) * (52.545 * Math.log(+power) - 180.64)).toFixed(2)
            }
            else if (+power > 1000 && +power <= 10000) {
                return ((0.4487 * Math.log(wind) - 0.452) * (209.34 * Math.log(+power) - 1345.7)).toFixed(2)
            }
            else if (+power > 10000) {
                return (((0.0729 * wind / 3.6) + 1.0619) * 5.1564 * Math.pow(+power, 0.4474)).toFixed(2)
            }
            else {
                return 0
            }
        }
        else {
            return 0
        }
    }

    widthA() {
        const { dataExplosion: { typeExplosion, power, wind } } = this.props;
        if (!power) {
            return 0
        }
        else if (typeExplosion === 'Наземний') {
            if (+power < 0.1 && wind <= 50) {
                return (((-1.144 * Math.log(wind)) + 4.9061) * ((-207.64 * Math.pow(+power, 2)) + (44.489 * +power) + 0.1228)).toFixed(2)
            }
            else if ((+power >= 0.1 && +power <= 0.5) && wind <= 50) {
                return (((-0.363 * Math.log(wind)) + 2.1473) * ((-11.667 * Math.pow(+power, 2)) + (11.5 * +power) + 1.4667)).toFixed(2)
            }
            else if ((+power > 0.5 && +power <= 5) && wind <= 75) {
                return (((-0.372 * Math.log(wind)) + 2.2152) * ((-0.1417 * Math.pow(+power, 2)) + (1.625 * +power) + 4.2167)).toFixed(2)
            }
            else if (+power > 5 && +power <= 100) {
                return (((-0.294 * Math.log(wind)) + 1.9694) * ((-0.0005 * Math.pow(+power, 2)) + (0.1562 * +power) + 9.3214)).toFixed(2)
            }
            else if (+power > 100 && +power <= 1000) {
                return (((0.0001 * Math.pow(wind, 2)) - (wind * 0.0179) + 1.4445) * (3.1725 * Math.log(+power) - 5.4798)).toFixed(2)
            }
            else if (+power > 1000 && +power <= 10000) {
                return (((-0.212 * Math.log(wind)) + 1.6773) * ((-5e-07 * Math.pow(+power, 2)) + (0.0125 * +power) + 26.778)).toFixed(2)
            }
            else if (+power > 10000) {
                return (3.6303 * Math.pow(+power, 0.4283)).toFixed(2)
            }
            else {
                return 0
            }
        }
        else if (typeExplosion === 'Повітряний') {
            if (+power < 0.05) {
                return 0
            }
            else if ((+power >= 0.05 && +power < 0.1) && (wind >= 10 && wind <= 18)) {
                return 0.9
            }
            else if ((+power >= 0.05 && +power < 0.1) && (wind >= 19 && wind <= 25)) {
                return 0.3
            }
            else if ((+power >= 0.1 && +power <= 0.5) && wind <= 50) {
                return ((-0.918 * Math.log(wind) + 3.957) * (0.793 * Math.log(+power) + 2.6069)).toFixed(2)
            }
            else if ((+power > 0.5 && +power <= 5) && wind <= 75) {
                return ((0.1763 * Math.log(wind) + 0.4015) * (1.0548 * Math.log(+power) + 2.7756)).toFixed(2)
            }
            else if (+power > 5 && +power <= 100) {
                return ((-0.318 * Math.log(wind) + 2.0168) * (1.8207 * Math.log(+power) + 0.8617)).toFixed(2)
            }
            else if (+power > 100 && +power <= 1000) {
                return ((-0.318 * Math.log(wind) + 2.0168) * (4.4643 * Math.log(+power) - 11.079)).toFixed(2)
            }
            else if (+power > 1000 && +power <= 10000) {
                return ((-0.219 * Math.log(wind) + 1.706) * (17.875 * Math.log(+power) - 112.59)).toFixed(2)
            }
            else if (+power > 10000) {
                return (0.5195 * Math.pow(+power, 0.5816)).toFixed(2)
            }
            else {
                return 0
            }
        }
        else {
            return 0
        }
    }


    depthB() {
        const { dataExplosion: { typeExplosion, power, wind } } = this.props;
        if (!power) {
            return 0
        }
        else if (typeExplosion === 'Наземний') {
            if (+power < 0.2) {
                return 0
            }
            else if ((+power >= 0.2 && +power < 0.5) && wind <= 10) {
                return 1.2
            }
            else if ((+power >= 0.5 && +power < 1) && wind <= 25) {
                return 2.2
            }
            else if ((+power >= 1 && +power <= 5) && wind <= 75) {
                return (((3E-06 * Math.pow(wind, 3)) - (0.0005 * Math.pow(wind, 2)) + (wind * 0.0239) + 0.6818) * ((-0.2027 * Math.pow(+power, 2)) + (2.6875 * +power) + 1.0216)).toFixed(2)
            }
            else if (+power > 5 && +power <= 100) {
                return (((-7E-05 * Math.pow(wind, 2)) + (wind * 0.0116) + 0.7278) * ((-0.0014 * Math.pow(+power, 2)) + (0.5104 * +power) + 8.7578)).toFixed(2)
            }
            else if (+power > 100 && +power <= 1000) {
                return (((-7E-05 * Math.pow(wind, 2)) + (wind * 0.0116) + 0.7278) * ((-0.0001 * Math.pow(+power, 2)) + (0.2125 * +power) + 25.833)).toFixed(2)
            }
            else if (+power > 1000 && +power <= 10000) {
                return (((-5E-05 * Math.pow(wind, 2)) + (wind * 0.0099) + 0.7835) * ((-2E-06 * Math.pow(+power, 2)) + (0.0491 * +power) + 85.18)).toFixed(2)
            }
            else if (+power > 10000) {
                return (((0.0729 * wind / 3.6) + 1.0619) * 16.216 * Math.pow(+power, 0.3317)).toFixed(2)
            }
            else {
                return 0
            }
        }
        else if (typeExplosion === 'Повітряний') {
            if (+power < 50) {
                return 0
            }
            else if ((+power >= 50 && +power < 100) && wind <= 10) {
                return 4.8
            }
            else if ((+power >= 100 && +power < 200) && wind <= 10) {
                return 8.1
            }
            else if ((+power >= 200 && +power < 500) && wind <= 25) {
                return (((wind * 0.0273) + 0.3182) * (2.4695 * Math.log(+power) + 8.8366)).toFixed(2)
            }

            else if ((+power >= 500 && +power < 1000) && wind <= 25) {
                return (((wind * 0.0028) + 0.9306) * (2.4695 * Math.log(+power) + 8.8366)).toFixed(2)
            }
            else if ((+power >= 1000 && +power < 2000) && wind <= 25) {
                return (((wind * 0.0026) + 0.9359) * (2.4695 * Math.log(+power) + 8.8366)).toFixed(2)
            }
            else if ((+power >= 2000 && +power < 5000) && wind <= 50) {
                return (((wind * (-0.0174)) + 1.4359) * (49.751 * Math.log(+power) - 342.04)).toFixed(2)
            }
            else if ((+power >= 5000 && +power <= 8000) && wind <= 75) {
                return ((-0.417 * Math.log(wind) + 2.3923) * (49.751 * Math.log(+power) - 342.04)).toFixed(2)
            }
            else if (+power > 8000 && +power <= 10000) {
                return ((-0.3 * Math.log(wind) + 2.0411) * (49.751 * Math.log(+power) - 342.04)).toFixed(2)
            }
            else if (+power > 10000) {
                return (((0.0729 * wind / 3.6) + 1.0619) * 2.6167 * Math.pow(+power, 0.4832)).toFixed(2)
            }
            else {
                return 0
            }
        }
        else {
            return 0
        }
    }


    widthB() {
        const { dataExplosion: { typeExplosion, power, wind } } = this.props;
        if (!power) {
            return 0
        }
        else if (typeExplosion === 'Наземний') {
            if (+power < 0.2) {
                return 0
            }
            else if ((+power >= 0.2 && +power < 0.5) && wind <= 10) {
                return 1.1
            }
            else if ((+power >= 0.5 && +power < 1) && wind <= 25) {
                return (((wind * -0.0867) + 3.2667) * (1.1718 * Math.log(+power) + 1.9035)).toFixed(2)
            }
            else if ((+power >= 1 && +power <= 5) && wind <= 75) {
                return ((-0.696 * Math.log(wind) + 3.2658) * (1.1718 * Math.log(+power) + 1.9035)).toFixed(2)
            }
            else if (+power > 5 && +power <= 100) {
                return ((-0.432 * Math.log(wind) + 2.4491) * (0.0072 * Math.log(+power) + 5.3008)).toFixed(2)
            }
            else if (+power > 100 && +power <= 1000) {
                return ((-0.432 * Math.log(wind) + 2.4491) * (3.1725 * Math.log(+power) - 5.4798)).toFixed(2)
            }
            else if (+power > 1000 && +power <= 10000) {
                return ((-0.323 * Math.log(wind) + 2.0412) * (12.936 * Math.log(+power) - 77.886)).toFixed(2)
            }
            else if (+power > 10000) {
                return (2.0379 * Math.pow(+power, 0.456)).toFixed(2)
            }
            else {
                return 0
            }
        }
        else if (typeExplosion === 'Повітряний') {
            if (+power < 50) {
                return 0
            }
            else if ((+power >= 50 && +power < 100) && wind <= 10) {
                return 2.2
            }
            else if ((+power >= 100 && +power < 200) && wind <= 10) {
                return 3.4
            }
            else if ((+power >= 200 && +power < 500) && wind <= 25) {
                return (((wind * (-0.09)) + 3.25) * (1.345 * Math.log(+power) - 4.9253)).toFixed(2)
            }

            else if ((+power >= 500 && +power < 1000) && wind <= 25) {
                return (((wind * (-0.0581)) + 2.453) * (1.345 * Math.log(+power) - 4.9253)).toFixed(2)
            }
            else if ((+power >= 1000 && +power < 2000) && wind <= 25) {
                return (((wind * (-0.0455)) + 2.1382) * (1.345 * Math.log(+power) - 4.9253)).toFixed(2)
            }
            else if ((+power >= 2000 && +power < 5000) && wind <= 50) {
                return (((wind * (-0.0378)) + 1.9444) * (4.6921 * Math.log(+power) - 30.414)).toFixed(2)
            }
            else if ((+power >= 5000 && +power <= 8000) && wind <= 75) {

                return ((-0.855 * Math.log(wind) + 3.7917) * (4.6921 * Math.log(+power) - 30.414)).toFixed(2)
            }
            else if (+power > 8000 && +power <= 10000) {
                return ((-0.632 * Math.log(wind) + 3.0767) * (4.6921 * Math.log(+power) - 30.414)).toFixed(2)
            }
            else if (+power > 10000) {
                return (0.2335 * Math.pow(+power, 0.6296)).toFixed(2)
            }
            else {
                return 0
            }
        }
        else {
            return 0
        }
    }


    depthV() {
        const { dataExplosion: { typeExplosion, power, wind } } = this.props;
        if (!power) {
            return 0
        }
        else if (typeExplosion === 'Наземний') {
            if (+power < 1) {
                return 0
            }
            else if ((+power >= 1 && +power < 2) && wind <= 10) {
                return 1.4
            }
            else if ((+power >= 2 && +power < 5) && wind <= 10) {
                return 2.4
            }
            else if ((+power >= 2 && +power < 5) && (wind > 10 && wind <= 25)) {
                return 1.8
            }
            else if ((+power >= 5 && +power < 10) && wind <= 50) {
                return ((-0.266 * Math.log(wind) + 1.6868) * (2.9634 * Math.log(+power) - 0.349)).toFixed(2)
            }
            else if ((+power >= 10 && +power < 20) && wind <= 50) {
                return ((-0.06 * Math.log(wind) + 1.1226) * (7.5979 * Math.log(+power) - 12.392)).toFixed(2)
            }
            else if ((+power >= 20 && +power < 50) && wind <= 75) {
                return ((-0.149 * Math.log(wind) + 1.3741) * (7.5979 * Math.log(+power) - 12.392)).toFixed(2)
            }
            else if (+power >= 50 && +power <= 100) {
                return ((0.0327 * Math.log(wind) + 0.8409) * (7.5979 * Math.log(+power) - 12.392)).toFixed(2)
            }
            else if (+power > 100 && +power <= 1000) {
                return ((0.0327 * Math.log(wind) + 0.8409) * (21.333 * Math.log(+power) - 74.991)).toFixed(2)
            }
            else if (+power > 1000 && +power <= 10000) {
                return ((0.0779 * Math.log(wind) + 0.7589) * (79.974 * Math.log(+power) - 506.87)).toFixed(2)
            }
            else if (+power > 10000) {
                return (((0.0729 * wind / 3.6) + 1.0619) * 5.5759 * Math.pow(+power, 0.4095)).toFixed(2)
            }
            else {
                return 0
            }
        }
        else if (typeExplosion === 'Повітряний' && power > 10000) {
            return (((0.0729 * wind / 3.6) + 1.0619) * 0.6399 * Math.pow(+power, 0.5894)).toFixed(2)
        }
        else {
            return 0
        }
    }

    widthV() {
        const { dataExplosion: { typeExplosion, power, wind } } = this.props;
        if (!power) {
            return 0
        }
        else if (typeExplosion === 'Наземний') {
            if (+power < 1) {
                return 0
            }
            else if ((+power >= 1 && +power < 2) && wind <= 10) {
                return 1.2
            }
            else if ((+power >= 2 && +power < 5) && wind <= 10) {
                return 2.3
            }
            else if ((+power >= 2 && +power < 5) && (wind > 10 && wind <= 25)) {
                return 0.5
            }
            else if ((+power >= 5 && +power < 10) && wind <= 50) {
                return ((-1.238 * Math.log(wind) + 4.9297) * (1.3696 * Math.log(+power) - 0.4358)).toFixed(2)
            }
            else if ((+power >= 10 && +power < 20) && wind <= 50) {
                return ((-0.808 * Math.log(wind) + 3.6262) * (1.3336 * Math.log(+power) - 0.6062)).toFixed(2)
            }
            else if ((+power >= 20 && +power < 50) && wind <= 75) {
                return ((-0.771 * Math.log(wind) + 3.4903) * (1.3336 * Math.log(+power) - 0.6062)).toFixed(2)
            }
            else if (+power >= 50 && +power <= 100) {
                return ((-0.482 * Math.log(wind) + 2.6074) * (1.3336 * Math.log(+power) - 0.6062)).toFixed(2)
            }


            else if (+power > 100 && +power <= 1000) {
                return ((-0.482 * Math.log(wind) + 2.6074) * (2.462 * Math.log(+power) - 5.7505)).toFixed(2)
            }
            else if (+power > 1000 && +power <= 10000) {
                return ((-0.331 * Math.log(wind) + 2.0502) * (7.9974 * Math.log(+power) - 47.187)).toFixed(2)
            }
            else if (+power > 10000) {
                return (0.5236 * Math.pow(+power, 0.5547)).toFixed(2)
            }
            else {
                return 0
            }
        }
        else if (typeExplosion === 'Повітряний' && +power > 10000) {
            return (0.0287 * Math.pow(+power, 0.7908)).toFixed(2)
        }
        else {
            return 0
        }

    }


    depthG() {
        const { dataExplosion: { typeExplosion, power, wind } } = this.props;
        if (!power) {
            return 0
        }
        else if (typeExplosion === 'Наземний') {
            if (+power < 5) {
                return 0
            }
            else if ((+power >= 5 && +power < 10) && wind <= 10) {
                return 1.4
            }
            else if ((+power >= 10 && +power < 20) && wind <= 10) {
                return 2.6
            }
            else if ((+power >= 20 && +power < 50) && wind <= 10) {
                return 3.5
            }
            else if ((+power >= 50 && +power < 100) && wind <= 25) {
                return ((-0.222 * Math.log(wind) + 1.7156) * (1.4427 * Math.log(+power) - 0.2439)).toFixed(2)
            }
            else if ((+power >= 100 && +power < 200) && wind <= 25) {
                return ((-0.614 * Math.log(wind) + 2.976) * (1.4427 * Math.log(+power) - 0.2439)).toFixed(2)
            }
            else if ((+power >= 200 && +power < 500) && wind <= 50) {
                return ((-0.147 * Math.log(wind) + 1.3796) * (10.106 * Math.log(+power) - 36.722)).toFixed(2)
            }
            else if (+power >= 500 && +power <= 1000) {
                return ((-0.207 * Math.log(wind) + 1.5486) * (10.106 * Math.log(+power) - 36.722)).toFixed(2)
            }
            else if (+power > 1000 && +power < 2000) {
                return ((-0.207 * Math.log(wind) + 1.5486) * (44.337 * Math.log(+power) - 291)).toFixed(2)
            }
            else if (+power >= 2000 && +power <= 10000) {
                return ((-0.196 * Math.log(wind) + 1.6657) * (44.337 * Math.log(+power) - 291)).toFixed(2)
            }
            else if (+power > 10000) {
                return (((0.0729 * wind / 3.6) + 1.0619) * 0.4541 * Math.pow(+power, 0.5938)).toFixed(2)
            }
            else {
                return 0
            }
        }
        else if (typeExplosion === 'Повітряний' && power > 10000) {
            return (((0.0729 * wind / 3.6) + 1.0619) * 0.0127 * Math.pow(+power, 0.8984)).toFixed(2)
        }
        else {
            return 0
        }
    }

    widthG() {
        const { dataExplosion: { typeExplosion, power, wind } } = this.props;
        if (!power) {
            return 0
        }
        else if (typeExplosion === 'Наземний') {
            if (+power < 5) {
                return 0
            }
            else if ((+power >= 5 && +power < 10) && wind <= 10) {
                return 0.9
            }
            else if ((+power >= 10 && +power < 20) && wind <= 10) {
                return 2.0
            }
            else if ((+power >= 20 && +power < 50) && wind <= 10) {
                return 2.6
            }
            else if ((+power >= 50 && +power < 100) && wind <= 25) {
                return ((-1.264 * Math.log(wind) + 5.0676) * (1.5148 * Math.log(+power) - 4.0427)).toFixed(2)
            }
            else if ((+power >= 100 && +power < 200) && wind <= 25) {
                return ((-0.941 * Math.log(wind) + 4.0284) * (1.5148 * Math.log(+power) - 4.0427)).toFixed(2)
            }
            else if ((+power >= 200 && +power < 500) && wind <= 50) {
                return ((-0.717 * Math.log(wind) + 3.3383) * (1.6565 * Math.log(+power) - 4.5716)).toFixed(2)
            }
            else if (+power >= 500 && +power <= 1000) {
                return ((-0.573 * Math.log(wind) + 2.8697) * (1.6565 * Math.log(+power) - 4.5716)).toFixed(2)
            }
            else if (+power > 1000 && +power < 2000) {
                return ((-0.573 * Math.log(wind) + 2.8697) * (4.939 * Math.log(+power) - 28.699)).toFixed(2)
            }
            else if (+power >= 2000 && +power <= 10000) {
                return ((-0.402 * Math.log(wind) + 2.3013) * (4.939 * Math.log(+power) - 28.699)).toFixed(2)
            }
            else if (+power > 10000) {
                return (0.1547 * Math.pow(+power, 0.553)).toFixed(2)
            }
            else {
                return 0
            }
        }
        else if (typeExplosion === 'Повітряний' && power > 10000) {
            return (0.008 * Math.pow(+power, 0.8125)).toFixed(2)
        }
        else {
            return 0
        }
    }

    cloudA() {
        const { lat, lng, directionWind } = this.props;
        let result = [];
        let latOne;
        let lngOne;
        let latStepOne;
        let lngStepOne;
        let latStepTwo;
        let lngStepTwo;
        let thermalRadiation33 = this.thermalRadiation3();
        let widthA = this.widthA() / 2;
        let depthA = this.depthA();

        if (this.depthA() == 0) {
            latOne = lat;
            lngOne = lng;
            result.push([latOne, lngOne]);
        }
        else {
            latStepOne = lat + ((((+widthA - +thermalRadiation33) * 1000) * Math.cos((360 + directionWind) * 3.1415 / 180)) / (6371000 * 3.1415 / 180));
            lngStepOne = lng + (+widthA - +thermalRadiation33) * 1000 * Math.sin((360 + directionWind) * 3.1415 / 180) / Math.cos(lat * 3.1415 / 180) / (6371000 * 3.1415 / 180);
            latStepTwo = lat + ((((+depthA - (+widthA / 6)) * 1000) * Math.cos((360 + directionWind) * 3.1415 / 180)) / (6371000 * 3.1415 / 180));
            lngStepTwo = lng + (+depthA - (+widthA / 6)) * 1000 * Math.sin((360 + directionWind) * 3.1415 / 180) / Math.cos(lat * 3.1415 / 180) / (6371000 * 3.1415 / 180);

            for (let i = - 90; i <= 90; i++) {
                latOne = latStepTwo + (((+widthA / 6) * 1000 * Math.cos((i + directionWind) * 3.1415 / 180)) / (6371000 * 3.1415 / 180));
                lngOne = lngStepTwo + ((+widthA / 6) * 1000 * Math.sin((i + directionWind) * 3.1415 / 180) / Math.cos(lat * 3.1415 / 180) / (6371000 * 3.1415 / 180));
                result.push([latOne, lngOne]);
            }

            for (let i = 90; i <= 270; i++) {
                latOne = latStepOne + (((+widthA) * 1000 * Math.cos((i + directionWind) * 3.1415 / 180)) / (6371000 * 3.1415 / 180));
                lngOne = lngStepOne + ((+widthA) * 1000 * Math.sin((i + directionWind) * 3.1415 / 180) / Math.cos(lat * 3.1415 / 180) / (6371000 * 3.1415 / 180));
                result.push([latOne, lngOne]);
            }
        }
        return result;
    }
    cloudB() {
        const { lat, lng, directionWind } = this.props;
        let result = [];
        let latOne;
        let lngOne;
        let latStepOne;
        let lngStepOne;
        let latStepTwo;
        let lngStepTwo;
        let overpressure5 = this.overpressure5();
        let widthB = this.widthB() / 2;
        let depthB = this.depthB();

        if (this.depthB() == 0) {
            latOne = lat;
            lngOne = lng;
            result.push([latOne, lngOne]);
        }
        else {
            latStepOne = lat + ((((+widthB - +overpressure5) * 1000) * Math.cos((360 + directionWind) * 3.1415 / 180)) / (6371000 * 3.1415 / 180));
            lngStepOne = lng + (+widthB - +overpressure5) * 1000 * Math.sin((360 + directionWind) * 3.1415 / 180) / Math.cos(lat * 3.1415 / 180) / (6371000 * 3.1415 / 180);
            latStepTwo = lat + ((((+depthB - (+widthB / 6)) * 1000) * Math.cos((360 + directionWind) * 3.1415 / 180)) / (6371000 * 3.1415 / 180));
            lngStepTwo = lng + (+depthB - (+widthB / 6)) * 1000 * Math.sin((360 + directionWind) * 3.1415 / 180) / Math.cos(lat * 3.1415 / 180) / (6371000 * 3.1415 / 180);

            for (let i = - 90; i <= 90; i++) {
                latOne = latStepTwo + (((+widthB / 6) * 1000 * Math.cos((i + directionWind) * 3.1415 / 180)) / (6371000 * 3.1415 / 180));
                lngOne = lngStepTwo + ((+widthB / 6) * 1000 * Math.sin((i + directionWind) * 3.1415 / 180) / Math.cos(lat * 3.1415 / 180) / (6371000 * 3.1415 / 180));
                result.push([latOne, lngOne]);
            }

            for (let i = 90; i <= 270; i++) {
                latOne = latStepOne + (((+widthB) * 1000 * Math.cos((i + directionWind) * 3.1415 / 180)) / (6371000 * 3.1415 / 180));
                lngOne = lngStepOne + ((+widthB) * 1000 * Math.sin((i + directionWind) * 3.1415 / 180) / Math.cos(lat * 3.1415 / 180) / (6371000 * 3.1415 / 180));
                result.push([latOne, lngOne]);
            }
        }
        return result;
    }
    cloudV() {
        const { lat, lng, directionWind } = this.props;
        let result = [];
        let latOne;
        let lngOne;
        let latStepOne;
        let lngStepOne;
        let latStepTwo;
        let lngStepTwo;
        let overpressure10 = this.overpressure10();
        let widthV = this.widthV() / 2;
        let depthV = this.depthV();

        if (this.depthV() == 0) {
            latOne = lat;
            lngOne = lng;
            result.push([latOne, lngOne]);
        }
        else {
            latStepOne = lat + ((((+widthV - +overpressure10) * 1000) * Math.cos((360 + directionWind) * 3.1415 / 180)) / (6371000 * 3.1415 / 180));
            lngStepOne = lng + (+widthV - +overpressure10) * 1000 * Math.sin((360 + directionWind) * 3.1415 / 180) / Math.cos(lat * 3.1415 / 180) / (6371000 * 3.1415 / 180);
            latStepTwo = lat + ((((+depthV - (+widthV / 6)) * 1000) * Math.cos((360 + directionWind) * 3.1415 / 180)) / (6371000 * 3.1415 / 180));
            lngStepTwo = lng + (+depthV - (+widthV / 6)) * 1000 * Math.sin((360 + directionWind) * 3.1415 / 180) / Math.cos(lat * 3.1415 / 180) / (6371000 * 3.1415 / 180);

            for (let i = - 90; i <= 90; i++) {
                latOne = latStepTwo + (((+widthV / 6) * 1000 * Math.cos((i + directionWind) * 3.1415 / 180)) / (6371000 * 3.1415 / 180));
                lngOne = lngStepTwo + ((+widthV / 6) * 1000 * Math.sin((i + directionWind) * 3.1415 / 180) / Math.cos(lat * 3.1415 / 180) / (6371000 * 3.1415 / 180));
                result.push([latOne, lngOne]);
            }

            for (let i = 90; i <= 270; i++) {
                latOne = latStepOne + (((+widthV) * 1000 * Math.cos((i + directionWind) * 3.1415 / 180)) / (6371000 * 3.1415 / 180));
                lngOne = lngStepOne + ((+widthV) * 1000 * Math.sin((i + directionWind) * 3.1415 / 180) / Math.cos(lat * 3.1415 / 180) / (6371000 * 3.1415 / 180));
                result.push([latOne, lngOne]);
            }
        }
        return result;
    }
    cloudG() {
        const { lat, lng, directionWind } = this.props;
        let result = [];
        let latOne;
        let lngOne;
        let latStepOne;
        let lngStepOne;
        let latStepTwo;
        let lngStepTwo;
        let fireBall = this.fireBall();
        let widthG = this.widthG() / 2;
        let depthG = this.depthG();

        if (this.depthG() == 0) {
            latOne = lat;
            lngOne = lng;
            result.push([latOne, lngOne]);
        }
        else {
            latStepOne = lat + ((((+widthG - +fireBall) * 1000) * Math.cos((360 + directionWind) * 3.1415 / 180)) / (6371000 * 3.1415 / 180));
            lngStepOne = lng + (+widthG - +fireBall) * 1000 * Math.sin((360 + directionWind) * 3.1415 / 180) / Math.cos(lat * 3.1415 / 180) / (6371000 * 3.1415 / 180);
            latStepTwo = lat + ((((+depthG - (+widthG / 2)) * 1000) * Math.cos((360 + directionWind) * 3.1415 / 180)) / (6371000 * 3.1415 / 180));
            lngStepTwo = lng + (+depthG - (+widthG / 2)) * 1000 * Math.sin((360 + directionWind) * 3.1415 / 180) / Math.cos(lat * 3.1415 / 180) / (6371000 * 3.1415 / 180);

            for (let i = - 90; i <= 90; i++) {
                latOne = latStepTwo + (((+widthG / 2) * 1000 * Math.cos((i + directionWind) * 3.1415 / 180)) / (6371000 * 3.1415 / 180));
                lngOne = lngStepTwo + ((+widthG / 2) * 1000 * Math.sin((i + directionWind) * 3.1415 / 180) / Math.cos(lat * 3.1415 / 180) / (6371000 * 3.1415 / 180));
                result.push([latOne, lngOne]);
            }

            for (let i = 90; i <= 270; i++) {
                latOne = latStepOne + (((+widthG) * 1000 * Math.cos((i + directionWind) * 3.1415 / 180)) / (6371000 * 3.1415 / 180));
                lngOne = lngStepOne + ((+widthG) * 1000 * Math.sin((i + directionWind) * 3.1415 / 180) / Math.cos(lat * 3.1415 / 180) / (6371000 * 3.1415 / 180));
                result.push([latOne, lngOne]);
            }
        }
        return result;
    }
}