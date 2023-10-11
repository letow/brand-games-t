import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getPosts } from "./store/postsSlice";
import { useAppDispatch, useAppSelector } from "./hooks";
import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import PostPage from "./pages/PostPage/PostPage";
import NavMenu from "./components/NavMenu/NavMenu";

function App() {
    const dispatch = useAppDispatch();
    const posts = useAppSelector((state) => state.toolkit.posts);
    const [menuActive, setMenuActive] = useState(false);

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <div className="app">
            <header className="app__header">
                <div
                    className={`app__header__btn ${menuActive ? "active" : ""}`}
                    onClick={() => setMenuActive(!menuActive)}
                >
                    <span />
                </div>
            </header>
            <div className="app__wrapper" onClick={() => setMenuActive(false)}>
                <Routes>
                    {posts.map((post) => (
                        <Route
                            path={`/posts/${post.id}`}
                            element={<PostPage post={post} />}
                        />
                    ))}
                    <Route path={"/"} element={<MainPage />} />
                    <Route path={"*"} element={<Navigate to={"/"} replace />} />
                </Routes>
            </div>
            <NavMenu isActive={menuActive} setActive={setMenuActive} posts={posts} />
        </div>
    );
}

export default App;
