import React, {FC} from 'react';
import styles from "../../styles/Comment.module.sass";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ReplyIcon from '@mui/icons-material/Reply';

interface CommentProps{
    name: string,
    message: string
    style?: {[key: string]: string}
}
const Comment: FC<CommentProps> = ({name, message, style}) => {
    return (
        <div className={styles.comment} style={style ? style : {}}>
            <div className={styles.comment__container}>
                <div className={styles.comment__header}>
                    <AccountCircleIcon className={styles.comment__avatar}/>
                    <h3 className={styles.comment__sender}>{name}</h3>
                </div>
                <div className={styles.comment__body}>
                    <p>{message}</p>
                </div>
            </div>
            <div className={styles.comment__buttons}>
                <ThumbUpIcon className={styles.comment__button}/>
                <ThumbDownAltIcon className={styles.comment__button}/>
                <ReplyIcon className={styles.comment__button}/>
            </div>
        </div>
    );
};

export default Comment;