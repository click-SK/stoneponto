import React,{useEffect, useState} from 'react';
import EditCurrentPost from './EditCurrentPost';
const EditPost = () => {
    const [allPosts, setAllPosts] = useState([]);
    const [isFetch, setIsFetch] = useState(false);

    useEffect(() => {
        fetch('https://ponto-print.herokuapp.com/get-all-post')
        .then((res) => res.json())
        .then((res) => setAllPosts(res))
    },[isFetch])

    console.log('allPosts',allPosts);
    return (
        <div>
            {allPosts && allPosts.map((post) => (
                <EditCurrentPost key={post._id}
                post={post}
                setIsFetch={setIsFetch}/>
            ))}
        </div>
    );
};

export default EditPost;