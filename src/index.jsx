import React from "react";
import ReactDOMClient from "react-dom/client";
import { MainDesktop } from "./screens/MainDesktop";
import {Element} from './screens/Element'
import {FilmPage} from './screens/FilmPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";



export default function App(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" basename="/peru-channels">
                    <Route index element={<MainDesktop/>}></Route>
                    <Route path="*" element={<Element></Element>}></Route>
                    <Route path="/detail" element={<FilmPage></FilmPage>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<App />);
