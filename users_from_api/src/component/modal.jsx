function Modal(user) {
    return (
        <div id="modal">
            <h2 className='list-head'>Profile</h2>
            <div>{user.id}</div>
            <div>{user.first_name}</div>
            <div>{user.last_name}</div>
            <div>{user.email}</div>

        </div>
    );
}
export default Modal;