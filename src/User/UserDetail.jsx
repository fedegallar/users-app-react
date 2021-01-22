function UserDetail(props){
    if(props.user.cuil !== ""){
    return <div>
        <h3>{props.user.name}, {props.user.lastname}</h3>
        <ul>
            <li>Birth date: {props.user.birthdate}</li>
            <li>CUIL: {props.user.cuil}</li>
            <li>Phone: {props.user.phone}</li>
            <li>Address: {props.user.address}</li>
        </ul>
    </div>
    }else{
        return <div/>
    }
}
export default UserDetail;