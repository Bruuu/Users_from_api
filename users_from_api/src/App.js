import './App.css';
import { useEffect, useState } from 'react';
import UsersTable from './component/usersTable';
import Pagination from './component/Pagination';
import './App.css';
import Modal from './component/modal';

const apiUrl = `https://reqres.in/api/users`;

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [total, setTotal] = useState();
  const [show, setShow] = useState(false)

  useEffect(() => {
    getApiUserWithFetch(currentPage);
  }, [total, currentPage]);

  const handleModal = user => {
    if (show.id === user.id){
      console.log("remove show");
      setShow(false);
    }
    else
{
    console.log("set show");
      setShow(user);
}
  }

  const getApiUserWithFetch = async (currentPage) => {
    fetch(`${apiUrl}?page=${currentPage}`)
      .then(results => results.json())
      .then(({total_pages, data}) => {
        setUserData(data);
        setTotalPages(total_pages);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  };

  const handlePageChange = page => {
    setCurrentPage(page);
  }
  return (
    <div className='App'>
      <h1>Users</h1>
      {isLoading && <p>Wait I'm Loading users for you</p>}
      {!isLoading && <UsersTable
         users={userData}
         showModal={handleModal}
       />
      }
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      { console.log(!show)}
      { console.log(show.id)}
      {show && <Modal userShow={show} />}
    </div>
  );
}

export default App;
