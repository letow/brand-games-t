import { FC } from "react";
import "./NavMenu.css";
import { Link } from "react-router-dom";
import { Post } from "../../types/Post";

interface INavMenuProps {
    posts: Post[];
    isActive: boolean;
    setActive: (bool: boolean) => void;
}

const NavMenu: FC<INavMenuProps> = ({ posts, isActive, setActive }) => {
    return (
        <div className={`menu ${isActive ? "active" : ""}`}>
            <div className="menu__content">
                <ul>
                    <li>
                        <strong>
                            <Link to={"/"} onClick={() => setActive(false)}>
                                Return to Main Page
                            </Link>
                        </strong>
                    </li>
                    {posts.map((post) => (
                        <li>
                            <Link
                                to={`/posts/${post.id}`}
                                onClick={() => setActive(false)}
                            >
                                {post.id}. {post.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default NavMenu;
