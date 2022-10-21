import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import'./css/LoginWithClass.css';
class LoginWithClass extends React.Component {
    constructor(props){
        super(props);
        this.state = { name: '', password: ''}
        this.state = {firstname:'',lastname:''}
        this.firstnameRef = React.createRef()
        this.lastnameRef= React.createRef()
        this.nameRef = React.createRef()
        this.pwdRef = React.createRef()
    }
    setEmpState = (e) => {
           const value = e.target.value;
           const field =  e.target.name;
           this.setState({[field]:value})
        }
    
    handleLogin = (e) => {
        e.preventDefault();
        alert('Logged in successfully');
    }
    render() {
        return(<React.Fragment>
            <form>
                <div className="form-group">
                    <h2>Register Form With Class</h2>
                    <label>FirstName</label>
                    <input style={{width:'40%'}} type="text" className="form-control" value={this.state.firstname}id="name" placeholder="Enter FirstName" onChange={this.setEmpState}  name="firstname" />
                    <label>LastName</label>
                    <input style={{width:'40%'}} type="text" className="form-control" value={this.state.lastname} id="name" placeholder="Enter LastName" onChange={this.setEmpState}  name="lastname" />
                    <label>Username:</label>
                    <input style={{width:'40%'}} type="text" className="form-control" value={this.state.name} id="name" placeholder="Enter Name" name="name" onChange={this.setEmpState} />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input style={{width:'40%'}} type="password" className="form-control" value={this.state.password} id="pwd" placeholder="Enter password" name="password" onChange={this.setEmpState} />
                </div><br />
               <button type="submit" className="btn btn-primary" onClick={this.handleLogin}>Register</button>
           </form>
        </React.Fragment>)
    }
}
export default LoginWithClass;