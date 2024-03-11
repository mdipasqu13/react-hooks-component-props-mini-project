import blogData from "../data/blog";
import React from "react";
import Article from "./Article";


// const ArticleList = ({title, date = "January 1, 1970", preview}) => {
//     return (
//       <article>
//         <h3>{blogData.title}</h3>
//         <small>{blogData.date}</small>
//         <p>{blogData.preview}</p>
//       </article>
//     )
//     }

const ArticleList = ({ posts }) => {
    return (
      <main>
        {posts ? (
          posts.map((post) => (
            <div key={post.id}>
            </div>
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </main>
    );
  };

export default ArticleList;
