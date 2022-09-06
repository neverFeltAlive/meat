import '../styles/global.sass'
import type {AppProps} from 'next/app'
import Header from "../components/header/Header";
import React from "react";
import {Provider} from "react-redux";
import {store} from "../app/store";

function MyApp({Component, pageProps}: AppProps) {
    return (
        <Provider store={store}>
            <Header/>
            <main>
                <Component {...pageProps} />
            </main>
        </Provider>
    )
}

export default MyApp
