import React from 'react'
import { CCard, CCardBody, CCardHeader, CRow } from '@coreui/react'
import { freeSet } from '@coreui/icons'
import { getIconsView } from '../brands/Brands.js'
import { DocsCallout } from 'src/components'
import { useState, useRef } from 'react'
import './YoyStyles.css'
import { Helmet } from 'react-helmet'
import GoogleTrends from './GoogleTrends.js'
import WidgetsDropdown from 'src/views/widgets/WidgetsDropdown.js'
//import GoogleTrends from './GoogleTrends.js'
import moment from 'moment'

const CoreUIIcons = () => {
  const countryList = require('country-list')

  const countries = countryList.getData()

  console.log(countries[0].name)

  const [region, setRegion] = useState('Select a Region')
  const handleRegionChange = (event) => {
    const newValue = event.target.value
    setRegion(event.target.value)
    //console.log(region)
  }
  console.log(region)
  const countryCode = countryList.getCode(region)
  console.log(countryCode)
  const durations = [
    'Past day',
    'Past hour',
    'Past 4 hours',
    'Past 7 days',
    'Past 30 days',
    'Past 90 days',
    'Past 12 months',
    'Past 5 years',
    '2004-present',
  ]

  const [duration, setDuration] = useState('Select Duration')
  const handleDurationChange = (e) => {
    setDuration(e.target.value)
  }

  console.log(duration)
  let selected_duration
  if (duration === 'Past day') {
    selected_duration = 'now 1-H'
  } else if (duration === 'Past hour') {
    selected_duration = 'now 1-d'
  } else if (duration === 'Past 4 hours') {
    selected_duration = 'now 4-H'
  } else if (duration === 'Past 7 days') {
    selected_duration = 'now 7-d'
  } else if (duration === 'Past 30 days') {
    selected_duration = 'today 1-m'
  } else if (duration === 'Past 90 days') {
    selected_duration = 'today 3-m'
  } else if (duration === 'Past 12 months') {
    selected_duration = 'today 12-m'
  } else if (duration === 'Past 5 years') {
    selected_duration = 'today 5-y'
  } else if (duration === '2004-present') {
    let today = moment().format('YYYY-MM-DD')
    console.log(today)
    selected_duration = '2004-01-01 ' + today
  }

  const categories = [
    'All Categories',
    'Arts & Entertainment',
    'Autos & Vehicles',
    'Beauty & Fitness',
    'Books & Literature',
    'Business & Industrial',
    'Computers & Electronics',
    'Finance',
    'Food & Drink',
    'Games',
    'Health',
    'Hobbies & Leisure',
    'Home & Garden',
    'Internet & Telecom',
    'Job & Education',
    'Law & Government',
    'News',
    'Online Communities',
    'People & Society',
    'Pets & Animals',
    'Real Estate',
    'Reference',
    'Science',
    'Travel',
  ]

  const [category, setCategory] = useState('Select Category')
  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }

  const searches = [
    'Web Search',
    'Image Search',
    'News Search',
    'Google Shopping',
    'Youtube Search',
  ]

  const [search, setSearch] = useState('Select Type')
  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  let Property_Selected
  if (search === 'Web Search') {
    Property_Selected = ''
  } else if (search === 'Image Search') {
    Property_Selected = 'images'
  } else if (search === 'News Search') {
    Property_Selected = 'news'
  } else if (search === 'Google Shopping') {
    Property_Selected = 'froogle'
  } else if (search === 'Youtube Search') {
    Property_Selected = 'youtube'
  }
  console.log(Property_Selected)
  const [word, setWord] = useState()
  const [isWord, setIsWord] = useState(false)
  const handleWordChange = (e) => {
    setWord(e.target.value)
    console.log(word)
    if (e.key === 'Enter') {
      console.log('Enter')
      setIsWord(true)
    } else {
      setIsWord(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log('Enter')
      setIsWord(true)
    } else {
      setIsWord(false)
    }
  }
  //console.log(flag)
  function Trends() {
    return (
      <div id="widget">
        <GoogleTrends
          type="TIMESERIES"
          keyword={word}
          geo="IN"
          time="now 1-d"
          url="https://ssl.gstatic.com/trends_nrtr/3601_RC01/embed_loader.js"
        />
      </div>
    )
  }

  const dynamic = useRef()
  const trends = useRef()
  const handleTrends = () => {
    if (dynamic.current.style.visibility == 'visible') {
      dynamic.current.style.visibility = 'hidden'
      dynamic.current.style.display = 'none'
      trends.current.style.visibility = 'hidden'
      trends.current.style.display = 'none'
    }
    if (word !== '') setIsWord(true)
    else setIsWord(false)
    if (isWord) {
      dynamic.current.style.visibility = 'visible'
      dynamic.current.style.display = 'block'
    } else {
      dynamic.current.style.visibility = 'hidden'
      dynamic.current.style.display = 'none'
    }
  }
  const comparison = [{ keyword: 'Bitcoin', geo: 'IN', time: 'now 1-d' }]

  const keywords = ['bitcoin']
  const geo = countryCode
  const time = 'now 1-d'
  //const property = ''
  //const comparison = keywords.map((q) => ({ keyword: q, geo: geo, time: time }))
  const keyword = keywords.join()
  console.log(word)
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <div className="header-options-input">
            <div className="form-floating mb-1">
              <input
                type="text"
                className="form-control"
                placeholder="Add a search term"
                onChange={handleWordChange}
              />
            </div>
            <div className="form-floating mb-1">
              <input type="text" id="compare" className="form-control" placeholder="+  Compare" />
            </div>
          </div>
          <div className="header-options">
            <div className="form-floating mb-1">
              <select onChange={(e) => setRegion(e.target.value)} className="form-control">
                <option value="Select a Region"> -- Select a Region -- </option>
                {countries.map((country) => (
                  <option key={country.code}>{country.name}</option>
                ))}
              </select>
            </div>
            <div className="form-floating mb-1">
              <select onChange={(e) => setDuration(e.target.value)} className="form-control">
                <option value="Select Duration"> -- Select Duration -- </option>
                {durations.map((duration) => (
                  <option key={duration}>{duration}</option>
                ))}
              </select>
            </div>
            <div className="form-floating mb-1">
              <select onChange={(e) => setCategory(e.target.value)} className="form-control">
                <option value="Select Category"> -- Select Category -- </option>
                {categories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>
            </div>
            <div className="form-floating mb-1">
              <select onChange={(e) => setSearch(e.target.value)} className="form-control">
                <option value="Select Type"> -- Select Type -- </option>
                {searches.map((search) => (
                  <option key={search}>{search}</option>
                ))}
              </select>
            </div>
          </div>
          <button className="getanalysisbtn" onClick={handleTrends}>
            Get Analysis
          </button>
        </CCardHeader>
        <CCardBody>
          <div>
            <h2>Year Over Year Analysis</h2>
            {/*<div id="widget">
              <GoogleTrends
                type="TIMESERIES"
                keyword="Apparel"
                geo="IN"
                time="now 1-d"
                url="https://ssl.gstatic.com/trends_nrtr/3601_RC01/embed_loader.js"
              />
              <GoogleTrends
                type="GEO_MAP"
                keyword="Clothing"
                geo="IN"
                time="now 1-d"
                url="https://ssl.gstatic.com/trends_nrtr/3601_RC01/embed_loader.js"
              />
            </div>*/}
            <div ref={dynamic} className="dynamic">
              <div id="widget">
                {isWord && (
                  <div>
                    <GoogleTrends
                      type="TIMESERIES"
                      keyword={word}
                      geo={geo}
                      time={selected_duration}
                      property={Property_Selected}
                      url="https://ssl.gstatic.com/trends_nrtr/3601_RC01/embed_loader.js"
                      ref={trends}
                    />
                    <GoogleTrends
                      type="GEO_MAP"
                      keyword={word}
                      geo={geo}
                      time={selected_duration}
                      property={Property_Selected}
                      url="https://ssl.gstatic.com/trends_nrtr/3601_RC01/embed_loader.js"
                      ref={trends}
                    />
                    <GoogleTrends
                      type="RELATED_TOPICS"
                      keyword={word}
                      geo={geo}
                      time={selected_duration}
                      property={Property_Selected}
                      url="https://ssl.gstatic.com/trends_nrtr/3601_RC01/embed_loader.js"
                      ref={trends}
                    />
                    <GoogleTrends
                      type="RELATED_QUERIES"
                      keyword={word}
                      geo={geo}
                      time={selected_duration}
                      property={Property_Selected}
                      url="https://ssl.gstatic.com/trends_nrtr/3601_RC01/embed_loader.js"
                      ref={trends}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </CCardBody>
      </CCard>
    </>
  )
}

export default CoreUIIcons
