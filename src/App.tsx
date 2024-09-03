import Header from "./components/Header/Header";
import './App.scss';
import PageSectionWrapper from "./components/PageSectionWrapper/PageSectionWrapper";
import {Button, Col, Row} from "react-bootstrap";
import castle1 from './assets/img/castle1.png'
import city from './assets/img/city.jpeg'
import MyCardComponent from "./components/MyCardComponent/MyCardComponent";
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {

    return (
        <>
            <Header/>
            <PageSectionWrapper id={"team"}>
                <Row>
                    <Col xs={12} md={8} lg={8} className={"sb-items-grid__content"}>
                        <h5 className="sb-text-image__content-title">Наша команда</h5>
                        <p className="fs-2">Індивідуальний досвід для кожного мандрівни
                        </p>
                    </Col>
                </Row>
            </PageSectionWrapper>

            <PageSectionWrapper id={"about"}>
                <Row className={"align-items-center gx-5"}>
                    <Col lg={7}>
                        <h5 className="sb-text-image__content-title">ПРО НАС
                        </h5>
                        <div className="text_container fs-5">
                            <p></p>
                            <p>Туристично-інформаційний центр&nbsp;створювався&nbsp;з думкою&nbsp;про гостей&nbsp;нашого
                                міста&nbsp;для
                                того, щоб&nbsp;зробити їх перебування в&nbsp;громаді&nbsp;максимально комфортним
                                і&nbsp;цікавим.</p>
                            <p>Ми&nbsp;з радістю надамо&nbsp;вам необхідну інформацію&nbsp;про&nbsp;визначні
                                пам’ятки,&nbsp;інфраструктуру,&nbsp;культурні
                                та розважальні&nbsp;заклади,&nbsp;готельно-рекреаційну&nbsp;базу&nbsp;нашого
                                міста,&nbsp;заходи
                                та&nbsp;фестивалі, а&nbsp;також про багато іншого.</p>
                            <p>Туристично-інформаційний центр є міським комунальним підприємством і надає
                                послуги&nbsp;екскурсійного
                                обслуговування&nbsp;у супроводі гідів-екскурсоводів.</p>
                            <p>Основним завданням нашого центру є інформаційна підтримка та проведення екскурсій, тому
                                для нас
                                дуже важливо, щоб у Вас залишилися найкращі враження про нашу гостинну громаду.</p>
                        </div>
                        <Button variant="outline-secondary" size={"lg"} className={"border-2 rounded-0"}>Наші
                            контакти</Button>
                    </Col>
                    <Col lg={5}>
                        <img src={castle1} alt=""/>
                    </Col>
                </Row>
            </PageSectionWrapper>
            <PageSectionWrapper id={"services"}>
                <Row>
                    <Col xs={12} md={8} lg={8} className={"sb-items-grid__content"}>
                        <h5 className="sb-text-image__content-title">Що відвідати, де перекусити та де зупинитись</h5>
                        <p className="fs-2">Індивідуальний досвід для кожного мандрівника</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <MyCardComponent/>
                    </Col> <Col md={4}>
                    <MyCardComponent/>
                </Col> <Col md={4}>
                    <MyCardComponent/>
                </Col>
                </Row>

            </PageSectionWrapper>
            <PageSectionWrapper id={"products-overview"}>
                <Row>
                    <Col xs={12} md={8} lg={8} className={"sb-items-grid__content"}>
                        <h5 className="sb-text-image__content-title">Наші послуги</h5>
                        <p className="fs-2">Індивідуальний досвід для кожного мандрівника</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <MyCardComponent typeView={2}/>
                    </Col> <Col md={4}>
                    <MyCardComponent typeView={2}/>
                </Col> <Col md={4}>
                    <MyCardComponent typeView={2}/>
                </Col>
                </Row>
            </PageSectionWrapper>
            <PageSectionWrapper id={"image-carousel"}>
                <Row className={"gx-5 align-items-center"}>
                    <Col xs={12} md={"6"}>

                        <h5 className="sb-text-image__content-title">
                            Сувеніри з Теребовлі
                            <br/>
                            Символіка нашого міста
                            <br/>
                            рЕЧІ З історіею</h5>
                        <p className="fs-2">
                            We work collaboratively with our clients to uncover the most effective and efficient way to
                            achieve their needs.
                        </p>

                    </Col>
                    <Col xs={12} md={"6"}>
                        <img src={city} alt=""/>
                    </Col>

                </Row>

            </PageSectionWrapper>
            <PageSectionWrapper id={"contact"}>
                <Col md={6}>

                    <div className="contact-full__location">
                        <div>

                            <div className="contact-details__row contact-details__contact">
                                <h6 className="contact-details__title fw-bold">Запитайте у нас</h6>
                                <div className="contact-details__phone">

                                    <a href="tel:+380688180278" className="d-flex align-items-center">
                                        <i className="bi bi-telephone"></i>
                                        <span>+380 68 818 0278</span>
                                    </a>
                                </div>
                                <div className="contact-details__email">
                                    <a href="mailto:tic.terebovlia@gmail.com"
                                       className="d-flex align-items-center">
                                        <i className="bi bi-envelope"></i>

                                        <span>tic.terebovlia@gmail.com</span>
                                    </a>
                                </div>
                                <ul className="social-icons list-inline">
                                    <li className="list-inline-item">
                                        <a href="https://www.facebook.com/terebovlia.tic"
                                           target="_blank" rel="noreferrer">
                                            <i className="bi bi-facebook"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="https://www.instagram.com/tourcenter.terebovlia"
                                           target="_blank" rel="noreferrer">
                                            <i className="bi bi-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="contact-details__row contact-details__location">
                                <h6 className="fw-bold">Location</h6>
                                <p className="adr contact-details__address">
                                    <a href="https://www.google.com/maps/place/вул.+Шевченка,+8,+Теребовля"
                                       target="_blank" rel="noreferrer"
                                       className="d-flex align-items-center">
                                        <i className="bi bi-geo-alt-fill"></i>

                                        <span> вул. Шевченка, 8, Теребовля</span>
                                    </a>
                                </p>
                            </div>

                            <div className="contact-details__row contact-details__hours sb-hours-wrapper">
                                <h6 className="contact-details__title fw-bold">Hours</h6>
                                <ol aria-label="Working hours" className="hours-list list-unstyled">
                                    <li className="hours-list__item d-flex">
                                        <span className="hours-list__day">Monday</span>
                                        <span className="ms-auto">9:00am – 5:00pm</span>
                                    </li>
                                    <li className="hours-list__item d-flex">
                                        <span className="hours-list__day">Tuesday</span>
                                        <span className="ms-auto">9:00am – 5:00pm</span>
                                    </li>
                                    <li className="hours-list__item d-flex">
                                        <span className="hours-list__day">Wednesday</span>
                                        <span className="ms-auto">9:00am – 5:00pm</span>
                                    </li>
                                    <li className="hours-list__item d-flex">
                                        <span className="hours-list__day">Thursday</span>
                                        <span className="ms-auto">9:00am – 5:00pm</span>
                                    </li>
                                    <li className="hours-list__item d-flex">
                                        <span className="hours-list__day">Friday</span>
                                        <span className="ms-auto">9:00am – 5:00pm</span>
                                    </li>
                                    <li className="hours-list__item d-flex">
                                        <span className="hours-list__day">Saturday</span>
                                        <span className="ms-auto">10:00am – 4:00pm</span>
                                    </li>
                                    <li className="hours-list__item d-flex">
                                        <span className="hours-list__day">Sunday</span>
                                        <span className="ms-auto">Closed</span>
                                    </li>
                                </ol>
                            </div>

                        </div>
                    </div>


                </Col>
            </PageSectionWrapper>
        </>
    )
}

export default App
