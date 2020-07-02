import React from 'react'

const introComponents = props => (
    <div
        style={{
            position: "absolute",
            top: '0',
            left: '0',
            width: "100%",
            height: "100%",


        }}
    >
        {props.children}
        {/* You can render <Route> and <NavTabs /> here */}
    </div>
)

export default introComponents;