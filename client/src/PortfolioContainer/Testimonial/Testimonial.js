import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilites/ScreenHeading/ScreenHeading"
import ScrollService from "../../utilites/ScrollService";
import Animations from "../../utilites/Animations";
import "./Testimonial.css";
import phonebook from "../../assets/Testimonial/phonebook.png";
import checkfiles from "../../assets/Testimonial/checkfiles.png";
import cardicon from "../../assets/Testimonial/card-icon.png";
import calculator from "../../assets/Testimonial/calculator.png";
import shape from "../../assets/Testimonial/shape-bg.png";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Projects"}
        subHeading={"Some of my Projects"}
      />
      <section className="testimonial-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                    This project functions as a phone book for a user. It saves a contact's name,phone number, and email address in a database and allows the user to update and delete previously stored entries.
                   </p>
                    
                  </div>
                  <div className="client-info">
                    <a href="https://github.com/codhharris713/Basic-Python-Projects">
                    <img src={phonebook} alt="no internet connection" /></a>
                    <h5>Python Phone Book</h5>
                    <p></p>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                    This project allows the user to choose transfer all .txt files from one chosen directory to another. All files that are moved will be saved in a database.
                    </p>
                  </div>
                  <div className="client-info">
                    <img src={checkfiles} alt="no internet connection"></img>
                    <h5>Python Check Files GUI</h5>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                    These are a couple of projects I worked on using C Sharp and the .NetFrame Work. A card game with a dealer, deck, and a way to shuffle cards and a car insurance web app that takes user information and a quote is calculated based on business logic.
                    </p>
                    </div>
                  <div className="client-info">
                    <img src={cardicon} alt="no internet connection"></img>
                    <h5>C# Projects</h5>
                    <p></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                    These are some of the projects I made using JavaScript. They include a simple game of tic tac toe with sound effects, a simple calculator, and a pizza menu that you can customize toppings and it will calculate a price.
                    </p>
                  </div>
                  <div className="client-info">
                    <img src={calculator} alt="no internet connection"></img>
                    <h5>JavaScript Projects</h5>
                    <p></p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  );
}