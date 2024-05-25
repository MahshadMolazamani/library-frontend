import React from 'react';
import './App.css';
import {Navbar} from "./layouts/NavbarAndFooter/Navbar";
import {Footer} from "./layouts/NavbarAndFooter/Footer";
import {SearchBooksPage} from "./layouts/SearchBooksPage/SearchBooksPage";
import {HomePage} from './layouts/HomePage/HomePage';
import {Route} from "react-router-dom";

export const App = () => {
    return (
        <>
            <Navbar/>
            <Route path='/' exact>
                <HomePage/>
            </Route>

            <Route path='/search'>
                <SearchBooksPage/>
            </Route>

            <Footer/>
        </>
    );
}
