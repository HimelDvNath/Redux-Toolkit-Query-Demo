"use client";

import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/rtk/store";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar1";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store}>
            <ThemeProvider
                attribute='class'
                defaultTheme='system'
                enableSystem
                disableTransitionOnChange>
                <Navbar />
                <Component {...pageProps} />
            </ThemeProvider>
        </Provider>
    );
}
