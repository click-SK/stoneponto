import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {fetchLanguage} from '../../store/language'

const Blog = () => {
  const [allPosts, setAllPosts] = useState([]);
  const dispatch = useDispatch();

  const lang = useSelector((state) => state.lang.language);
  
  useEffect(() => {
    fetch("https://ponto-print.herokuapp.com/get-all-post")
      .then((res) => res.json())
      .then((res) => setAllPosts(res));
  }, []);

  useEffect(() => {
    dispatch(fetchLanguage())
  },[lang])


  return (
    <div>
      {allPosts && allPosts.map((post) => (
        <div key={post._id}
        style={{display:'flex', flexDirection:'column', alignItems:'center', borderBottom: '1px solid black'}}>
          <div>
            {lang == 'Ua' 
            ?
            <>{post.titleUa}</>
            :
            <>{post.titleRu}</>
            }
          </div>
          <div style={{width:'300px', height:'300px', margin: '20px 0px'}}>
            <img 
            src={`https://ponto-print.herokuapp.com${post.blogImage}`} 
            style={{width: 'auto', height: '100%'}}/>
          </div>
          <div style={{width:'60%',}}>
          {lang == 'Ua' 
            ?
            <>{post.descriptionUa}</>
            :
            <>{post.descriptionRu}</>
            }
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
