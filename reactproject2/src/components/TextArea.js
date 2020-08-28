import React,{Component} from 'react';

const textArea=(props)=>{
    return(
        <div className="form-group">
            <label htmlFor={props.name} className="form-label">{props.title}</label>
            <textarea name={props.name} 
            value={props.value} 
            rows={props.rows}
            onChange={props.handleChange}     
            placeholder={props.placeholder}>

            </textarea>
        </div>
    );
}
export default textArea;