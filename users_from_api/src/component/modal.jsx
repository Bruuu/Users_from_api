function Modal({userShow, onClick}) {
    return (
        <div className="modal" key={`modal-${userShow.id}`}>
            <div className='head'>Profile</div>
            <div className="content">
                <img className="centered" src= {userShow.avatar} alt="avatar" />
                <table class="tbl-modal">
                    <tr>
                        <td>User id:</td>
                        <td>{userShow.id}</td>
                    </tr>
                    <tr>
                        <td>Given Name:</td>
                        <td>{userShow.first_name}</td>
                    </tr>
                    <tr>
                        <td>Family Name:</td>
                        <td>{userShow.last_name}</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>{userShow.email}</td>
                    </tr>
                </table>
            </div>
            <button className="btn centered" onClick={()=> onClick(userShow)}>Close</button>
        </div>
    );
}
export default Modal;