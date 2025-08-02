import { createSlice } from "@reduxjs/toolkit";

export const reactionSlice = createSlice({
    name: "reaction",
    initialState: {
        likes: 0,
        dislikes: 0
    },
    reducers: {
        like: (state) => {
            state.likes += 1;
        },
        dislike: (state) => {
            state.dislikes += 1;
        }
    }
});

export const { like, dislike } = reactionSlice.actions;

export const selectLikes = (state) => state.reaction.likes;
export const selectDislikes = (state) => state.reaction.dislikes;

export default reactionSlice.reducer;