import React from "react";
import blogData from "../data/blog";
import Article from "../components/Article";
import About from "../components/About";
import Header from "../components/Header";
import ArticleList from "./ArticleList.js";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header></Header>
      <About></About>
      <ArticleList></ArticleList>
      <Article></Article>
    </div>
  );
}
// const Header = ({name}) => {
//   return (
//     <header>
//       {blogData.name}
//       <h1>{name}</h1>
//     </header>
//   );
// }

// const About = ({ about, image = "https://via.placeholder.com/215", alt = "blog logo" }) => {
//   return (
//     <aside>
//       <img src={image} alt={alt} />
//        <p>{about}</p>
//     </aside>
//   );
// }

// const ArticleList = ({title, date = "January 1, 1970", preview}) => {
// return (
//   <article>
//     <h3>{blogData.title}</h3>
//     <small>{blogData.date}</small>
//     <p>{blogData.preview}</p>
//   </article>
// )
// }

// export default ArticleList;
// export default About;
// export default Header;
export default App;
// export default Article;
