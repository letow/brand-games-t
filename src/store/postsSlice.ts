import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Post } from "../types/Post";

type PostsState = {
    posts: Post[];
    status: "loading" | "resolved" | "rejected";
    error: string | null;
};

const initialState: PostsState = {
    posts: [],
    status: "loading",
    error: null,
};

export const getPosts = createAsyncThunk(
    "posts/getPosts",
    async function (_, { rejectWithValue }) {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts?_limit=20"
            );
            if (!response.ok) throw new Error("Something went wrong!");

            const data = await response.json();
            return data;
        } catch (error: any) {
            rejectWithValue(error.message);
        }
    }
);

const toolkitSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost(state, action: PayloadAction<Post>) {
            state.posts.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.status = "resolved";
            state.posts = action.payload;
        });

        builder.addCase(getPosts.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.payload as string;
        });

        builder.addCase(getPosts.pending, (state, action) => {
            state.status = "loading";
        });
    },
});

export default toolkitSlice.reducer;
export const { addPost } = toolkitSlice.actions;
