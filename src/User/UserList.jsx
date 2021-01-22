function UserList(props){
    return <ul>
        {props.users.map((value,index) => {
            return <li>{value.name}, {value.lastname} | <a href="!#" onClick={() => props.handleUserDetail(index)}>Details</a> | <a href="!#" onClick={() => props.handleDeleteUser(index)}>Delete</a></li>
        })}
    </ul>;
}
export default UserList;