import { FC } from "react";
import { useAppDispatch } from "../../hooks";
import "./PostItem.css";
import { Link } from "react-router-dom";

interface IPostItemProps {
    id: number;
    title: string;
}

const PostItem: FC<IPostItemProps> = ({ id, title }) => {
    const dispatch = useAppDispatch();

    return (
        <div className="post">
            <h3 className="post__header">{`${id}. ${title}`}</h3>
            <Link to={`/post/${id}`} className="post__btn">
                Read post
            </Link>
        </div>
    );
};

export default PostItem;
