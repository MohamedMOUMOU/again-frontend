import React from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";
import {
  Carousel,
  CarouselItem,
  CarouselIndicators
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faTasks } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { faLaptopHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  const items = [
  {
    src: require("assets/img/bg1.png"),
    altText: "",
    caption: ""
  },
  {
    src: require("assets/img/bg2.png"),
    altText: "",
    caption: ""
  },
  {
    src: require("assets/img/bg4.png"),
    altText: "",
    caption: ""
  }
];
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us" style={ { marginBottom: -130 } }>
          <Container>
          <div class="container">
              <p className="text-center" style={ { fontWeight: 'bold',fontSize: 50 } }>What <span style={ { color: '#ff6c31' } }>DO</span> we <span style={ { color: '#ff6c31' } }>DO</span>?</p>
              <div class="row text-center">
                  <div class="col-lg-4 mb-5 mb-lg-0">
                      <FontAwesomeIcon className="m-4" style={ { fontSize: 40,color: '#ff6c31' } } icon={faLink} />
                      <p class="mb-0" style={ { fontWeight: 'bold' } }>We link homelessness organizations to houses holders wanting to donate a house.</p>
                  </div>
                  <div class="col-lg-4 mb-5 mb-lg-0">
                  <FontAwesomeIcon className="m-4" style={ { fontSize: 40,color: '#ff6c31' } } icon={faHome} />
                  <FontAwesomeIcon className="m-4" style={ { fontSize: 20,color: '#ff6c31' } } icon={faAngleDoubleRight} />
                      <FontAwesomeIcon className="m-4" style={ { fontSize: 40,color: '#ff6c31' } } icon={faTasks} />
                      <p class="mb-0" style={ { fontWeight: 'bold' } }>We find houses for homeless people in return for a service (if possible). It might be delivery services or anything useful.</p>
                  </div>
                  <div class="col-lg-4">
                      <FontAwesomeIcon className="m-4" style={ { fontSize: 40,color: '#ff6c31' } } icon={faLaptopHouse} />
                      <p class="mb-0" style={ { fontWeight: 'bold' } }>We create jobs for people who lost their jobs because of COVID-19 Disease.</p>
                  </div>
              </div>
          </div>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title"><p className="text-center" style={ { fontWeight: 'bold',fontSize: 50,color: '#ff6c31' } }>Achievments</p></h2>
              </Col>
            </Row>
            <div className="separator separator-primary" style={ { marginTop: -45 } }></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/rect887.png") + ")"
                    }}
                  >
                  <div className="container" style={ { borderColor: '#ff6c31',paddingTop:370 } }>
                  <div className="row">
                  <div className="col-md-1"></div>
                  <div className="col-md-8">
                  <h3 className="textCenter">
                    <span style={ { fontFamily: 'monospace',fontSize: 50,color: '#ff6c31' } }>3700</span> homeless people in <span style={ { color: '#ff6c31' } }>Morocco</span> found<br/> shelter
                  </h3>
                    <p className="">
                    In the great country of Morocco we have found help everywhere. Lots of organizations tried to reach us through our platforms and make our job easy.
                    Moreover, about <span style={ { color: '#ff6c31',fontFamily: 'monospace',fontWeight: 'bold' }}>1200+</span> people donated houses. With this great amount of help the organizations we worked with could shelter <span style={ { color: '#ff6c31',fontFamily: 'monospace',fontWeight: 'bold' }}>3700</span> homeless people.
                    The great story of Moroccan people does not here, among the 3700 sheltered people <span style={ { color: '#ff6c31',fontFamily: 'monospace',fontWeight: 'bold' }}>3644</span> are now working, especially in the delivery service helping
                    small moroccan restaurants to adapt to the life of COVID-19.
                    </p>
                    </div>
                    </div>
                    </div>
                  </div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/image839.png") + ")"
                    }}
                  ></div>
                  <h3 className="textCenter">
                    <span style={ { fontFamily: 'monospace',fontSize: 50,color: '#ff6c31' } }>2400</span> homeless people in <span style={ { color: '#ff6c31' } }>South Africa</span> are enjoying life in their houses
                  </h3>
                    <p className="">
                    In the great country of South Africa we have found help anywhere. Lots of organizations tried to reach us through our platforms and make our job easy.
                    Moreover, about <span style={ { color: '#ff6c31',fontFamily: 'monospace',fontWeight: 'bold' }}>900+</span> people donated houses. With this great amount of help the organizations we worked with could shelter <span style={ { color: '#ff6c31',fontFamily: 'monospace',fontWeight: 'bold' }}>2400</span> homeless people.
                    The great story of Moroccan people does not here, among the 2400 sheltered people <span style={ { color: '#ff6c31',fontFamily: 'monospace',fontWeight: 'bold' }}>1964</span> are now working, especially in the delivery service helping
                    small moroccan restaurants to adapt to the life of COVID-19.
                    </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-team text-center">
        <div className="container">
        <div className="row">
        <div className="col-md-6 m-auto">
        <p className="text-center" style={ { fontWeight: 'bold',fontSize: 50 } }>Why do we call ourseleves <span style={ { color: '#ff6c31' } }>AGAIN</span>?</p>
        </div>
        <div className="col-md-6 m-auto">
        <div className="typography-line m-auto">
                  <span>Quote</span>
                  <blockquote>
                    <p className="blockquote blockquote-primary" style={ { fontWeight: 'bold',color: 'black' } }>
                      "We decided to call this idea AGAIN because it provides people with a second chance to live AGAIN the life they want. We strongly believe that everyone was born homeful, and people losing their jobs because of COVID-19 can still get a job and live exactly as they were before."
                      <br></br>
                      <br></br>
                      <small>- AGAIN team</small>
                    </p>
                  </blockquote>
                </div>
        </div>
        </div>
        </div>
        </div>
        <div className="section" id="carousel">
        <Container style={ { marginTop: -110 } }>
        <p className="text-center" style={ { fontWeight: 'bold',fontSize: 50 } }>Stories from around the <span style={ { color: '#ff6c31' } }>WORLD</span></p>
          <Row className="justify-content-center">
            <Col lg="8" md="12">
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators
                  items={items}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {items.map(item => {
                  return (
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}
                      key={item.src}
                    >
                      <img src={item.src} alt={item.altText} />
                      <div className="carousel-caption d-none d-md-block">
                        <h5>{item.caption}</h5>
                      </div>
                    </CarouselItem>
                  );
                })}
                <a
                  className="carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-left"></i>
                </a>
                <a
                  className="carousel-control-next"
                  data-slide="next"
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                  <i className="now-ui-icons arrows-1_minimal-right"></i>
                </a>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="container">
      <p className="text-center" style={ { fontWeight: 'bold',fontSize: 50,color: '#ff6c31' } }>Donate</p>
      <div className="row justify-content-center">
      <div className="col-md-3">
      </div>
      <div className="col-md-3 text-center">
      <Button style={ { fontWeight: 'bold',fontSize: 15,backgroundColor: '#ff6c31' } }>Donate a house</Button>
      </div>
      <div className="col-md-3 text-center">
      <Button style={ { fontWeight: 'bold',fontSize: 15,backgroundColor: '#ff6c31' } }>Donate Money</Button>
      </div>
      <div className="col-md-3">
      </div>
      </div>
      </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default LandingPage;
