import React from 'react';

function List(repos) {
    if (!repos || repos.length === 0) return <p>No repos, sorry</p>;
    return (
        <div id="list">
            <h2 className='list-head'>Users</h2>
            <div>{repos.data}</div>
        </div>
        
        /* {repos.map((repo) => {
            return (
            <li key={repo.id} className='list'>
                <span className='repo-text'>{repo.name} </span>
                <span className='repo-description'>{repo.description}</span>
            </li>
            );
        })} */
  );
}

export default List;