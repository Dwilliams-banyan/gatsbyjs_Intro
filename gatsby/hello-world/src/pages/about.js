import React from 'react'
import Header from '../components/Header'

const About = () =>{

    let text = "About Gatsby!!"
    let text1 = "About Me!!"
    let text2 = "About My work!!"


    return (
    <div style={{color: `teal`}} >
        <Header headerText={text} />
        <p>This is awesome too</p>

        <Header headerText={text1} />
        <p>This is awesome too</p>

        <Header headerText={text2} />
        <p>This is awesome too</p>
    </div>
    )
}


export default About