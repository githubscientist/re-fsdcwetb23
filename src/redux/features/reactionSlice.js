import { createSlice } from "@reduxjs/toolkit";

export const reactionSlice = createSlice({
    name: "reaction",
    initialState: {
        likes: 0,
    },
    reducers: {
        like: (state) => {
            state.likes += 1;
        }
    }
});

export const { like } = reactionSlice.actions;

export const selectLikes = (state) => state.reaction.likes;

export default reactionSlice.reducer;