import Head from "next/head";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState } from "react";
import axios from "axios";

import logo from "../public/img/logo.png";
import banner_img from "../public/img/banner_img.png";
import top_service from "../public/img/top_service.png";
import banner_1 from "../public/img/icon/banner_1.svg";
import banner_2 from "../public/img/icon/banner_2.svg";
import banner_3 from "../public/img/icon/banner_3.svg";

export default function Home() {
  const holidays = [
    new Date(20221, 10, 14),
    new Date(2021, 11, 11),
    new Date(2021, 10, 28),
    new Date(2021, 12, 25),
    new Date(2021, 1, 1),
    new Date(2021, 1, 20),
    new Date(2021, 2, 17),
    new Date(2021, 5, 25),
    new Date(2021, 7, 3),
    new Date(2021, 9, 7),
  ];
  const [startDate, setStartDate] = useState(new Date());
  const [name, setName] = useState("");
  const [id_number, setId_number] = useState("");
  const [hour, setHour] = useState("10pm");
  const [type, setType] = useState("male");
  const [completed, setCompleted] = useState(false);

  console.log(name, id_number, hour);
  const Booking = {
    name,
    id_number,
    hour,
    completed,
    date: startDate,
  };
  const onSubmit = async () => {
    const response = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        id_number,
        completed,
        hour,
        date: startDate,
      }),
    });
    const data = await response.json();
    console.log(data);
  };
  return (
    <>
      <header className="main_menu home_menu">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="index.html">
                  <Image src={logo} alt="logo" />
                </a>

                <a className="btn_2 d-none d-lg-block" href="#">
                  HOT LINE- 01159360628
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <section className="banner_part">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-xl-5">
              <div className="banner_text">
                <div className="banner_text_iner">
                  <h5>We are here for your care</h5>
                  <h1>Best Care & Better Doctor</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida.Risus cmodo
                    viverra
                  </p>
                  <a href="#Appointment" className="btn_2">
                    Make an appointment
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="banner_img">
                <Image src={banner_img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="regervation_part section_padding" id="Appointment">
        <div className="container">
          <div className="row align-items-center regervation_content">
            <div className="col-lg-7">
              <div className="regervation_part_iner">
                <form>
                  <h2>Make an Appointment</h2>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail4"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <input
                        type="number"
                        className="form-control"
                        id="inputPassword4"
                        placeholder="ID Number"
                        onChange={(e) => setId_number(e.target.value)}
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <DatePicker
                        wrapperClassName="form-control no-padding-top"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        excludeDates={holidays}
                      />
                    </div>
                    <div className="form-group time_icon col-md-6">
                      <select
                        className="form-control"
                        value={hour}
                        onChange={(e) => setHour(e.target.value)}
                        id="Select2"
                      >
                        <option value="" selected>
                          Time
                        </option>
                        <option value="8 AM TO 10AM">8 AM TO 10AM</option>
                        <option value="10 AM TO 12PM">10 AM TO 12PM</option>
                        <option value="12PM TO 2PM">12PM TO 2PM</option>
                        <option value="2PM TO 4PM">2PM TO 4PM</option>
                        <option value="4PM TO 6PM">4PM TO 6PM</option>
                        <option value="6PM TO 8PM">6PM TO 8PM</option>
                        <option value="4PM TO 10PM">4PM TO 10PM</option>
                        <option value="10PM TO 12PM">10PM TO 12PM</option>
                      </select>
                    </div>
                    <div className="form-group col-md-12">
                      <textarea
                        className="form-control"
                        id="Textarea"
                        rows="4"
                        placeholder="Your Note "
                      ></textarea>
                    </div>
                  </div>
                  <div className="regerv_btn">
                    <a href="#" className="btn_2" onClick={onSubmit}>
                      Make an Appointment
                    </a>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="reservation_img">
                <img
                  src="https://preview.colorlib.com/theme/medisen/img/banner_img.png.webp"
                  alt=""
                  className="reservation_img_iner"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about_us padding_top">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-6 col-lg-6">
              <div className="about_us_img">
                <Image src={top_service} alt="" />
              </div>
            </div>
            <div className="col-md-6 col-lg-5">
              <div className="about_us_text">
                <h2>About us</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua
                  Quis ipsum suspendisse ultrices gravida. Risus cmodo viverra
                  maecenas accumsan lacus vel
                </p>
                <a className="btn_2" href="#">
                  learn more
                </a>
                <div className="banner_item">
                  <div className="single_item">
                    <Image src={banner_1} alt="" />
                    <h5>Emergency</h5>
                  </div>
                  <div className="single_item">
                    <Image src={banner_2} alt="" />
                    <h5>Appointment</h5>
                  </div>
                  <div className="single_item">
                    <Image src={banner_3} alt="" />
                    <h5>Qualfied</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature_part">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="section_tittle text-center">
                <h2>Our services</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-3 col-sm-12">
              <div className="single_feature">
                <div className="single_feature_part">
                  <span className="single_feature_icon">
                    {/* <Image src="img/icon/feature_1.svg" alt="" />*/}
                  </span>
                  <h4>Better Future</h4>
                  <p>
                    Darkness multiply rule Which from without life creature
                    blessed give moveth moveth seas make day which divided our
                    have.
                  </p>
                </div>
              </div>
              <div className="single_feature">
                <div className="single_feature_part">
                  <span className="single_feature_icon">
                    {/*   <Image src="img/icon/feature_2.svg" alt="" /> */}
                  </span>
                  <h4>Better Future</h4>
                  <p>
                    Darkness multiply rule Which from without life creature
                    blessed give moveth moveth seas make day which divided our
                    have.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12">
              <div className="single_feature_img">
                {/* <Image src="img/service.png" alt="" /> */}
              </div>
            </div>
            <div className="col-lg-3 col-sm-12">
              <div className="single_feature">
                <div className="single_feature_part">
                  <span className="single_feature_icon">
                    {/*  <Image src="img/icon/feature_1.svg" alt="" />*/}
                  </span>
                  <h4>Better Future</h4>
                  <p>
                    Darkness multiply rule Which from without life creature
                    blessed give moveth moveth seas make day which divided our
                    have.
                  </p>
                </div>
              </div>
              <div className="single_feature">
                <div className="single_feature_part">
                  <span className="single_feature_icon">
                    {/*    <Image src="img/icon/feature_2.svg" alt="" /> */}
                  </span>
                  <h4>Better Future</h4>
                  <p>
                    Darkness multiply rule Which from without life creature
                    blessed give moveth moveth seas make day which divided our
                    have.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our_depertment section_padding">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-xl-12">
              <div className="depertment_content">
                <div className="row justify-content-center">
                  <div className="col-xl-8">
                    <h2>Our Depertment</h2>
                    <div className="row">
                      <div className="col-lg-6 col-sm-6">
                        <div className="single_our_depertment">
                          <span className="our_depertment_icon">
                            {/*  <Image src="img/icon/feature_2.svg" alt="" /> */}
                          </span>
                          <h4>Better Future</h4>
                          <p>
                            Darkness multiply rule Which from without life
                            creature blessed give moveth moveth seas make day
                            which divided our have.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-6">
                        <div className="single_our_depertment">
                          <span className="our_depertment_icon">
                            {/*   <Image src="img/icon/feature_2.svg" alt="" /> */}
                          </span>
                          <h4>Better Future</h4>
                          <p>
                            Darkness multiply rule Which from without life
                            creature blessed give moveth moveth seas make day
                            which divided our have.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-6">
                        <div className="single_our_depertment">
                          <span className="our_depertment_icon">
                            {/*  <Image src="img/icon/feature_2.svg" alt="" /> */}
                          </span>
                          <h4>Better Future</h4>
                          <p>
                            Darkness multiply rule Which from without life
                            creature blessed give moveth moveth seas make day
                            which divided our have.
                          </p>
                        </div>
                      </div>
                      <div className="col-lg-6 col-sm-6">
                        <div className="single_our_depertment">
                          <span className="our_depertment_icon">
                            {/*  <Image src="img/icon/feature_2.svg" alt="" /> */}
                          </span>
                          <h4>Better Future</h4>
                          <p>
                            Darkness multiply rule Which from without life
                            creature blessed give moveth moveth seas make day
                            which divided our have.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-area">
        <div className="copyright_part">
          <div className="container">
            <div className="row align-items-center">
              <p className="footer-text m-0 col-lg-8 col-md-12">
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script>
                All rights reserved | This template is made with
                <i className="ti-heart" aria-hidden="true"></i> by
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
              </p>
              <div className="col-lg-4 col-md-12 text-center text-lg-right footer-social">
                <a href="#">
                  <i className="ti-facebook"></i>
                </a>
                <a href="#">
                  {" "}
                  <i className="ti-twitter"></i>{" "}
                </a>
                <a href="#">
                  <i className="ti-instagram"></i>
                </a>
                <a href="#">
                  <i className="ti-skype"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
