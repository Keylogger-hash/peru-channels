import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const PricingCard = ({title,price,currency,features})=>{
    return (
        <Card style={{"textAlign":"center"}}>
            <Card.Header >{title}</Card.Header>
            <Card.Body style={{"textAlign":"center"}}>
                <Container>
                <Row style={{"textAlign":"center"}}><strong>{price} {currency}/mo</strong></Row>
                <Row><ul className="list-unstyled mt-3 mb-4">
                        {features.map((feature,key)=><li key={key}>{feature}</li>)}
                    </ul>
                </Row>
                <Row><Button>GetStarted</Button></Row>
                </Container>
            </Card.Body>
        </Card>
    )
}

export const Pricing = ()=>{
    let data = [
        {
            'title':'Free',
            'price': 0,
            'currency':'$',
            'features':[
                "10 free channels",
                "2 premium channels",
                "Email support",
                "Help center access"
            ],
        },
        {
            'title':'Base',
            'price': 10,
            'currency':'$',
            'features':[
                "10 free channels",
                "200 premium channels",
                "Email support",
                "Help center access"
            ],        
        },
        {
            'title':'Premium',
            'price': 20,
            'currency':'$',
            'features':[
                "10 free channels",
                "All available channels",
                "Phone and Email support",
                "Help center access"
            ],            },
    ]
    let PricingCards = data.map(
        ({title,price,currency,features})=>
            <Col sm><PricingCard title={title} price={price} currency={currency} features={features}></PricingCard></Col>
    )
    return(
        <div className="film-page">
            <div className="frame-wrapper">
                <div className="frame">
                    <Header></Header>
                    <h1>
                    Pricing
                    </h1>
                    <Container>
                        <Row>
                        {PricingCards}
                        </Row>
                    </Container>
                    <Footer></Footer>
                </div>
            </div>
        </div>
    )
}