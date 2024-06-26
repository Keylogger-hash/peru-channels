import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";


export const Contacts = ()=>{
    return(
        <div className="film-page">
            <div className="frame-wrapper">
                <div className="frame">
                    <Header></Header>
                    <div>
                    Contacts: <strong>peru-channels@gmail.com</strong>
                    </div>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    )
}