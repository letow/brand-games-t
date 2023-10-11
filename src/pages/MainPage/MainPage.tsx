import PostItem from "../../components/PostItem/PostItem";
import { Carousel } from "react-responsive-carousel";
import { useAppSelector } from "../../hooks";

const MainPage = () => {
    const posts = useAppSelector((state) => state.toolkit.posts);

    return (
        <>
            <Carousel autoPlay={false} swipeable>
                {posts.map((post) => (
                    <PostItem {...post} />
                ))}
            </Carousel>
        </>
    );
};

export default MainPage;
