import { FC } from "react";
import { useAppDispatch } from "../../hooks";
import "./PostItem.css";
import { Link } from "react-router-dom";

interface IPostItemProps {
    id: number;
    title: string;
}

const PostItem: FC<IPostItemProps> = ({ id, title }) => {
    return (
        <div className="post">
            <h3 className="post__header">{`${id}. ${title}`}</h3>
            <Link to={`/posts/${id}`} className="post__btn">
                Read post
            </Link>
        </div>
    );
};

export default PostItem;
