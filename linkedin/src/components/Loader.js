import React from 'react'
import '../Loader.css'

export const Loader = () => {
    return (
        <div className="lds-spinner mx-auto" style={{ height:100, width:100 }}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        )
}
