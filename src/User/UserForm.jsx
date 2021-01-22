function UserForm(props){
  return <div>
    <ul>
    {props.errors.map((value,index) => {
            return <li>{value}</li>
        })}
    </ul>
    <form onSubmit={props.handleSubmit}>
      <label htmlFor="fName">Name:</label><br/>
      <input type="text" name="name" value={props.formval.name} onChange={props.handleFormVal}/><br/>
      <label htmlFor="Name">Lastname:</label><br/>
      <input type="text" name="lastname" value={props.formval.lastname} onChange={props.handleFormVal}/><br/>
      <label htmlFor="Cuil">Cuil:</label><br/>
      <input type="text" name="cuil" value={props.formval.cuil} onChange={props.handleFormVal}/><br/>
      <label htmlFor="Birthdate">Birth date:</label><br/>
      <input type="date" name="birthdate" value={props.formval.birthdate} onChange={props.handleFormVal}/><br/>
      <label htmlFor="Phone">Phone:</label><br/>
      <input type="text" name="phone" value={props.formval.phone} onChange={props.handleFormVal}/><br/>
      <label htmlFor="Address">Address:</label><br/>
      <input type="text" name="address" value={props.formval.address} onChange={props.handleFormVal}/><br/><br/>
      <input type="button" value="Añadir" onClick={props.handleSubmit}/>
    </form>
  </div>
}
export default UserForm;