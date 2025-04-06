import { configureStore } from "@reduxjs/toolkit";
import BookmarkReducer from "./slices/BookmarkSlice"; 
import gameReducer from "./slices/gameSlice";
import filterReducer from "./slices/filterSlice";

const loadFavorites = () => {
    try {
        const markedState = localStorage.getItem("favorites");
        return markedState ? JSON.parse(markedState) : [];
    } catch (error) {
        console.error("Error loading favorites:", error);
        return [];
    }
};

const saveFavorites = (favorites) => {
    try {
        const markedState = JSON.stringify(favorites);
        localStorage.setItem("favorites", markedState);
    } catch (error) {
        console.error("Error saving favorites:", error);
    }
};

export const store = configureStore({
    reducer: {
        favorites: BookmarkReducer,
        games: gameReducer,
        filters: filterReducer,
    },
    preloadedState: {
        favorites: { favorites: loadFavorites() },
    },
});

store.subscribe(() => {
    try {
        const { favorites } = store.getState();
        saveFavorites(favorites.favorites);
    } catch (error) {
        console.error("Error subscribing to store:", error);
    }
});

export default store;