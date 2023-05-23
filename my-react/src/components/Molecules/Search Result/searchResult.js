import React from 'react';
import styles from './searchResult.module.css'

function SearchResult({results}) {
  return (
    <div className={styles.resultList}>
        {results.map((item,index) => {
            return (
                <div key={index}>{item.state_name}</div>
            )
        })}
    </div>
  )
}

export default SearchResult;