import React from 'react';
import { useResultContext } from '../../context/ResultsContext';
import NavBarComponent from '../Home/NavBarComponent';
import Search from '../Search/Search';

const Home = () => {
    const {dark,setDark}=useResultContext()
    return (
        <div >
           <NavBarComponent dark={dark} setDark={setDark} />
           <Search />
        </div>
    );
};

export default Home;