import React from "react"
import {Link} from 'gatsby'
import Header from '../components/Header'

const Contact = () => {

    let text = "Contact"
    return(
        <div>
            <Link to="/">Home</Link>
            <Header headerText={text} />
            <p>Send us a messsage</p>
        </div>
    )
}

export default Contact