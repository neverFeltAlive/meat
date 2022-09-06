import '../styles/global.sass'
import type {AppProps} from 'next/app'
import Header from "../components/header/Header";
import React from "react";
import {motion} from "framer-motion";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <>
            <div className="background">
                <div className="background__overlay"/>
            </div>
            <Header/>
            <main>
                <Component {...pageProps} />
            </main>
        </>
    )
}

export default MyApp
