//import logo from './logo.svg';
import './App.css';
import React from 'react';
import './components/Login';
import './components/LoginClassComponent';
import './components/NewLogin';
import'./components/LoginWithClass';
import './components/RefWithClassComponent';
import'./components/RefWithFunctionalComponent';
import './components/RestApiCall/AddEmployee';
//import './components/RestApiCall/EmployeeCrud';
import axios from 'axios';
// import HeaderComponent from './components/HeaderComponent';

//import ContentComponent from './components/ContentComponent';
import NewLogin from './components/NewLogin';
import LoginWithClass from './components/LoginWithClass';
import RefWithClassComponent from './components/RefWithClassComponent';
import RefWithFunctionalComponent from './components/RefWithFunctionalComponent';
import AddEmployee from './components/RestApiCall/AddEmployee';
// import ProductComponent from './components/ProductComponent';
// import ButtonComponent from './components/ButtonComponent';
// import Button from 'react-bootstrap/Button';
// import SimpleAccordion from './components/materialComponents/SimpleAccordion';
// import CounterCompoent from './components/CounterComponent';
// import CounterFunctionalComponent from './components/CounterFunctionalComponent';
function App() {
  // const employeesArr = [
  //   {
  //     id:101,
  //     name:"John",
  //     dept:"IT",
  //     desg:"Manager"
  //   },
  //   {
  //     id:102,
  //     name:"Foo",
  //     dept:"Admin",
  //     desg:"Manager"
  //   },
  //   {
  //     id:103,
  //     name:"BAR",
  //     dept:"HR",
  //     desg:"ASST Manager"
  //   },
  //   {
  //     id:104,
  //     name:"Elle",
  //     dept:"IT",
  //     desg:"Developer"
  //   }
  // ];
  // const employeesArr1 = [
  //   {
  //     id:101,
  //     name:"John",
  //     dept:"IT",
  //     isMarried:false
  //   },
  //   {
  //     id:102,
  //     name:"Foo",
  //     dept:"Admin",
  //     isMarried:false
  //   },
  //   {
  //     id:103,
  //     name:"BAR",
  //     dept:"HR",
  //     isMarried:false
  //   },
  //   {
  //     id:104,
  //     name:"Elle",
  //     dept:"IT",
  //     isMarried:false
  //   }
  //
//];
  return (
    <div>
       <AddEmployee/>
<NewLogin/> 
<LoginWithClass/>
<RefWithClassComponent/>
<RefWithFunctionalComponent/> 
    {/* <div className="App">
    {
    
    <ContentComponent employees={employeesArr}></ContentComponent>
      
    }
    </div> */}
</div>
  );

    


}

export default App;