import React from 'react';
import './App.css';
import {Navbar} from "./layouts/NavbarAndFooter/Navbar";
import {Footer} from "./layouts/NavbarAndFooter/Footer";
import {SearchBooksPage} from "./layouts/SearchBooksPage/SearchBooksPage";

export const App = () => {
    return (
        <>
            <Navbar/>
            {/*<HomePage/>*/}
            <SearchBooksPage/>
            <Footer/>
        </>
    );
}
