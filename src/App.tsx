import "./App.css";
import { getPosts } from "./store/postsSlice";
import { useAppDispatch, useAppSelector } from "./hooks";
import PostItem from "./components/PostItem";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect } from "react";

function App() {
    const posts = useAppSelector((state) => state.toolkit.posts);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <div className="App">
            <Carousel autoPlay={false} swipeable>
                {posts.map((post) => (
                    <PostItem {...post} />
                ))}
            </Carousel>
        </div>
    );
}

export default App;
