import React, {Component} from 'react';  
import './FormContainer.css';

/* Import Components */
import Input from '../components/Input';  
import TextArea from '../components/TextArea';  
import Select from '../components/Select';
import Button from '../components/Button';
import CheckBox from '../components/Checkbox';

class FormContainer extends Component {  
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: '',
        email: '',
        age: '',
        gender: '',
        expertise: '',
        about: '',
        skills:[]
      },
      error:'',
      genderOptions: ['Male', 'Female', 'Others'],
      skillOptions: ['Programming', 'Development', 'Design', 'Testing']

    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFullName = this.handleFullName.bind(this)
    this.handleAge = this.handleAge.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleText = this.handleText.bind(this);
    this.handleCheckBox=this.handleCheckBox.bind(this);
  }

  /* This life cycle hook gets executed when the component mounts */
   isEmpty(arg) {
    for (var item in arg) {
  return false;
    }
    return true;
  }
  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;
    if(this.isEmpty(userData)){
      this.setState(prevError=>({
        error:{...prevError}
      }))
      console.log("error:"+this.state.error);
    }
    console.log(userData);
    fetch('http://example.com',{
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(response => {
        response.json().then(data =>{
          console.log("Successful" + data);
        })
    })
  }   
  handleClearForm(e) {

    e.preventDefault();
    this.setState({ 
      newUser: {
        name: '',
        age: '',
        gender: '',
        skills: [],
        about: ''
      },
    })
}
  handleFullName(e){
      let value=e.target.value;
      this.setState(prevState=>({
          newUser:{...prevState.newUser,name:value}
      }))
  }
  //set state function when dealing with inside function
  // it expect her to return object thats why here we are doing this sysntax and the ()before {} are for engine to behave as return

  handleAge(e){
      let value=e.target.value;
      this.setState(prevState=>({
          newUser:{...prevState.newUser,age:value}
      }))
  }
  handleSelect(e){
      let value=e.target.value;
      this.setState(prevState=>({
          newUser:{...prevState.newUser,gender:value}
      }))
  }
  handleText(e){
    let value=e.target.value;
    this.setState(prevState=>({
        newUser:{...prevState.newUser,about:value}
    }))
}

handleCheckBox(e){
    let newSelection=e.target.value;
    let newSelectionArray;
    if(this.state.newUser.skills.indexOf(newSelection)>-1){
        newSelectionArray=this.state.newUser.skills.filter(s=>s!== newSelection);
    }
    else{
        newSelectionArray=[...this.state.newUser.skills,newSelection];
    }
    this.setState( prevState => ({ newUser:
        {...prevState.newUser, skills: newSelectionArray }
      })
      )
}
  render() {
    return (
      <form className="container" onSubmit={this.handleFormSubmit}>
        <h1>Contact US</h1>
        <Input type={'text'}
         title={'Name'} 
         value={this.state.newUser.name} 
         placeholder={'Enter your name'}
         handleChange={this.handleFullName}
        />
          <Input type={'Number'}
         title={'Age '} 
         value={this.state.newUser.age} 
         placeholder={'Enter your age'}
         handleChange={this.handleAge}
        /> 
        <Select name={'Gender'}
         options={this.state.genderOptions} 
         handleChange={this.handleSelect} 
         value={this.state.newUser.gender}
        title={'Gender'} 
        placeholder={'Select Gender'} />
             <CheckBox  title={'Skills'}
                  name={'skills'}
                  options={this.state.skillOptions}
                  selectedOptions = { this.state.newUser.skills}
                  handleChange={this.handleCheckBox}
                   />
         <TextArea 
         title={'About'} 
         rows={'2'}
         value={this.state.newUser.about} 
         placeholder={'Enter your message'}
         handleChange={this.handleText}
        /> 
   <Button 
              action = {this.handleFormSubmit}
              type = {'primary'} 
              title = {'Submit'} 
           
          /> 
          
          <Button 
            action = {this.handleClearForm}
            type = {'secondary'}
            title = {'Clear'}
          /> 
      </form>
    );
  }
}

export default FormContainer;
