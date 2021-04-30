function Modal({userShow}) {
    return (
        <div className="modal">
            <div className='head'>Profile</div>
            <div className="content">
                <img src= {userShow.avatar} alt="avatar" />
                <div>User id: {userShow.id}</div>
                <div>Given Name: {userShow.first_name}</div>
                <div>Family Name: {userShow.last_name}</div>
                <div>Email: {userShow.email}</div>
            </div>
            
        </div>
    );
}
export default Modal;