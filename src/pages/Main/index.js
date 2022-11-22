import React from 'react';
import EWDSLayout from "@/pages/Layout";
import {Link} from 'react-router-dom';

const MainContent = () =>{
    <Link>Content</Link>
}

const Main = () => (
    EWDSLayout(<MainContent/>)
);
export default Main;