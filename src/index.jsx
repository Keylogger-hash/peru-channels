import React, { useEffect } from "react";
import ReactDOMClient from "react-dom/client";
import { MainDesktop } from "./screens/MainDesktop";
import {Element} from './screens/Element'
import {FilmPage} from './screens/FilmPage'
import {About} from './screens/About'
import {Pricing} from './screens/Pricing'
import {Contacts} from './screens/Contacts'
import { BrowserRouter, Routes, Route,useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';


function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default function App(){
    return (
            <BrowserRouter>
                <ScrollToTop/>
                    <Routes>
                        <Route path="peru-channels">
                            <Route index element={<MainDesktop/>}></Route>
                            <Route path="*" element={<Element></Element>}></Route>
                            <Route path="/peru-channels/detail/:id" element={<FilmPage></FilmPage>}></Route>
                            <Route path="/peru-channels/pricing" element={<Pricing></Pricing>}></Route>
                            <Route path="/peru-channels/about" element={<About></About>}></Route>
                            <Route path="/peru-channels/contacts" element={<Contacts></Contacts>}></Route>
                        </Route>
                    </Routes>
            </BrowserRouter>
    )
}

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<App />);
