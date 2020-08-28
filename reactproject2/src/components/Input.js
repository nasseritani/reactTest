import React, { Component } from "react";

const input=(props)=>{
return(
<div className="form-group">
    <label htmlFor={props.name} className="form-label" >{props.title}</label>
    <input className="form-input"  id={props.name} 
    name={props.name} value={props.value} 
    type={props.type} onChange={props.handleChange}
    placeholder={props.placeholder} >
    </input>
</div>
);
}
export default input;