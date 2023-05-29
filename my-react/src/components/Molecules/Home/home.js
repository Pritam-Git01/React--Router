import React from 'react';
import styles from './home.module.css'
import {RiAdminFill} from 'react-icons/ri';
import {FaUserGraduate} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>

    <button className={styles.admin} onClick={() => navigate('/admin')}><RiAdminFill/></button>
    <button className={styles.user} onClick={() => navigate('/user')}><FaUserGraduate/></button>

    </div>
  )
}

export default Home