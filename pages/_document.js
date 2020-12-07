import Document, { Head, Main, NextScript,Html } from 'next/document'
import React from "react";
import App from '../pages/_app'
import {resetServerContext} from "react-beautiful-dnd";


class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const page = await ctx.renderPage();
        const initialProps = await Document.getInitialProps(ctx);
        resetServerContext();
        return { ...initialProps, ...page,};
    }


    render() {
        return (
            <Html>
                <Head />
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>)
    }

}



export default MyDocument
