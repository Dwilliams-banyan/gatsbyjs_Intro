import React from 'react'

// This is a layout component because it this component will be used across multiple pages
const Header = (props) => (
    <div>
        <h1>{props.headerText}</h1>
    </div>
)

export default Header