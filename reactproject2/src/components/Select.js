import React,{  Component} from "react";

const select=(props)=>{
    return(
        <div className="form-group">
            <label htmlFor={props.name} className="form-label">{props.title}</label>
            <select onChange={props.handleChange} value={props.value} name={props.name}>
            <option value="" disabled>{props.placeholder}</option>
            {props.options.map((option,index)=>{
                return (
                    <option  value={option} key={option} label={option}>{option}</option>
                );
            })}
            </select>
        </div>
    );
}
export default select;