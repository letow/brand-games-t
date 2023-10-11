import "./PostForm.css";
import { useRef, useState } from "react";
import { useAppDispatch } from "../../hooks";
import { addPost } from "../../store/postsSlice";

const PostForm = () => {
    const titleRef = useRef<HTMLInputElement>(null);
    const textRef = useRef<HTMLTextAreaElement>(null);
    const [status, setStatus] = useState<"success" | null>(null);

    const dispatch = useAppDispatch();

    const addPostHandler = () => {
        if (titleRef.current?.value && textRef.current?.value) {
            dispatch(
                addPost({
                    id: -1,
                    title: titleRef.current!.value,
                    body: textRef.current!.value,
                })
            );
            titleRef.current!.value = "";
            textRef.current!.value = "";
            setStatus("success");
        }
    };

    return (
        <form className="post-form">
            <h4>Have something to post? Go ahead!</h4>
            <input
                ref={titleRef}
                type="text"
                required
                name="post-form__title"
                id="post-form__title"
                placeholder="Title"
            />
            <textarea
                ref={textRef}
                required
                name="post-form__text"
                id="post-form__text"
                placeholder="Write something..."
                cols={30}
                rows={10}
            ></textarea>
            <button onClick={addPostHandler}>Add post</button>
            {status === "success" && (
                <p className="post-form__message">Post was added!</p>
            )}
        </form>
    );
};

export default PostForm;
