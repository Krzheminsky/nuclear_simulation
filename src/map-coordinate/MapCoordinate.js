import { MapContainer, Marker, Polygon, Popup, Circle, TileLayer, useMapEvents, LayersControl, LayerGroup, FeatureGroup } from 'react-leaflet';
import { EditControl } from "react-leaflet-draw"
import Calculation from '../calculation/Calculation';
import React, { Component } from "react";
import "./MapCoordinate.css";
import L from 'leaflet';
import { Container, Row, Col } from 'react-bootstrap';
import "leaflet-draw/dist/leaflet.draw.css";
import 'leaflet-easyprint';
import MapPrint from "./MapPrint";
import ImgYellow from "../img/marker_yellow.svg";
import ImgRed from "../img/marker_red.svg";
import { flushSync } from 'react-dom';

const { BaseLayer } = LayersControl;

L.Draw.Event.MARKERCONTEXT = 'draw:markercontext'
L.Draw.Polygon.prototype._onTouch = L.Util.falseFn;

L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
    iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-icon.png",
    shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/images/marker-shadow.png"
})

export default class MapCoordinate extends Component {

    state = {
        zoom: 6,
        idPoly: '',
        lat: 49.16,
        lng: 34.41,
        primDepth: 1,
        position: null,
        areaPoligon: 0,
        latObject: 49.16,
        lngObject: 34.41,
        lengthPolyline: 0,
        positionObject: null,
    }

    render() {
        const {
            lat,
            lng,
            zoom,
            position,
            latObject,
            lngObject,
            areaPoligon,
            lengthPolyline,
            positionObject, } = this.state;


        const { data } = this.props;
        const pos = [lat, lng]

        let obj = new Calculation({ lat, lng, ...data })

        let depthA = obj.depthA();
        let widthA = obj.widthA();
        let depthB = obj.depthB();
        let widthB = obj.widthB();
        let depthV = obj.depthV();
        let widthV = obj.widthV();
        let depthG = obj.depthG();
        let widthG = obj.widthG();
        let cloudA = obj.cloudA();
        let cloudB = obj.cloudB();
        let cloudV = obj.cloudV();
        let cloudG = obj.cloudG();
        let fireBall = obj.fireBall();
        let overpressure20 = obj.overpressure20();
        let overpressure10 = obj.overpressure10();
        let overpressure5 = obj.overpressure5();
        let overpressure1 = obj.overpressure1();
        let thermalRadiation1 = obj.thermalRadiation1();
        let thermalRadiation2 = obj.thermalRadiation2();
        let thermalRadiation3 = obj.thermalRadiation3();
        let ionizingКadiation500 = obj.ionizingКadiation500();
        let ionizingКadiation100 = obj.ionizingКadiation100();

        const myIcon = L.icon({
            iconUrl: ImgYellow,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],

        });

