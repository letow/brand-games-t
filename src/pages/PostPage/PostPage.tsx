import { FC } from "react";
import { Post } from "../../types/Post";
import PostForm from "../../components/PostForm/PostForm";
import "./PostPage.css";

interface IPostPageProps {
    post: Post;
}
const PostPage: FC<IPostPageProps> = ({ post }) => {
    return (
        <div className="post-page">
            <div className="post-page__content">
                <h2>
                    {post.id}. {post.title}
                </h2>
                <p className="a">{post.body}</p>
            </div>
            <PostForm />
        </div>
    );
};

export default PostPage;
