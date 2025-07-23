import React from 'react'

function Container(props) {
    return (
        <div className={`${props.clasess} max-w-[1200px] mx-auto`}>
            {props.children}
        </div>
    )
}

export default Container
