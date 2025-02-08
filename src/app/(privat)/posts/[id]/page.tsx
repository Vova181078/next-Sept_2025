import React from 'react';

type Params = {
    id: string;
}

const PostsPage = async ({params}: {params: Params}) => {

    const post = await fetch('https://dummyjson.com/posts/' + params.id)
        .then(res => res.json());

    return (
        <div>
            {JSON.stringify(post)}
        </div>
    );
};

export default PostsPage;