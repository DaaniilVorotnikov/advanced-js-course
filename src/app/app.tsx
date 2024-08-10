import React, { Suspense, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Counter } from "../components/counter/counter";
import './styles/index.scss';
import { AboutPageAsync } from "pages/about-page/ui/about-page.async";
import { MainPageAsync } from "pages/main-page/ui/main-page.async";
import { classNames } from "helpers/classNames/classNames";
import { useTheme } from "app/providers/theme-provider";
import { AboutPage } from "pages/about-page";
import { MainPage } from "pages/main-page";
import { routeConfig } from "shared/config/routeConfig";
import AppRouter from "./providers/router/ui/app-router";
import { Navbar } from "widgets/navbar";
import { ThemeSwitcher } from "shared/ui/theme-switcher";
import { Sidebar } from "widgets/sidebar";




const App = () => {

    const {theme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
            <Navbar className="normal"/>
            <div className="content-page">
                <Sidebar/>
                <AppRouter/>
            </div>
            </Suspense>
        </div>
    )
}

export default App;
