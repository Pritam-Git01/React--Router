import React from "react";
import styles from "./searchbar.module.css";
import { BiSearch } from "react-icons/bi";
import { useState} from "react";
import {IoMdMic} from 'react-icons/io';


function SearchBar({setResults}) {
    const [input,setInput] = useState("");

    const  fetchData =  async (value) => {

        const response = await fetch('https://cdn-api.co-vin.in/api/v2/admin/location/states');
        const result = await response.json();

        const suggestion = result.states.filter((state) => {
            return (
                value && state && state.state_name && state.state_name.toLowerCase().includes(value)
            );

        })
        setResults(suggestion)
    }

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }

   
  return (
    <section className={styles.section}>
    <div className={styles.wraper}>
      
        <span className={styles.icon}>< BiSearch /></span>
        <input type="serach" placeholder="Search" onChange={(e) => handleChange(e.target.value)} value={input} />
        <span className={styles.mic}><IoMdMic/></span>
        
     
    </div>
    
    </section>
  );
}

export default SearchBar;
