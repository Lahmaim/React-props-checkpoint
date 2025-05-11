import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
export default function Player(props) {
    return (
        <>
            <Card id="cardContainer">
                <Card.Img variant="top" src={props.image} />
                <Card.Body className="headerCard">
                    <Card.Title className="title"> {props.name}</Card.Title>
                    <span>{props.age} </span>/
                    <span style={{ fontWeight: 500 }}>{props.nationality}</span>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>
                        <span>Team : </span>
                        <strong>{props.team}</strong>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <span>Number : </span>
                        <strong>{props.jerseyNumber}</strong>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </>
    );
}
