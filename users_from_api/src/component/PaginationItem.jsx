const PaginationItem = ({page, currentPage, onClick, text = page}) => {
    const classes = (page) => page === currentPage ? 'active' : '';
    const linkWrap = page === currentPage ? text : <a className="page-link clickable" onClick={() => onClick(page)}>{text}</a>;

    return (
        <li key={text} className={classes(page)}>{linkWrap}</li>
    );
}
export default PaginationItem;