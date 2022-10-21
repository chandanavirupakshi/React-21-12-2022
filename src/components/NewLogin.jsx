import {useState} from 'react';
import'./css/NewLogin.css';
import "bootstrap/dist/css/bootstrap.min.css";
const NewLogin = () => {
    const [firstname, setFirstname] = useState('')
    const[lastname, setlastname] = useState('')
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [success,setSuccess] = useState('')
    const [error,setError]= useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
       
        if(firstname===""||lastname===""||username===""||password==="") {
            setError("Enter Required Feilds")
            setSuccess("")
        }
        else {
            setSuccess("Login successful")
            setError("")
        }
    }
  return (
    <>
      <div className="container">
          <h1>Registration Form with Function</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
              <label htmlFor="name">Firstname</label>
              <input
              style={{ width: "40%" }}
              type="text"
              id="name"
              value={firstname}
            onChange={(event)=>setFirstname(event.target.value)}
              className="form-control"
              placeholder="Enter First Name"
            />
            <label htmlFor="name">Lastname</label>
              <input
              style={{ width: "40%" }}
              type="text"
              id="name"
              value={lastname}
             onChange={(event)=>setlastname(event.target.value)}
              className="form-control"
              placeholder="Enter LastName"
            />
            <label htmlFor="name">Username:</label>
            <input
              style={{ width: "40%" }}
              type="text"
              id="name"
              value={username}
              onChange={(event)=>setUsername(event.target.value)}
              className="form-control"
              placeholder="Enter Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input
              style={{ width: "40%" }}
              type="password"
              id="pwd"
              value={password}
              onChange={(event)=>setPassword(event.target.value)}
              className="form-control"
              placeholder="Enter password"
            />
          </div><br/>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
          {success?<div className="text-success">{success}</div>:null}
          {error?<div className="text-danger">{error}</div>:null}
        </form>
      </div>
    </>
  );
};
export default NewLogin;