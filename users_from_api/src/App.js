import './App.css';
import { useEffect, useState } from 'react';
import UsersTable from './component/usersTable';
import Pagination from './component/Pagination';

const apiUrl = `https://reqres.in/api/users`;

function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [total, setTotal] = useState();

  useEffect(() => {
    getApiUserWithFetch(currentPage);
  }, [total, currentPage]);

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

  const handleHover = user => {
    console.log('Hover: ', user)   
  }

  const handlePageChange = page => {
    setCurrentPage(page);
  }

//     const movies = paginate(sorted, currentPage, pageSize);

//     return {totalCount: movies};
// }

  return (
    <div className='App'>
      <h1>Users</h1>
      {isLoading && <p>Wait I'm Loading users for you</p>}
      {!isLoading && <UsersTable
         users={userData}
       />
      }
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default App;
