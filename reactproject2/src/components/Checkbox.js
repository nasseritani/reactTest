import React,{component} from "react"

const CheckBox=(props)=>{
    return(
        <div className="form-group">
<label htmlFor={props.name} className="form-label">{props.title}</label>
{props.options.map(option=>(
     <label key={option}>
     <input
       className="form-checkbox"
       id = {props.name}
       name={props.name}
       onChange={props.handleChange}
       value={option}
       checked={ props.selectedOptions.indexOf(option) > -1 }
       type="checkbox" /> {option}
   </label>
))}
        </div>
    );
}
export default CheckBox;