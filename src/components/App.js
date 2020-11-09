import React, { Component } from "react";
import {
  Navbar,
  Button,
  RoundCard,
  Card,
  HeadingUnderline,
  ECard,
  Footer,
} from "./common";
class App extends Component {
  render() {
    return (
      <div className="home">
        <div className="header">
          <Navbar />
          <div className="row">
            <div className="col-sm-12 col-md-6 order-sm-12">
              <div className="hero">
                <img className="w-100" src={"./svg/together.svg"} />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 order-sm-1">
              <div className="hero-text">
                <h2>Accelerate your career with expert guidance & help.</h2>
                <p>
                  We have AI based solutions as well as Personal Mentoring to
                  help propel your career to new heights.
                </p>
                <Button title="Get Started" href="#" />
              </div>
            </div>
          </div>
        </div>
        <div className="services">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-3">
                <RoundCard title="Professional" src="./svg/man.svg" />
              </div>
              <div className="col-sm-12 col-md-3">
                <RoundCard title="Professional" src="./svg/man.svg" />
              </div>
              <div className="col-sm-12 col-md-3">
                <RoundCard title="Professional" src="./svg/man.svg" />
              </div>
              <div className="col-sm-12 col-md-3">
                <RoundCard title="Professional" src="./svg/man.svg" />
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="mentor">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className="m-logo">
                  <img src={"./svg/lady.svg"} />
                </div>
              </div>

              <div className="col-sm-12 col-md-6">
                <div>
                  <Card
                    title="“A mentor is someone who allows you 
  to see the hope inside yourself.”"
                    by={"— Oprah Winfrey"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <HeadingUnderline title="Our Philosophy" />
        </div>

        <div className="container">
          <ECard
            photo="./svg/ladywih.svg"
            order1="first"
            order2="last"
            heading="Our Methodology"
            para="We provide you to benchmark 
            your current performance using our 
            AI-based engine followed by Mentor 
            consultation to improve your performance."
          />
          <ECard
            photo="./svg/manwith.svg"
            order2="first"
            order1="last"
            heading="Unique Career Selection 
            Approach (UCSA)"
            para="Get a detailed interpretation 
            of your Cognitive Personality Report 
            in light of your interests & passion."
          />
          <ECard
            photo="./svg/meet.svg"
            order2="first"
            order1="last"
            heading="Psychometrics 
            vs Psycholinguistics"
            para="Psycholinguistic Analysis is the 
            cognitive Analysis of the speech 
            while answering common day to day conversations."
          />
          <ECard
            photo="./svg/look.svg"
            order1="first"
            order2="last"
            heading="Emerging Career Trends"
            para="The jobs that existed 10 years
            back do-not exist today. The jobs 
            that will be 5 years from now are unknown."
          />
        </div>

        <div className="research">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-3">
                <h2 className="phead">
                  Psycholinguistics Research{" "}
                  <span>
                    <img src={"./svg/arrow.svg"} />
                  </span>
                </h2>
              </div>
              <div className="col-sm-12 col-md-3">
                <div className="card" style={{ "width ": "18rem;" }}>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-3">
                <div className="card" style={{ "width ": "18rem;" }}>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-3">
                <div className="card" style={{ "width ": "18rem;" }}>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <HeadingUnderline title="Our Career Experts" />
        </div>
        {/* <div className="experts">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src="..." alt="First slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="..." alt="Second slide" />
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="..." alt="Third slide" />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div> */}
        <Footer />
      </div>
    );
  }
}
export default App;
