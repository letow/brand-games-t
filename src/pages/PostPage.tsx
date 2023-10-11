import { FC } from "react";
import { Post } from "../types/Post";
import PostForm from "../components/PostForm/PostForm";

interface IPostPageProps {
    post: Post;
}
const PostPage: FC<IPostPageProps> = ({ post }) => {
    return (
        <div>
            <h4>
                {post.id}. {post.title}
            </h4>
            <p className="a">{post.body}</p>
            <PostForm />
        </div>
    );
};

export default PostPage;
