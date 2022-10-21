import React,{useState , useEffect} from 'react';
import axios from 'axios';
function AddEmployee(){
    const[name,setName] = useState('');
    const[dept,setDept] = useState('');
    const[rollno,setRollno]=useState('');
    const[employees,setEmployees] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:4000/employees/").then((res)=>{
          
            setEmployees(res.data);
        },[]);
    });
    const changeName = (e)=>{
        setName(e.target.value);
    }
    const changeDept = (e)=>{
        setDept(e.target.value);
    }
    const changeRollno = (e)=>{
        setRollno(e.traget.value);
    }
    const add = (e)=>{
            e.preventDefault();
                let emp = {name:name,dept:dept,rollno:rollno};
                axios.post("http://localhost:4000/employees/",emp).then((res)=>{
                    console.log(res);
                });
         
    }
    return (<>
    <form>
        <label htmlFor='name'>Name:</label>
        <input type="text" name="name" id="name" value={name} onChange={changeName}/><br /><br />
        <label htmlFor='dept'>Dept:</label>
        <input type="text" name="dept" id="dept" value={dept} onChange={changeDept}/><br /><br />
        <label htmlFor='name'>Rollno:</label>
        <input type="text" name="rollno" id="rollno" value={rollno} onChange={changeRollno}/><br /><br />
        <input type="submit" value="Add Employee" onClick={add}/>
        <table>
            <thead>
                <tr><th>ID</th><th>Name</th><th>Dept</th><th>Rollno</th></tr>
            </thead>
            <tbody>
                {employees.map((emp)=>{
                    return <tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.dept}</td>
                        <td>{emp.rollno}</td>

                    </tr>
                })}
            </tbody>
        </table>
    </form>
    </>);
}

export default AddEmployee;
