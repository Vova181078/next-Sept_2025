import React from 'react';

type Params = {
    id: string;
}

const CommentPage = async ({params}: {params: Params}) => {

    const comment = await fetch('https://dummyjson.com/comment/' + params.id)
        .then(res => res.json());

    return (
        <div>
            {JSON.stringify(comment)}
        </div>
    );
};

export default CommentPage;