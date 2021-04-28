function UsersTable({users, showModal}){
    if (users.length === 0  ) {
        return (
            <div>The data is loading...</div>
        )
    }
    return (
        <div className="table-wrapper">
            <div className="table-scroll">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="" key= 'id' >ID</th>
                            <th className="" key= 'first_name' >Given Name</th>
                            <th className="" key= 'last_name' >Family Name</th>
                            <th className="" key= 'email' >Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr className="clickable" onClick={() => showModal(user)} key= {user.id} >
                                <td key= {user.id} >{user.id}</td>
                                <td key= {user.first_name} >{user.first_name}</td>
                                <td key= {user.last_name} >{user.last_name}</td>
                                <td key= {user.email} >{user.email}</td>
                            </tr>
                        ))}
                    </tbody>    
                </table>
            </div>
        </div>
    )
}
export default UsersTable;