import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Spinner, Alert, Image, Badge } from "react-bootstrap";

const GameDetail = () => {
  const { id } = useParams();  // get game ID from route
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

  useEffect(() => {
    const fetchGameDetails = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);

        setGame(res.data);
      } catch (err) {
        setError("Failed to fetch game details. Try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchGameDetails();
  }, [id, API_KEY]);

  if (loading) {
    return (
      <Container className="text-center my-5">
        <Spinner animation="border" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="my-5">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  if (!game) return null;

  return (
    <Container className="my-4">
      <Row>
        <Col md={5}>
          <Image src={game.background_image} alt={game.name} fluid rounded />
        </Col>
        <Col md={7}>
          <h2>{game.name}</h2>
          <p dangerouslySetInnerHTML={{ __html: game.description }}></p>

          <h5>Released: <span className="text-muted">{game.released}</span></h5>

          <h5>Platforms:</h5>
          <div className="mb-2">
            {game.platforms.map(p => (
              <Badge key={p.platform.id} bg="secondary" className="me-2">
                {p.platform.name}
              </Badge>
            ))}
          </div>

          <h5>Genres:</h5>
          <div className="mb-2">
            {game.genres.map(g => (
              <Badge key={g.id} bg="info" className="me-2">
                {g.name}
              </Badge>
            ))}
          </div>

          <h5>Rating: <Badge bg="success">{game.rating} ⭐</Badge></h5>

          {game.metacritic && (
            <h5>Metacritic: <Badge bg="warning">{game.metacritic}</Badge></h5>
          )}
        </Col>
      </Row>

      {game.background_image_additional && (
        <Row className="mt-4">
          <Col>
            <h4>Screenshots</h4>
            <Image src={game.background_image_additional} fluid rounded />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default GameDetail;