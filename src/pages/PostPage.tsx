import { FC } from "react";
import { Post } from "../types/Post";

interface IPostPageProps {
    post: Post;
}
const PostPage: FC<IPostPageProps> = ({ post }) => {
    return (
        <div>
            {post.id}. {post.title}
            <p className="a">{post.body}</p>
        </div>
    );
};

export default PostPage;
