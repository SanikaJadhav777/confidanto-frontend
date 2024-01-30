import { React, useState } from "react";
import "./css/RegisterStyles.css";
import logo from "./confi-logo-new2.png";
import "./css/LoginStyles.css";
import { Link } from "react-router-dom";
import MultiSelect from "react-multiple-select-dropdown-lite";
import Select from "react-select";

function Questions() {
  const categories = [
    "Animals & Pets",
    "Advocacy",
    "Arts & Entertainment",
    "Attorneys & Legal Services",
    "Automotive",
    "Beauty & Personal Care",
    "Dating & Personals",
    "Dentists & Dental Services",
    "Education & Instruction",
    "Finance & Insurance",
    "Home & Home Improvement",
    "Furniture",
    "Health & Fitness",
    "Home Goods",
    "E-Commerce",
    "Real Estate",
  ]

  const [category, setCategory] = useState("Select a Category")
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  }

  /*const optionList = [
    { value: "red", label: "Red" },
    { value: "green", label: "Green" },
    { value: "yellow", label: "Yellow" },
    { value: "blue", label: "Blue" },
    { value: "white", label: "White" }
  ];

  const animals_pets = [
    { value: "Pet Shop", label: "Pet Shop" },
    { value: "Pet Grooming", label: "Pet Grooming" },
    { value: "Pet Food", label: "Pet Food" }
  ];

  const advocacy = [
    { value: "Case advocacy", label: "Case advocacy" },
    { value: "Peer advocacy", label: "Peer advocacy" },
    { value: "Paid independent advocacy", label: "Paid independent advocacy" },
    { value: "Citizen advocacy", label: "Citizen advocacy" },
    { value: "Statutory advocacy", label: "Statutory advocacy" }
  ];*/

  const animals_pets = ["Pet Shop", "Pet Grooming", "Pet Food"]
  const advocacy = [
    "Case advocacy",
    "Peer advocacy",
    "Paid independent advocacy",
    "Citizen advocacy",
    "Statutory advocacy",
  ]
  const art_ent = [
    "Amusement parks",
    "Music",
    "Performance art",
    "Publicist",
    "Sports",
    "Artist manager",
    "Media",
    "Bounce house",
    "Casino",
    "Comedy Club",
    "Costume designer",
    "Dance studio",
    "Dinner Theatre",
    "D j",
    "Museums",
    "Promoter",
    "Ad film production",
    "Agents and agencies",
    "Animation",
    "Art Gallery",
    "Attractions",
    "Entertainment venues",
  ]

  const autom = [
    "Auto restoration",
    "Car dealership",
    "Car rental services",
    "Car wash",
    "Auto Accessories store",
    "Bus services",
    "Car detailing",
    "Spare parts",
    "Auto body repair shops",
    "Auto instructor",
    "Automobile Magazine",
    "Oil change",
    "Charging station",
    "Towing",
    "Auto locksmith business",
    "Automobile insurance",
    "Battery store",
    "Car service",
    "Hauling business",
    "Limo business",
  ]
  const attorneys = [
    "Contract lawyer",
    "Immigration lawyer",
    "Intellectual property lawyer",
    "Tax lawyer",
    "Family law",
    "Personal injury lawyer",
    "Prosecutor",
    "Bankruptcy Lawyer",
    "Entertainment lawyer",
    "Real estate lawyer",
    "Technology lawyer",
  ]
  const beauty = [
    "Skin care",
    "Decorative cosmetics",
    "Hair care",
    "Beauty products",
    "Oral Care",
    "Beauty product business",
    "Makeup artist",
    "Nail salon",
    "Perfumes",
    "Start a beauty school",
    "Start a spa business",
  ]
  const business = [
    "Management Consultant",
    "Financial Analyst",
    "Finance",
    "Sales",
    "Marketing",
    "Sales Management",
    "Accounting",
    "Event management",
    "Accountant",
    "Software Engineer",
    "Management Analyst",
    "Real Estate",
    "Construction",
    "Actuary",
    "Financial adviser",
    "Business Analyst",
    "Business consultant",
    "Auditor",
    "Office administration",
    "Chief Executive Officer",
  ]
  const dating = [
    "Online dating App",
    "Online Dating website",
    "Wedding Planners",
  ]

  const dentists = [
    "Endodontic procedures",
    "Pediatric dental services",
    "Periodontal treatments",
    "Diagnostic and preventative dental services",
    "Prosthodontic services",
    "Oral and maxillofacial surgery",
  ]
  const edu = [
    "Tutoring",
    "Online private/ charter school",
    "Online courses",
    ,
    "Lesson plans/material",
    "Homeschooling",
    "Teaching languages",
    "Test prep coaching",
    "Mindfulness or stress management",
  ]

  const finance = [
    "Commercial auto insurance",
    "Commercial property insurance",
    "General liability insurance",
    "Data breach insurance",
    "Workers' compensation insurance",
    "Business income insurance",
    "Commercial umbrella insurance",
    "Liability insurance",
    "Business interruption insurance",
    "Business owner's policy",
  ]

  const home_improve = [
    "Basement remodeling",
    "Lawn care",
    "Plumbing",
    "Electrical",
    "Furniture assembly",
    "Apartment cleaning",
    "Carpentry",
    "Deck building",
    "Flooring",
    "Handyman services",
    "Home security business",
    "House painter",
    "Carpeting",
    "Fence installation and repair",
    "Wallpapering",
    "Home maintenance and repair services",
    "Home automation Technician",
    "Tiling",
  ]

  const furniture = [
    "Furniture stores",
    "Interior design services",
    "Furniture repair shops",
    "Furniture Manufacturing",
    "Furniture distribution",
    "Specializing in specific types of furniture",
    "Reupholstery shop",
  ]

  const health = [
    "Yoga",
    "Bootcamp Fitness",
    "Nutrition",
    "Personal training",
    "Branded fitness apparel",
    "Meditation",
    "Pilates",
    "CrossFit",
    "Dance studio",
    "Boutique gym",
    "Fitness equipment",
    "Fitness vlogger",
    "Mobile fitness studio",
    "Outdoor classes",
    "Personalized wellness",
    "Physical therapist",
    "Powerlifting gym",
    "Zumba",
    "Bike tour",
    "Fitness affiliate",
    "Fitness Director",
    "Fitness franchise",
    "Gymnastics classes business",
  ]

  const health_medical = [
    "Methadone clinic",
    "Healthcare facilities",
    "Medical billing service",
    "Medical records management",
    "Transcribing services",
    "Mobile Medical screening",
    "Nutrition consultation",
    "Pharmaceutical",
    "Childbirth services",
    "Health tech",
    "Healthcare blogging",
    "Medical equipment",
    "Nursing staffing agency",
    "Mental wellness",
    "Nursing home",
    "Adult Daycare",
    "Biomedical waste Management",
    "Blood Bank",
    "D/R/U/G/S",
    "Health consulting",
    "Physical therapy clinic",
    "Start manufacturing medical equipment",
    "Diabetes Clinic",
    "Drug testing",
  ]

  const home_goods = [
    "Outdoor",
    "Gifts",
    "Bedding",
    "Bath",
    "Home",
    "Accents",
    "Storage",
    "Dining",
    "Wall Decor",
    "Mirrors",
    "Kitchen",
    "Essentials",
    "Seasonal",
    "Decor",
  ]

  const ecomm = [
    "Apparels",
    "Jewelry",
    "Handbags",
    "Electronics",
    "Books",
    "Furniture",
    "Groceries",
    "Beauty products",
    "Fashion",
    "Mobile phones",
    "Movie tickets",
    "Toys and games",
    "Auto and Parts",
    "Baby products",
    "Fitness equipment",
    "Health supplements",
    "Kitchenware",
  ]

  const real_estate = ["Auditor", "Renting a property", "Selling A Property"]

  let type = null
  let options = null

  if (category === "Animals & Pets") {
    type = animals_pets;
  } else if (category === "Advocacy") {
    type = advocacy
  } else if (category === "Arts & Entertainment") {
    type = art_ent
  } else if (category === "Automotive") {
    type = autom
  } else if (category === "Attorneys & Legal Services") {
    type = attorneys
  } else if (category === "Beauty & Personal Care") {
    type = beauty
  } else if (category === "Business Services") {
    type = business
  } else if (category === "Dating & Personals") {
    type = dating
  } else if (category === "Dentists & Dental Services") {
    type = dentists
  } else if (category === "Education & Instruction") {
    type = edu
  } else if (category === "Finance & Insurance") {
    type = finance
  } else if (category === "Home & Home Improvement") {
    type = home_improve
  } else if (category === "Furniture") {
    type = furniture
  } else if (category === "Health & Fitness") {
    type = health
  } else if (category === "Health & Medical") {
    type = health_medical
  } else if (category === "Home Goods") {
    type = home_goods
  } else if (category === "E-Commerce") {
    type = ecomm
  } else if (category === "Real Estate") {
    type = real_estate
  }

  /*const subcategories = [
    'Pet Shop',
    'Pet Grooming',
    'Pet Food',
    'Case advocacy',
    'Peer advocacy',
    'Paid independent advocacy',
    'Citizen advocacy',
    'Statutory advocacy',
    'Amusement parks',
    'Music',
    'Performance art',
    'Publicist',
    'Sports',
    'Artist manager',
    'Media',
    'Bounce house',
    'Casino',
    'Comedy Club',
    'Costume designer',
    'Dance studio',
    'Dinner Theatre',
    'D j',
    'Museums',
    'Promoter',
    'Ad film production',
    'Agents and agencies',
    'Animation',
    'Art Gallery',
    'Attractions',
    'Entertainment venues',
    'Contract lawyer',
    'Immigration lawyer',
    'Intellectual property lawyer',
    'Tax lawyer',
    'Family law',
    'Personal injury lawyer',
    'Prosecutor',
    'Bankruptcy Lawyer',
    'Entertainment lawyer',
    'Real estate lawyer',
    'Technology lawyer',
    'Auto restoration',
    'Car dealership',
    'Car rental services',
    'Car wash',
    'Auto Accessories store',
    'Bus services',
    'Car detailing',
    'Spare parts',
    'Auto body repair shops',
    'Auto instructor',
    'Automobile Magazine',
    'Oil change',
    'Charging station',
    'Towing',
    'Auto locksmith business',
    'Automobile insurance',
    'Battery store',
    'Car service',
    'Hauling business',
    'Limo business',
    'Manufacturing auto components',
    'Vehicle Inspector',
    'Skin care',
    'Decorative cosmetics',
    'Hair care',
    'Beauty products',
    'Oral Care',
    'Beauty product business',
    'Makeup artist',
    'Nail salon',
    'Perfumes',
    'Start a beauty school',
    'Start a spa business',
    'Management Consultant',
    'Financial Analyst',
    'Finance',
    'Sales',
    'Marketing',
    'Sales Management',
    'Accounting',
    'Event management',
    'Accountant',
    'Software Engineer',
    'Management Analyst',
    'Real Estate',
    'Construction',
    'Actuary',
    'Financial adviser',
    'Business Analyst',
    'Business consultant',
    'Auditor',
    'Office administration',
    'Chief Executive Officer',
    'Photographer',
    'Account Executive',
    'Financial Manager',
    'Logistics',
    'Online dating App',
    'Online Dating website',
    'Wedding Planners',
    'Endodontic procedures',
    'Pediatric dental services',
    'Periodontal treatments',
    'Diagnostic and preventative dental services',
    'Prosthodontic services',
    'Oral and maxillofacial surgery',
    'Tutoring',
    'Online private/ charter school',
    'Online courses',
    'Lesson plans/material',
    'Homeschooling',
    'Teaching languages',
    'Test prep coaching',
    'Mindfulness or stress management',
    'Commercial auto insurance',
    'Commercial property insurance',
    'General liability insurance',
    'Data breach insurance',
    'Workers compensation insurance',
    'Business income insurance',
    'Commercial umbrella insurance',
    'Liability insurance',
    'Business interruption insurance',
    'Business owner policy',
    'Business owner policy',
  ];*/

  const [subcategory, setSubCategory] = useState();
  const handleSubCategoryChange = (data) => {
    setSubCategory(data);
  };

  let optionList

  if (type) {
    options = type.map((el) => <option key={el}>{el}</option>)
    optionList = type.map(service => ({ value: service, label: service }))
    console.log(optionList)
  }

  return (
    <div className="container-new">
      <div className="logo">
        <img src={logo} />
      </div>
      <form className="register-container">
        <div className="heading">
          <h1>Additional Details</h1>
        </div>
        <div className="main-form-register">
          <div className="first-row">
            <div className="form-floating mb-1">
              <select onChange={handleCategoryChange} className="form-control">
                <option value="Select a Catgory">
                  {" "}
                  -- Select a Category --{" "}
                </option>
                {categories.map((category) => (
                  <option value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
          {/*<div className="first-row">
            <div className="form-floating mb-1">
              <select
                onChange={handleSubCategoryChange}
                className="form-control"
              >
                <option value="Select a Subcatgory">
                  {" "}
                  -- Select a Subcategory --{" "}
                </option>
                {options}
              </select>
            </div>
          </div>*/}
          <div className="first-row">
            <div className="form-floating mb-1">
              <Select
                options={optionList}
                value={subcategory}
                onChange={handleSubCategoryChange}
                isMulti={true}
                id="multi-select"
                placeholder="-- Select a Subcatgory --"
              />
            </div>
          </div>
          {/*<div className="first-row">
            <div className="form-floating mb-1">
              <Select
                options={subcat}
                placeholder="Select Subcategory"
                value={subcategory}
                onChange={handleSubCategoryChange}
                isSearchable={true}
                isMulti
                id="multi-select"
              >
              </Select>
            </div>
          </div>*/}
          {/*<div className="first-row">
          <div className="form-floating mb-1">
            <select onChange={handleSubCategoryChange} className="form-control">
              <option value="Select a Subcatgory"> -- Select a Subcategory -- </option>
              {subcategories.map((subcategory) => (
                <option value={subcategory}>{subcategory}</option>
              ))}
            </select>
          </div>
          </div>*/}
          <div className="first-row">
            <div className="form-floating mb-1">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="10$"
              />
              <label for="floatingInput">Expected Budget</label>
            </div>
          </div>
          <div className="first-row">
            <div className="form-floating mb-1">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="10$"
              />
              <label for="floatingInput">Average Price Point</label>
            </div>
          </div>

          <div className="first-row-radio-label">
            <label>Specify the Duration</label>
          </div>
          <div className="first-row-date">
            <div className="form-floating mb-1">
              <input type="date" className="form-control" id="floatingInput" />
              <label for="floatingInput">Start Date</label>
            </div>
            <div className="form-floating mb-1">
              <input type="date" className="form-control" id="floatingInput" />
              <label for="floatingInput">End Date</label>
            </div>
          </div>
          <div className="first-row-radio">
            <label for="branding">
              <input
                type="checkbox"
                value="Branding"
                id="branding"
                name="branding"
              />
              Branding
            </label>
            <label for="increased-revenue">
              <input
                type="checkbox"
                value="Increased Revenue"
                id="increased-revenue"
                name="increased-revenue"
              />
              Increased Revenue
            </label>
            <label for="branding-conversion">
              <input
                type="checkbox"
                value="Branding+Conversion"
                id="branding-conversion"
                name="branding-conversion"
              />
              Branding+Conversion
            </label>
          </div>
          <div className="first-row">
            <Link to="/home" id="nextbtn">
              Sign Up
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Questions;
