import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "../api/postAPI"; // Import the getPosts function
import "./Home.css"; // Import the CSS file
import moment from "moment";

function Home() {
  const [homePosts, setHomePosts] = useState([]); // Create a state variable for the home posts

 useEffect(() => {
   getPosts()
     .then((posts) => {
       const sortedPosts = posts.data.sort(
         (a, b) => new Date(b.date) - new Date(a.date)
       );
       setHomePosts(sortedPosts);
     })
     .catch((error) => console.error(error));
   // Fetch the home posts when the component mounts
 }, []);

  return (
    <div className="container">
      <div className="home">
        {homePosts.map((post, index) => (
          <div
            key={post.id}
            className={`post ${index % 2 === 0 ? "" : "reverse"}`}
          >
            <div className="text">
              <h2>{post.title}</h2>
              <p>{moment(post.date).format("MMMM Do YYYY, h:mm:ss a")}</p>
              <p>{post.content}</p>
              <Link to={`/post/${post.id}`} className="btn">
                Read More
              </Link>
            </div>
            <div className="image">
              <div className="border">
                <img src={post.imageUrl} alt={post.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
