import React, { useState } from 'react'

export default function About(props) {
  let myStyle = {
    color : props.mode === 'dark'?'white' : '#042743',
    backgroundColor : props.mode === 'dark'?'rgb(36 74 104)' : 'white',
  }
    
  return (
    <div className="container my-3" style = {{color : props.mode === 'dark'?'white' : '#042743'}}>
        <h2>About Us</h2>
        <div className="accordion" id="accordionExample" >
            <div className="accordion-item" >
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style = {myStyle}>
                    <strong>Features</strong>
                </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style = {myStyle}>
                     TextUtils is a text manipulation application that is free of cost and also is browser compatible.
                    </div>
                </div>
            </div>
        </div>
        {/* <div className="container">
            <button type="button" className="btn btn-primary"onClick ={toggleStyle} >{btnText}</button>
        </div> */}
        
    </div>
  )
}
