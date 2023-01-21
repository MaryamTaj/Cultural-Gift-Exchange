import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/esm/Button";
function CollectInfoE(){
  
function getNames(){
        
class Member{
    constructor(name,assigned_person){
        this.name= '';
        this.assigned_person= '';
    }
}
var names=[]
var assigningPeople=[]
for(let i=1;i<=4;i++){
   var member = Member(document.getElementById('name'+toString({i})).value)
   names.push(member)
   assigningPeople.push(member)
}

names.forEach(function(member){
   member.assigned_person= assigningPeople[Math.floor(Math.random()*assigningPeople.length)]

   assigningPeople.indexOf(member.assigned_person)
})
    console.log(names)}
    return <div>
        <h1>Enter Names!</h1>
        
        <Container>
        <Row>
        <Col>
        <label>Enter Name:</label>
        <input type='text' id='name1' ></input>
        </Col>
        </Row>
        <Row>
        <Col>
        <label>Enter Name:</label>
        <input type='text' id='name2' ></input>
        </Col>
        </Row>
        <Row>
        <Col>
        <label>Enter Name:</label>
        <input type='text' id='name3' ></input>
        </Col>
        </Row>
        <Row>
        <Col>
        <label></label>
        <input type='text' id='name4' ></input>
        </Col>
        </Row>
        </Container>
        <Button onClick={getNames}>Submit</Button>
    </div>
}

export default CollectInfoE;