import React from "react"
import Header from '../components/Header'
import {Link} from "gatsby"

const Home = () => (
  <div style={{color: 'purple', fontSize: '72px'}}>
    <Link to="/contact/" >Contact</Link>
    <Header headerText = "Hello Gatsby!!" /> 
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="Just in case doesn't work" />

  </div>
)

export default Home
