import { FC } from "react";
import { useAppDispatch } from "../hooks";
import "./PostItem.css";

interface IPostItemProps {
    id: number;
    title: string;
}

const PostItem: FC<IPostItemProps> = ({ id, title }) => {
    const dispatch = useAppDispatch();

    return (
        <div className="post">
            <h3 className="post__header">{`${id}. ${title}`}</h3>
            <a href="#" className="post__btn">
                Read post
            </a>
        </div>
    );
};

export default PostItem;
