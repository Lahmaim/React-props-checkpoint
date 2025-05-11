import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import players from "./players";
import Player from "./Player";

export default function PlayersList() {
    return (
        <>
            <Container>
                <Row>
                    {players.map((player, index) => {
                        return (
                            <Col xl={3} lg={4} sm={6} gap={2} className="mb-3">
                                <div key={index}>
                                    <Player
                                        image={player.image}
                                        name={player.name}
                                        age={player.age}
                                        team={player.team}
                                        jerseyNumber={player.jerseyNumber}
                                        nationality={player.nationality}
                                    />
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </>
    );
}
