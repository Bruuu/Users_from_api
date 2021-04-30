import './App.css';
import { useEffect, useState } from 'react';
import UsersTable from './component/usersTable';
import Pagination from './component/Pagination';
import './App.css';
import Modal from './component/modal';

const apiUrl = `https://reqres.in/api/users`;
const perPage = 6;

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
    if (show.id === user.id) setShow(false);
    else setShow(user);
  }

  const getApiUserWithFetch = async (currentPage) => {
    fetch(`${apiUrl}?page=${currentPage}&per_page=${perPage}`)
      .then(results => results.json())
      .then(({total_pages, data}) => {
        setUserData(data);
        setTotalPages(total_pages);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  };

  const handlePageChange = newpage => {
    if ((newpage > 0) && (newpage <= totalPages))
      setCurrentPage(newpage);
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
      {show && <Modal userShow={show} onClick={handleModal} />}
    </div>
  );
}

export default App;
