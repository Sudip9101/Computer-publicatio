// components/AddResearchArticle.js
import React from 'react';
import styles from './AddResearchArticle.css';
import Image from 'next/image';
import logo from '../logo.jpeg';
import cc from '../cc bg.jpeg';
const AddResearchArticle = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image src={logo} alt="University Logo" className='logo' />
        <h1>Netaji Subhas University of Technology</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Research</li>
            <li>Education</li>
            <li>People</li>
            <li>Contact Us</li>
            <li>Admin Login</li>
          </ul>
        </nav>
      </header>
      <main>
        <h2>WELCOME ADMIN!</h2>
      <Image src={cc} alt="bg" className='cc' />
        <h3>Add New Research Article</h3>
        <p>Fill in the details below</p>
        <form>
          <div className='one'>

          <div className='formGroup'>
            <label>Title</label>
            <input type="text" name="title" />
          </div>
          <div className='formGroup'>
            <label>Description</label>
            <input type="text" name="description" />
          </div>
          </div>
          <div className="two">

          <div className='formGroup'>
            <label>Link</label>
            <input type="text" name="link" />
          </div>
          <div className='formGroup'>
            <label>Remarks</label>
            <input type="text" name="remarks" />
          </div>
          </div>
          <div className='formAction'>
            <button type="button" className='clear'>Clear</button>
            <button type="submit" className='submit'>Submit</button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default AddResearchArticle;
