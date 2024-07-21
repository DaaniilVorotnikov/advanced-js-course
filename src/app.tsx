import React, { Suspense, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Counter } from "./components/counter/counter";
import './styles/index.scss';
import { AboutPageAsync } from "./pages/about-page/about-page.async";
import { MainPageAsync } from "./pages/main-page/main-page.async";
import { Theme, ThemeContext } from "./theme/theme-context";
import { useTheme } from "./theme/use-theme";
import { classNames } from "./helpers/classNames/classNames";




const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to={'/'}>
                Главная
            </Link>
            <Link to={'/about'}>
                О сайте
            </Link>
            <button onClick={toggleTheme}> Theme </button>
            <Suspense fallback={<div> Loading... </div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />}/>
                    <Route path={'/'} element={<MainPageAsync />}/>
                </Routes>     
            </Suspense>
            {/* <Counter/> */}
        </div>
    )
}

export default App;