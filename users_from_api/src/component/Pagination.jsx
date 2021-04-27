import _ from 'lodash';

const Pagination = ({totalPages, currentPage, onPageChange}) => {
    if (totalPages === 1) return null;

    const pages = _.range(1, totalPages+1);
    
    return (
        <nav>
            <ul className="pagination">
                {pages.map(page => (
                    <li className={ page === currentPage ? 'page-item active' : 'page-item' } key={page}>
                        <a className="page-link" onClick={() => onPageChange(page)}>{page}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
 
export default Pagination;