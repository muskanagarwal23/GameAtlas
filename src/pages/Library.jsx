import React from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import GameCard from "../components/GameCard";

const Library = () => {
    const favorites = useSelector((state) => state.favorites.favorites);

    return (
        <Container>
            <h2 className="text-center my-4">Your Favorite Games 🎮</h2>
            {favorites.length === 0 ? (
                <h4 className="text-center text-muted">No favorites yet! Add some games. ⭐</h4>
            ) : (
                <Row>
                    {favorites.map((game) => (
                        <Col key={game.id} md={4} sm={6} xs={12}>
                            <GameCard game={game} />
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default Library;