        const myIconTwo = L.icon({
            iconUrl: ImgRed,
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],

        });

        let LocationMarker = () => {
            const myIcon = L.icon({
                iconUrl: ImgYellow,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],

            });
            const map = useMapEvents({
                click: (e) => {
                    flushSync(() => {
                        this.setState({
                            lat: e.latlng.lat,
                            lng: e.latlng.lng,
                            position: e.latlng,
                        })
                    })
                },
                locationfound: (e) => {
                },
            })
            return position === null ? null : (

                < Marker position={position} icon={myIcon}>
                    <Popup>Потужність: {data.dataExplosion.power} кілотонн<br />
                        Координати:<br /> {lat.toFixed(4)}, {lng.toFixed(4)}
                    </Popup>
                </Marker >
            )
        }

        let LocationMarkerObject = () => {
            const myIconTwo = L.icon({
                iconUrl: ImgRed,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],

            });
            const map1 = useMapEvents({
                contextmenu: (e) => {
                    this.setState({
                        latObject: e.latlng.lat,
                        lngObject: e.latlng.lng,
                        positionObject: e.latlng,
                    })
                },
                locationfound: (e) => {
                },
            })
            return positionObject === null ? null : (

                < Marker position={positionObject} icon={myIconTwo} >
                    <Popup> !Лівою кнопкою миші!, <br />
                        Координати:<br /> {latObject.toFixed(4)}, {lngObject.toFixed(4)}
                    </Popup>
                </Marker >
            )
        }

        return (
            <div className='map-container'>
                <Container fluid>
                    <Row>
                        <Col>
                            <MapContainer center={pos} zoom={zoom} >
                                <LayersControl position="topright">
                                    <BaseLayer checked name='OpenStreetMap'>
                                        <TileLayer
                                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        />
                                    </BaseLayer>
                                    <BaseLayer name='GoogleSatellite'>
                                        <TileLayer
                                            attribution='&copy; <a href="https://earth.google.com">Google</a> contributors'
                                            url="https://mt.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"
                                        />
                                    </BaseLayer>
                                    <MapPrint position="bottomleft" sizeModes={['Current', 'A4Portrait', 'A4Landscape']} hideControlContainer={false} title="Друк" />
                                    <MapPrint position="bottomleft" sizeModes={['Current', 'A4Portrait', 'A4Landscape']} hideControlContainer={false} title="Експорт до PNG" exportOnly />

                                    <FeatureGroup>
                                        <EditControl
                                            position="topleft"
                                            onCreated={(e) => {
                                                if (e.layerType == "rectangle" || e.layerType == "polygon") {
                                                    let seeArea = (L.GeometryUtil.geodesicArea(e.layer._latlngs[0])) / 1000000;
                                                    this.setState({ areaPoligon: seeArea, idPoly: e.layer._leaflet_id })
                                                }
                                                if (e.layerType == "polyline") {
                                                    let mDistanse = 0,
                                                        length = e.layer._latlngs.length;
                                                    for (let i = 1; i < length; i++) {
                                                        mDistanse += e.layer._latlngs[i].distanceTo(e.layer._latlngs[i - 1]);
                                                    }
                                                    this.setState({ lengthPolyline: mDistanse / 1000, idPoly: e.layer._leaflet_id })
                                                }
                                            }}

                                            onEdited={(e) => {
                                                let seeArea = (L.GeometryUtil.geodesicArea(e.layers._layers[this.state.idPoly]._latlngs[0])) / 1000000;
                                                this.setState({ areaPoligon: seeArea })

                                                let mDistanse = 0,
                                                    length = e.layers._layers[this.state.idPoly]._latlngs.length;
                                                for (let i = 1; i < length; i++) {
                                                    mDistanse += e.layers._layers[this.state.idPoly]._latlngs[i].distanceTo(e.layers._layers[this.state.idPoly]._latlngs[i - 1]);
                                                }
                                                this.setState({ lengthPolyline: mDistanse / 1000 })
                                                console.log('length', e.layers._layers[this.state.idPoly])

                                            }}

                                            draw={{
                                                // rectangle: {
                                                //     showArea: true,
                                                //     metric: true,
                                                // },
                                                circle: false,
                                                circlemarker: false,
                                                marker: false,
                                                rectangle: false,

                                                polyline: true,
                                                polygon: {
                                                    showArea: true,
                                                    showLength: true,
                                                    metric: true,
                                                    repeatMode: true
                                                },
                                            }}

                                            edit={{

                                                edit: false
                                            }}
                                        />
                                    </FeatureGroup>
                                    <LayersControl.Overlay checked name="Радіоактивне зараження місцевості">
                                        <LayerGroup>

                                            <Polygon pathOptions={{ color: "#f4fc03" }} positions={cloudA} >
                                                <Popup>
                                                    Зона помірного зараження (зона А),<br /> глибина: {depthA}  км,<br /> ширина: {widthA}  км,<br /> площа: {(((1.13 * widthA) * depthA / 2) + Math.pow((3.1415 * widthA), 2)).toFixed(2)} км<sup>2</sup>
                                                </Popup>
                                            </Polygon>
                                            <Polygon pathOptions={{ color: "#fcc603" }} positions={cloudB} >
                                                <Popup>
                                                    Зона сильного зараження (зона Б),<br /> глибина: {depthB}  км,<br /> ширина: {widthB}  км,<br /> площа: {(((1.13 * widthB) * depthB / 2) + Math.pow((3.1415 * widthB), 2)).toFixed(2)} км<sup>2</sup>
                                                </Popup>
                                            </Polygon>
                                            <Polygon pathOptions={{ color: "#fc9803" }} positions={cloudV} >
                                                <Popup>
                                                    Зона небезпечного зараження (зона В),<br /> глибина: {depthV}  км,<br /> ширина: {widthV}  км,<br /> площа: {(((1.13 * widthV) * depthV / 2) + Math.pow((3.1415 * widthV), 2)).toFixed(2)} км<sup>2</sup>
                                                </Popup>
                                            </Polygon>

                                            <Polygon pathOptions={{ color: "#bd5308" }} positions={cloudG} >
                                                <Popup>
                                                    Зона надзвичайно небезпечного зараження (зона Г),<br /> глибина: {depthG}  км,<br /> ширина: {widthG}  км,<br /> площа: {(((1.13 * widthG) * depthG / 2) + Math.pow((3.1415 * widthG), 2)).toFixed(2)} км<sup>2</sup>
                                                </Popup>
                                            </Polygon>
                                        </LayerGroup>
                                    </LayersControl.Overlay>
                                    <LayersControl.Overlay checked name="Ударна хвиля">
                                        <LayerGroup>
                                            <Circle center={pos} pathOptions={{ color: "#db8746" }} radius={overpressure1 * 1000} >
                                                <Popup>
                                                    Ураження легкої ступіні, <br />
                                                    радіус: {overpressure1} км,<br /> площа: {(overpressure1 * overpressure1 * 3.1415).toFixed(2)} км<sup>2</sup>
                                                </Popup>
                                            </Circle>
                                            <Circle center={pos} pathOptions={{ color: "#db8746" }} radius={overpressure5 * 1000} >
                                                <Popup>
                                                    Ураження середньої ступіні, <br />
                                                    радіус: {overpressure5} км,<br /> площа: {(overpressure5 * overpressure5 * 3.1415).toFixed(2)} км<sup>2</sup>
                                                </Popup>
                                            </Circle>
                                            <Circle center={pos} pathOptions={{ color: "#f56b02" }} radius={overpressure10 * 1000} >
                                                <Popup>
                                                    Ураження важкої ступіні, <br />
                                                    радіус: {overpressure10} км,<br /> площа: {(overpressure10 * overpressure10 * 3.1415).toFixed(2)} км<sup>2</sup>
                                                </Popup>
                                            </Circle>
                                            <Circle center={pos} pathOptions={{ color: "#fc3d03" }} radius={overpressure20 * 1000} >
                                                <Popup>
                                                    Ураження вкрай важкої ступіні, <br />
                                                    радіус: {overpressure20} км,<br /> площа: {(overpressure20 * overpressure20 * 3.1415).toFixed(2)} км<sup>2</sup>
                                                </Popup>
                                            </Circle>
                                            <Circle center={pos} pathOptions={{ color: "red" }} radius={fireBall * 1000} >
                                                <Popup>
                                                    Вогняна куля, <br />
                                                    радіус: {fireBall} км,<br /> площа: {(fireBall * fireBall * 3.1415).toFixed(2)} км<sup>2</sup>
                                                </Popup>
                                            </Circle>
                                        </LayerGroup>
                                    </LayersControl.Overlay>
                                    <LayersControl.Overlay checked name="Світлове випромінювання">
                                        <LayerGroup>
                                            <Circle center={pos} pathOptions={{ color: "#f59a9a" }} radius={thermalRadiation1 * 1000} >
                                                <Popup>
                                                    Опіки І ступіні, <br />
                                                    радіус: {thermalRadiation1} км,<br /> площа: {(thermalRadiation1 * thermalRadiation1 * 3.1415).toFixed(2)} км<sup>2</sup>
                                                </Popup>
                                            </Circle>
                                            <Circle center={pos} pathOptions={{ color: "#f54242" }} radius={thermalRadiation2 * 1000} >
                                                <Popup>
                                                    Опіки ІІ ступіні, <br />
                                                    радіус: {thermalRadiation2} км,<br /> площа: {(thermalRadiation2 * thermalRadiation2 * 3.1415).toFixed(2)} км<sup>2</sup>
                                                </Popup>
                                            </Circle>
                                            <Circle center={pos} pathOptions={{ color: "#910404" }} radius={thermalRadiation3 * 1000} >
                                                <Popup>
                                                    Опіки ІІІ ступіні, <br />
                                                    радіус: {thermalRadiation3} км,<br /> площа: {(thermalRadiation3 * thermalRadiation3 * 3.1415).toFixed(2)} км<sup>2</sup>
                                                </Popup>
                                            </Circle>
                                        </LayerGroup>
                                    </LayersControl.Overlay>
                                    <LayersControl.Overlay checked name="Проникаюча радіація">
                                        <LayerGroup>
                                            <Circle center={pos} pathOptions={{ color: "#34dbeb" }} radius={ionizingКadiation100 * 1000} >
                                                <Popup>
                                                    Випромінювання 100 бер, <br />
                                                    радіус: {ionizingКadiation100} км,<br /> площа: {(ionizingКadiation100 * ionizingКadiation100 * 3.1415).toFixed(2)} км<sup>2</sup>
                                                </Popup>
                                            </Circle>
                                            <Circle center={pos} pathOptions={{ color: "#3480eb" }} radius={ionizingКadiation500 * 1000} >
                                                <Popup>
                                                    Випромінювання 500 бер, <br />
                                                    радіус: {ionizingКadiation500} км,<br /> площа: {(ionizingКadiation500 * ionizingКadiation500 * 3.1415).toFixed(2)} км<sup>2</sup>
                                                </Popup>
                                            </Circle>

                                        </LayerGroup>
                                    </LayersControl.Overlay>
                                    <LocationMarker />
                                    <LocationMarkerObject />
                                    <Marker position={pos} icon={myIcon}>
                                        <Popup>
                                            Проведіть моделювання вибуху, <br />виберіть місце застосування тa клікніть лівою кравішою миші.
                                        </Popup>
                                    </Marker>

                                </LayersControl>
                            </MapContainer>
                        </Col>
                    </Row>
                    <Row className='area'>
                        <Col md={2}>
                            Відстань: {lengthPolyline.toFixed(3)} км
                        </Col>
                        <Col md={2}>
                            Площа: {areaPoligon.toFixed(3)} км<sup>2</sup>
                        </Col>
                        <Col md={8}>
                            <h6>
                                * використовуйте інструменти polygon та polyline для визначення відстані та площі (краще - правою клавішою миші)
                            </h6>
                        </Col>
                    </Row>

                </Container>
            </div>
        );
    }
}

