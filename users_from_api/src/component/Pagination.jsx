import _ from 'lodash';
import PaginationItem from './PaginationItem';

const Pagination = ({totalPages, currentPage, onPageChange}) => {

    if (totalPages === 1) return null;

    const pages = _.range(1, totalPages+1);

    return (
        <nav>
            <ul className="pagination">
                <PaginationItem page = {1} currentPage={currentPage} onClick={onPageChange}  text='&lt;&lt;' />
                <PaginationItem page = {currentPage-1 < 1 ? 1 : currentPage-1} currentPage={currentPage} onClick={onPageChange} text='&lt;' />
                {pages.map(page => (
                    <PaginationItem page = {page} currentPage={currentPage} onClick={onPageChange}  />
                ))}
                <PaginationItem page = {currentPage+1 > totalPages ? totalPages : currentPage+1} currentPage={currentPage} onClick={onPageChange}  text='&gt;' />
                <PaginationItem page = {totalPages} currentPage={currentPage} onClick={onPageChange}  text='&gt;&gt;' />
            </ul>
        </nav>
    );
}
 
export default Pagination;