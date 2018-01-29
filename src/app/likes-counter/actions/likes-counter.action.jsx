export const like = likeAction;
export const dislike = dislikeAction;

function likeAction() {
    return {
        type: 'LIKE'
    };
}

function dislikeAction() {
    return {
        type: 'DISLIKE'
    };
}