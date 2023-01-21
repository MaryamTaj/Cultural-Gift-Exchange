import "../App.css";
import {TbChristmasTree} from 'react-icons/tb';
import {BsMoonStars} from 'react-icons/bs'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "bootstrap/dist/css/bootstrap.min.css";
function Welcome(){
return <div>
<h1>Welcome to Cultural Gift Exchange!</h1>
<h2>Choose a Festival!</h2>
<Container>
    <Row>
    <Col>
     <Button variant="outline-dark"><TbChristmasTree size={100}/></Button>
    </Col>
    
    <Col>
   <Button variant="outline-dark"><BsMoonStars size={100}/></Button>
    </Col>
    </Row>
</Container>
</div>
}

export default Welcome;