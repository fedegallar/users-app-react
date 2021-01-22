import UserForm from './User/UserForm.jsx'
import UserList from './User/UserList.jsx'
import UserDetail from './User/UserDetail.jsx'
import {useState} from 'react';

function App() {
  
  const initVal = {
    name: "",
    lastname: "",
    cuil:"",
    birthdate:"",
    phone: "",
    address: ""
  };
  
  const [users, setUsers] = useState([]);
  const [formval, setFormval] = useState(initVal);
  const [currentuser, setCurrentuser] = useState(Object);
  const [errors, setErrors ] = useState([""]);

  const handleSubmit = (event) => {
    const errList = [];
    const numberegex = /^\d+$/;
    if(formval.name.length < 4){
      errList.push("Name must have more than 4 letters.");
    }
    if(formval.lastname.length < 4){
      errList.push("Lastname must have more than 4 letters.");
    }
    if(formval.cuil.length === 11){
      errList.push("CUIL must have 11 numbers.");
    }
    if(!numberegex.test(formval.cuil)){
      errList.push("CUIL must have only numbers.");
    }
    if(formval.birthdate === ""){
      errList.push("Birth date must not be empty.");
    }
    if(formval.phone.length < 7){
      errList.push("Phone must have more than 7 numbers.");
    }
    if(!numberegex.test(formval.phone)){
      errList.push("Phone must have only numbers.");
    }
    if(formval.address.length < 10){
      errList.push("Address must have more than 10 letters.");
    }
    if(errList.length>0){
      setErrors(errList);
    }else{
      setUsers(users.concat(formval));
      setFormval(initVal);
    }
  };

  const handleFormVal = (event) => {
    const {name, value} = event.target;
    setFormval({...formval,[name]:value});
  }

  const handleDeleteUser = (index) => {
    const FilteredUsers = users.filter(function(value,arrindex){
      return index !== arrindex;
    });
    setUsers(FilteredUsers);
  }
  
  const handleUserDetail = (index) => {
    setCurrentuser(users[index]);
  }

  if(users.length === 0){
    return <UserForm handleSubmit={handleSubmit} formval={formval} handleFormVal={handleFormVal} errors={errors}/>
  }
  else{
    return <div>
      <UserForm handleSubmit={handleSubmit} formval={formval} handleFormVal={handleFormVal} errors={errors}/>
      <hr/>
      <UserList users={users} handleDeleteUser={handleDeleteUser} handleUserDetail={handleUserDetail}/>
      <hr/>
      <UserDetail user={currentuser}/>
    </div>;
  }
}

export default App;
