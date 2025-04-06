import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    favorites: [],
};

const BookmarkSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            state.favorites.push(action.payload);
        },
        removeFavorite: (state, action) => {
            state.favorites = state.favorites.filter(game => game.id !== action.payload);
        },
    },
});

export const { addFavorite, removeFavorite } = BookmarkSlice.actions;
export default BookmarkSlice.reducer;
