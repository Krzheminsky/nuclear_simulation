
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
            return (((0.0729 * wind) + 1.0619) * 27.223 * Math.pow(+power, 0.305)).toFixed(2)
        }
        else if (power >= 300) {
            return (((0.0729 * wind) + 1.0619) * 5.1564 * Math.pow(+power, 0.4474)).toFixed(2)
        }
        else {
            return 0
        }
    }

    widthA() {
        const { dataExplosion: { typeExplosion, power } } = this.props;
        if (!power) {
            return 0
        }
        else if (typeExplosion === 'Наземний') {
            return (3.6303 * Math.pow(+power, 0.4283)).toFixed(2)
        }
        else if (power >= 300) {
            return (0.5195 * Math.pow(+power, 0.5816)).toFixed(2)
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
            return (((0.0729 * wind) + 1.0619) * 16.216 * Math.pow(+power, 0.3317)).toFixed(2)
        }
        else if (power >= 300) {
            return (((0.0729 * wind) + 1.0619) * 2.6167 * Math.pow(+power, 0.4832)).toFixed(2)
        }
        else {
            return 0
        }
    }

    widthB() {
        const { dataExplosion: { typeExplosion, power } } = this.props;
        if (!power) {
            return 0
        }
        else if (typeExplosion === 'Наземний') {
            return (2.0379 * Math.pow(+power, 0.456)).toFixed(2)
        }
        else if (power >= 300) {
            return (0.2335 * Math.pow(+power, 0.6296)).toFixed(2)
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
            return (((0.0729 * wind) + 1.0619) * 5.5759 * Math.pow(+power, 0.4095)).toFixed(2)
        }
        else if (power >= 300) {
            return (((0.0729 * wind) + 1.0619) * 0.6399 * Math.pow(+power, 0.5894)).toFixed(2)
        }
        else {
            return 0
        }
    }

    widthV() {
        const { dataExplosion: { typeExplosion, power } } = this.props;
        if (!power) {
            return 0
        }
        else if (typeExplosion === 'Наземний') {
            return (0.5236 * Math.pow(+power, 0.5547)).toFixed(2)
        }
        else if (power >= 300) {
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
            return (((0.0729 * wind) + 1.0619) * 0.4541 * Math.pow(+power, 0.5938)).toFixed(2)
        }
        else if (power >= 300) {
            return (((0.0729 * wind) + 1.0619) * 0.0127 * Math.pow(+power, 0.8984)).toFixed(2)
        }
        else {
            return 0
        }
    }

    widthG() {
        const { dataExplosion: { typeExplosion, power } } = this.props;
        if (!power) {
            return 0
        }
        else if (typeExplosion === 'Наземний') {
            return (0.1547 * Math.pow(+power, 0.553)).toFixed(2)
        }
        else if (power >= 300) {
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