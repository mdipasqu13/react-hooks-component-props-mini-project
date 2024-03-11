import blogData from "../data/blog";

const Header = ({name}) => {
    return (
      <header>
        <h1>{blogData.name}</h1>
      </header>
    );
  }

  export default Header;