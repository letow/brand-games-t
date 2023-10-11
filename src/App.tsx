import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getPosts } from "./store/postsSlice";
import { useAppDispatch, useAppSelector } from "./hooks";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PostPage from "./pages/PostPage";

function App() {
    const dispatch = useAppDispatch();
    const posts = useAppSelector((state) => state.toolkit.posts);

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <div className="App">
            <Routes>
                {posts.map((post) => (
                    <Route
                        path={`/post/${post.id}`}
                        element={<PostPage post={post} />}
                    ></Route>
                ))}
                <Route path={"/"} element={<MainPage />}></Route>
                <Route path={"*"} element={<MainPage />}></Route>
            </Routes>
        </div>
    );
}

export default App;
