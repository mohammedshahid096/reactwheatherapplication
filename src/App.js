import "./App.css";
import { useState } from "react";
import React from "react";

function App() {
  
  const [city, setscity] = useState("enter the city");
  const [searchcity, setsearchcity] = useState(null);

  const searchfunction = async() => {
    // async function fetchapi() {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchcity}&units=metric&appid=bab6cf68f1434dbd49d645f96abac20e`;
      const response = await fetch(url);
      const ApiData = await response.json();
      setscity(ApiData);
      console.log(ApiData);
    // }
    // fetchapi();
  };

  const finidingcity = (event) => {
    setsearchcity(event.target.value);
  };
  return (
      
    <div className="App">
      <div className="container mt-1">
        <div className="row justify-content-center " id="maincontainer">
          <div className="col-md-6">
            <center>
              <h1 style={{ textTransform: "uppercase" }}>weather forecast</h1>
            </center>
          </div>
          <div className="w-100 m-3"></div>

          <div className="col-md-6" id="mainbox">
            <nav className="navbar">
              <form className="d-flex w-100" role="search">
                <input
                  className="form-control  me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={finidingcity}
                />
                <button
                  className="btn btn-danger w-25"
                  type="button"
                  onClick={searchfunction}
                >
                  Search
                </button>
              </form>
            </nav>
          </div>

          <div className="w-100 m-3"></div>

          <div className="col-md-6 pt-5 pb-5 text-light" id="mainbox">
              {!city.name ? <div>

                <center>
                <h1>{city ==="enter the city"? city: "no data"}</h1>
                </center>
                </div>

              : <div>
                
                  <h1>
                    <i className="fas fa-street-view"></i>
                    {city.name}
                  </h1>

                  <div id="maintemp" className="mt-5">
                  <center>
                    <h2>
                      {city.main.temp}
                      <sup> o </sup>Cel
                    </h2>

                    <h3>Min: {city.main.temp_min} | Max: {city.main.temp_max}</h3>

                    <h3>Climate: {city.weather[0].main}</h3>
                    <h3>Description: {city.weather[0].description}</h3>
                    <h3>Clouds: {city.clouds.all}</h3>
                </center>
                  </div>
                
              </div>
              }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
