import React,{useEffect, useState} from 'react';
import EditCurrentPost from './EditCurrentPost';
import Loader from '../../Loader/Loader';
const EditPost = () => {
    const [allPosts, setAllPosts] = useState([]);
    const [isFetch, setIsFetch] = useState(false);

    useEffect(() => {
        fetch('http://server.ponto-print.com.ua:4444/get-all-post')
        .then((res) => res.json())
        .then((res) => setAllPosts(res))
    },[isFetch])

    return (
        <div className="post_item_wrap">
            {allPosts.length != 0 
            ?
            <>
            {allPosts && allPosts.map((post) => (
                <EditCurrentPost key={post._id}
                post={post}
                setIsFetch={setIsFetch}/>
            ))}
            </>
            :
            <Loader/>
            }
        </div>
    );
};

export default EditPost;