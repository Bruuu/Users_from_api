import './App.css';
import { useEffect, useState } from 'react';
import UsersTable from './component/usersTable';
import Pagination from './component/Pagination';
import './App.css';
import Modal from './component/modal';
import Search from './component/search';

const apiUrl = `https://reqres.in/api/users`;
const perPage = 6;

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [show, setShow] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    getApiUserWithFetch(currentPage);
  }, [currentPage]);

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

  const handleModal = user => {
    if (show.id === user.id) setShow(false);
    else setShow(user);
  }
  
  const doFilter = () => {
    if (!query)
      return userData;
    return userData.filter(user => (['first_name', 'last_name', 'email'].some(attribute => user[attribute].indexOf(query) !== -1)));
  };

  const filterUsers = doFilter();

  const handleCleanQuery = () => {
    setQuery('');
  }
  
  return (
    <div className='App'>
      <h1>Users</h1>
      <Search onClick={() => handleCleanQuery()} value={query}
        onChange={e => setQuery(e.target.value.replace(/ /g, ''))} />
      {isLoading && <p>Wait I'm Loading users for you</p>}
      {!isLoading && <UsersTable
         users={filterUsers}
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
