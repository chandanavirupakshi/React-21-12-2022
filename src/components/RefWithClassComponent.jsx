import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class RefWithClassComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = { name: '', password: ''}
        this.nameRef = React.createRef()
        this.pwdRef = React.createRef()
    }
    handleLogin = (e) => {
        e.preventDefault();
        if(this.nameRef.current.value==="" && this.pwdRef.current.value==="") {
            alert("Please enter username and password")
        }else if(this.nameRef.current.value===""){
            alert("Please enter username")
        }else if(this.pwdRef.current.value===""){
            alert("Please enter password")
        }else{
        alert("Welcome " + this.nameRef.current.value);
        }
    }
    render() {
        return(<React.Fragment>
            <form>
                <div className="form-group">
                <h2>RegisterForm using Class-Ref</h2>
                <label>Firstname:</label>
                    <input style={{width:'40%'}} type="text" className="form-control" id="name" placeholder="Enter Name" name="name" ref={this.nameRef}/>
                    <label>Lastname:</label>
                    <input style={{width:'40%'}} type="text" className="form-control" id="name" placeholder="Enter Name" name="name" ref={this.nameRef}/>
                    <label>Username:</label>
                    <input style={{width:'40%'}} type="text" className="form-control" id="name" placeholder="Enter Name" name="name" ref={this.nameRef}/>
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input style={{width:'40%'}} type="password" className="form-control" id="password" placeholder="Enter password" name="password" ref={this.pwdRef} />
                </div><br/>
               <button type="submit" className="btn btn-primary" onClick={this.handleLogin}>Register</button>
           </form>
        </React.Fragment>)
    }
}
export default RefWithClassComponent;