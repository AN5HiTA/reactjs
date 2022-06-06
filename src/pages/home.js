import React from 'react'
import { Link } from 'react-router-dom'
export default function home() {
  return (
    <React.Fragment>
        
    <header>
        <div className="top">
            <div className="container-fluid nav-container  ">
                <div className="navbarc">
                    <nav className="navbar navbar-expand-lg navbar-dark  ">
                        <a href="/" className="navbar-brand "><span className="brand">Intot</span></a>
                        <div className="navlogin">
                            <ul className="navbar-nav ">
                                <li className="nav-item ">
                                    <a className="nav-link" href="/">
                                        <img src="project/images/login.png" alt=""/>
                                        <span>Login</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                   <Link to="/sign">
                                        <img src="project/images/signup.png" alt=""/>
                                        <span>Sign Up</span>
                                        </Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">
                                        <img src="project/images/search-icon.png" alt="search-icon"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="d-block w-100">
                        <div className="row">
                            <div className="container headercontent col-md-3 offset-md-2">
                                <h1 className="text-white headtext">INNOVATIVE
                                    <span className="text-dark">SOLUTION</span>
                                </h1>
                                <p className="text-white">
                                    We find the best solutions fot you, we redesign your home and work places.
                                    Discover why over 5,100 home owners trust initiative
                                </p>
                                <button className="  readbtn">
                                    Read More
                                </button>
                            </div>
                            <div className="container col-md-7 sliderimg">
                                <img className="headerimage" src="project/images/slider-img.png" alt="slider-img"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="d-block w-100">
                        <div className="row">
                            <div className="container headercontent col-md-3 offset-md-2">
                                <h1 className="text-white headtext">INNOVATIVE
                                    <span className="text-dark">SOLUTION</span>
                                </h1>
                                <p className="text-white">
                                    We find the best solutions fot you, we redesign your home and work places.
                                    Discover why over 5,100 home owners trust initiative
                                </p>
                                <button className="  readbtn">
                                    Read More
                                </button>
                            </div>
                            <div className="container col-md-7 sliderimg">
                                <img className="headerimage" src="project/images/slider-img.png" alt="slider-img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carouselprev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <img src="project/images/prev.png" alt="prev"/>
            </button>
            <button className="carouselNext" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <img src="project/images/next.png" alt="next"/>
            </button>
        </div>
    </header>
    <div className=" cardSection">
        <h1>WHY INITIATIVE COMPANY</h1>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking
            at its layout. The point of using Lorem</p>
        <div className="row cards">
            <div className="col">
                <div className="aboutCard ">
                    <div className="imgcard">
                        <img src="project/images/card-img-1.png" alt="card-img-1"/>
                    </div>
                    <div className="cardtittle">
                        <h2>10 YEARS EXPERIENCE</h2>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                    </div>
                    <div className="cardbtn">
                        <a href="/" className=" cardbutton">Read Me</a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="aboutCard ">
                    <div className="imgcard">
                        <img src="project/images/card-img-2.png" alt="card-img-2"/>
                    </div>
                    <div className="cardtittle">
                        <h2>A PRO ARCHITECTS TEAM</h2>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                    </div>
                    <div className="cardbtn">
                        <a href="/" className=" cardbutton">Read Me</a>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="aboutCard  ">
                    <div className="imgcard">
                        <img src="project/images/card-img-3.png" alt="card-img-3"/>
                    </div>
                    <div className="cardtittle">
                        <h2>1000+ HAPPY CUSTOMERS</h2>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus.</p>
                    </div>
                    <div className="cardbtn">
                        <a href="/" className=" cardbutton">Read Me</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <section className="sec-portfolio padding2">
    <div className="container">
      <h2>
        OUR PORTFOLIO
      </h2>
      <p>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at
        its layout. The point of using Lorem
      </p>
    </div>    
    <div className="container padding2-top ">
      <div className="row">
        <div className="col-md-8">
          <div className="folio-img-box">
            <img src="project/images/portfolio-img-1.png" alt=""/>
          </div>
        </div>
        <div className="col-md-4">
          <div className="folio-img-box">
            <img src="project/images/portfolio-img-2.jpg" alt=""/>
          </div>
        </div>
        <div className="col-md-4">
          <div className="folio-img-box">
            <img src="project/images/portfolio-img-3.png" alt=""/>
          </div>
        </div>
        <div className="col-md-8">
          <div className="folio-img-box">
            <img src="project/images/portfolio-img-4.png" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </section>
    </React.Fragment>
  )
}
