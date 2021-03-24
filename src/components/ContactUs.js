import React, {Component} from 'react';
import '../css/Contactus.css';

class ContactUs extends Component {
    constructor(props) {
      super(props);
      this.nameContent = React.createRef();
    this.emailContent = React.createRef(); 
    this.messageContent = React.createRef();
    
      this.state = [{
          name: '',
          email: '',
          message: ''}];
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange() {
      
      this.setState({
        name: this.nameContent.current.value,
        email: this.emailContent.current.value,
        message: this.messageContent.current.value
        
      });
    }
    
    
    handleSubmit(event) {
      alert(`A message was submitted: \n Name: ${this.state.name} \nEmail: ${this.state.email} \nMessage: ${this.state.message} \n Thanks for contacting us.`);
      
      event.target.reset();
    }
  
    render() {
      return (
        <div className="contact">
            <h1 className="contact-heading">Contact Us</h1>
            <form className="contact-form outer-box-frame" onSubmit={this.handleSubmit}>
                <label className="label">
                Name:
                <input className="title" ref={this.nameContent} type="text" name="name" value={this.state.name} onChange={this.handleChange} />
                </label>
                <br />
                <label className="label">
                Email:
                <input className="title" ref={this.emailContent} type="text" name="email" value={this.state.email} onChange={this.handleChange} />
                </label>
                <br /> 
                <lable className="label">               
                Message:                
                <textarea className="title" ref={this.messageContent} cols={25} rows={5} type="text" name="message" value={this.state.message} onChange={this.handleChange} />
                </lable>                
                <br /> 
                <br />               
                <input className="btn btn-warning button"  type="submit" value="Submit" />
                
                {/* <br /> */}
            </form>
        </div>
      );
    }
  }

  export default ContactUs;