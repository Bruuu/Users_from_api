import _ from 'lodash';

const Pagination = ({totalPages, currentPage, onPageChange}) => {

    if (totalPages === 1) return null;

    const pages = _.range(1, totalPages+1);
    
    return (
        <nav>
            <ul className="pagination">
            <li> <a className="page-link clickable" onClick={() => onPageChange(currentPage-1)}>&lt;&lt;</a></li>
                {pages.map(page => (
                    <li className={ page === currentPage ? 'page-item active' : 'page-item' } key={page}>
                        <a className="page-link clickable" onClick={() => onPageChange(page)}>{page}
                        </a>
                    </li>
                ))}
                <li> <a className="page-link clickable" onClick={() => onPageChange(currentPage+1 )}>&gt;&gt;</a></li>
            </ul>
        </nav>
    );
}
 
export default Pagination;