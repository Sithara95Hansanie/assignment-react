import React, { useState, useEffect } from "react";
import axios from "axios";

function Post(props) {
  const postdata = props.location.state;

  console.log(props);

  const [comment, setComment] = useState(null);

  useEffect(() => {
    // console.log(postdata);
    const id = postdata.id;
    const fetchData = async () => {
      const result = await axios(
        `https://jsonplaceholder.typicode.com/posts/` + id + `/comments`
      );
      setComment(result.data);
    };

    fetchData();
  }, []);
  console.log(comment);

  return (
    <div className="featured-post-wrapper">
      <div className="feature-card">
        <div className="feature-header">
          <h1>{postdata.title}</h1>
        </div>
        <div className="feature-body">
          <p>{postdata.body}</p>
        </div>
        <div className="comment-section">
          {comment && <h3>Comments ({comment.length})</h3>}
          {comment &&
            comment.map((data, i) => (
              <div className="comment-block">
                <h5>{data.name}</h5>
                <p>{data.body}</p>
              </div>
            ))}
        </div>
      </div>
      <div className="side-bar-container">
        <h4>Recent Posts</h4>
      </div>
    </div>
  );
}

export default Post;
