import React, {FC} from 'react';
import styles from "../../styles/Comments.module.sass";
import Comment from "./Comment";

const comments = [
    {
        sender: "Олег",
        message: "Очень круто, спасибо"
    },
    {
        sender: "Олег",
        message: "Очень круто, спасибо"
    },
    {
        sender: "Олег",
        message: "Очень круто, спасибо"
    },
    {
        sender: "Олег",
        message: "Очень круто, спасибо"
    }
]
const Comments: FC = () => {
    return (
        <section className={styles.comments}>
            <h2 className={styles.comments__header}>Книга отзывов и предложений</h2>
            <h4>Здесь вы можете оставить отзыв или ознакомиться с отзывами других наших клиентов</h4>
            <div className={styles.comments__container}>
                {comments.map((comment, index) => {
                    return (
                        <Comment key={index} name={comment.sender} message={comment.message} style={(index % 2 === 0) ? { float: "left"} : { float: "right"} }/>
                    )
                })}
            </div>
        </section>
    );
};

export default Comments;