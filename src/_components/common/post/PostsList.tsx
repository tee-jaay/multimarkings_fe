import React from 'react';
import PostItem from './PostItem';

const PostsList: React.FC = () => {
    return (
        <div className='posts_list_container'>
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
            <PostItem />
        </div>
    );
}

export default PostsList;