const Search = ({value, onClick, onChange}) => {
    return (
        <div className='search'>
            <input value={value} id='search_input' placeholder='Search...' onChange={onChange}></input>
            <button onClick={onClick}>Clean</button>
        </div>
    );
}
export default Search;