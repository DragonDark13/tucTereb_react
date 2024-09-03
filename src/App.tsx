import Header from "./components/Header/Header";
import './App.scss';
import PageSectionWrapper from "./components/PageSectionWrapper/PageSectionWrapper";
import {Button, Col, Nav, Navbar, Row, Stack} from "react-bootstrap";
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
            <footer>
                <PageSectionWrapper id={"footer"}>
                    <Row className={"align-items-center"}>
                        <Col xs={12} md={8}>
                            <Navbar>
                                <Navbar.Brand href="#home">tuctereb</Navbar.Brand>
                            </Navbar>

                            <Navbar className={"footer_navbar pb-0 pt-0"}>
                                <Nav className="me-auto mb-2 mb-lg-0">
                                    <Nav.Link href="#home">НАШІ ПОСЛУГИ</Nav.Link>
                                    <Nav.Link href="#features">Schedule appointment</Nav.Link>
                                    <Nav.Link href="#pricing">Complete intake</Nav.Link>
                                    <Nav.Link href="#pricing">Contact</Nav.Link>
                                </Nav>
                            </Navbar>


                        </Col>
                        <Col xs={12} md={4} className={"sb-footer__social justify-content-end d-flex"}>

                            <Stack direction="horizontal" gap={3} className={"social-icons"}>
                                <a
                                    href="https://www.facebook.com/terebovlia.tic" rel="noreferrer"
                                    target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                         fill="currentColor"
                                         className="bi bi-facebook" viewBox="0 0 16 16">
                                        <path
                                            d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                                    </svg>
                                </a>
                                <a
                                    aria-label="Instagram" href="https://www.instagram.com/tourcenter.terebovlia"
                                    rel="noreferrer" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                         fill="currentColor"
                                         className="bi bi-instagram" viewBox="0 0 16 16">
                                        <path
                                            d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 00-1.417.923A3.9 3.9 0 00.42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 001.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 00-.923-1.417A3.9 3.9 0 0013.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 01-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 01-.92-.598 2.5 2.5 0 01-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 100 1.92.96.96 0 000-1.92m-4.27 1.122a4.109 4.109 0 100 8.217 4.109 4.109 0 000-8.217m0 1.441a2.667 2.667 0 110 5.334 2.667 2.667 0 010-5.334"/>
                                    </svg>
                                </a>
                            </Stack>

                        </Col>
                    </Row>
                </PageSectionWrapper>
            </footer>
        </>
    )
}

export default App
