import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const CreatorProfile = ({title,image_url, features})=>{
    return (
        <Card style={{"textAlign":"center","width": "18 rem"}}>
            <Card.Header ><h3>{title}</h3></Card.Header>
            <Card.Img src={image_url} variant="Top"></Card.Img>
            <Card.Body style={{"textAlign":"center"}}>
                <Container>
                <Row>
                    <ul className="list-unstyled mt-3 mb-4">
                        {features.map((feature,key)=><li key={key}><strong>{feature}</strong></li>)}
                    </ul>
                </Row>
                </Container>
            </Card.Body>
        </Card>
    )
}

export const About = ()=>{
    const data = [
        {
            "title":"Oleg",
            "image_url":"https://sun9-56.userapi.com/impg/NUhYbASeg1_CAI5OwnDy6hk2t09LpN8LdYXPtQ/fvX9qjXVrKo.jpg?size=718x1080&quality=96&sign=7c1f25d86f3a5936643306e981c3f08f&c_uniq_tag=0gsYNUa8oArIuqwn0YXfKZz78WF4hVMSTOa06i8NuSw&type=album",
            "features":[
                "Frontend developer"
            ]
        },
        {
            "title":"Pavel",
            "image_url":"https://i.pinimg.com/736x/e3/8a/1e/e38a1ed84ddd8d49e4b33290750120dc.jpg",
            "features":[
                "Backend developer"
            ]
        },
    ]
    const AboutUsData = data.map(
        ({title,image_url,features})=>
            <Col sm>
                <CreatorProfile title={title} image_url={image_url} features={features}>
                </CreatorProfile>
            </Col>

    )
    return(
        <div className="film-page">
            <div className="frame-wrapper">
                <div className="frame">
                    <Header></Header>
                    <div>
                        <h1>CreatedBy</h1>
                        <Container>
                            <Row className="d-flex gap-4">
                            {AboutUsData}
                            </Row>
                        </Container>
                    </div>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    )
}