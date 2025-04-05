import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/slices/FavourateSlice";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const GameCard = ({ game }) => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.favorites.favorites);
    const isFavorite = favorites.some((fav) => fav.id === game.id);

    const handleFavorite = () => {
        if (isFavorite) {
            dispatch(removeFavorite(game.id));
        } else {
            dispatch(addFavorite(game));
        }
    };

    return (
        <Card className="game-card">
            <Link to={`/game/${game.id}`}>
                <Card.Img variant="top" src={game.background_image} alt={game.name} />
            </Link>
            <Card.Body>
                <Card.Title>{game.name}</Card.Title>
                <Card.Text>
                    <Badge bg="info">{game.tags?.[0]?.name || "No Tag"}</Badge>{" "}
                    <Badge bg="secondary">{game.genres?.[0]?.name || "No Category"}</Badge>
                </Card.Text>
                <Card.Text>⭐ {game.rating}</Card.Text>
                <Button variant={isFavorite ? "danger" : "primary"} onClick={handleFavorite}>
                    {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
                </Button>
            </Card.Body>
        </Card>
    );
};

export default GameCard;
