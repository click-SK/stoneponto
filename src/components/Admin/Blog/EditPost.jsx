import React,{useEffect, useState} from 'react';
import EditCurrentPost from './EditCurrentPost';
const EditPost = () => {
    const [allPosts, setAllPosts] = useState([]);
    const [isFetch, setIsFetch] = useState(false);

    useEffect(() => {
        fetch('http://localhost:4444/get-all-post')
        .then((res) => res.json())
        .then((res) => setAllPosts(res))
    },[isFetch])

    return (
        <div className="post_item_wrap">
            {allPosts && allPosts.map((post) => (
                <EditCurrentPost key={post._id}
                post={post}
                setIsFetch={setIsFetch}/>
            ))}
        </div>
    );
};

export default EditPost;