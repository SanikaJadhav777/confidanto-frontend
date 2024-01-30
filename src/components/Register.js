import { React, useState } from "react"
import "./css/RegisterStyles.css"
import logo from "./confi-logo-new2.png"
import "./css/LoginStyles.css"
import googleLogo from "./google-logo.png"
import { Link } from "react-router-dom"
//import { Label } from "recharts";
//import { Link } from "react-router-dom";
import { Routes, Route, useNavigate } from "react-router-dom"

function Register() {
  const regions = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua & Deps",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Central African Rep",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Congo {Democratic Rep}",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland {Republic}",
    "Israel",
    "Italy",
    "Ivory Coast",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea North",
    "Korea South",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar, {Burma}",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "St Kitts & Nevis",
    "St Lucia",
    "Saint Vincent & the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome & Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad & Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  const [region, setRegion] = useState("Select a Region");
  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  };
  return (
    <div className="container-new">
      <div className="logo">
        <img src={logo} />
      </div>
      <form className="register-container">
        <div className="heading">
          <h1>Sign Up</h1>
          
        </div>
        <div className="main-form-register">
          <div className="first-row">
            <div className="form-floating mb-1">    
              <input
                type="name"
                className="form-control"
                id="floatingInput"
                placeholder="Firstname Lastname"
              />
              <label for="floatingInput">Full Name</label>
            </div>
          </div>
          <div className="first-row">
            <div className="form-floating mb-1">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
            </div>
          </div>
          <div className="first-row">
            <label for="region">Region</label>
          </div>
          <div className="first-row">
          <div className="form-floating mb-1">
            <select onChange={handleRegionChange} className="form-control">
              <option value="Select a Region"> -- Select a Region -- </option>
              {regions.map((region) => (
                <option value={region}>{region}</option>
              ))}
            </select>
          </div>
          </div>
          <div className="first-row-radio-label">
            <label>Are you an agency or Individual?</label>
          </div>
          <div className="first-row-radio">
            <label for="agency">
              <input type="radio" value="Agency" id="agency" name="user-type" />
              Agency
            </label>
            <label for="individual">
              <input
                type="radio"
                value="Individual"
                id="individual"
                name="user-type"
              />
              Individual
            </label>
          </div>
          <div className="first-row">
            <Link to="/additional" id="nextbtn">Next</Link>
          </div>
        </div>
        <div className="heading">
        <label>Already have an account? </label>
          <Link to="/">Log In</Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
