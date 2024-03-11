import blogData from "../data/blog";

const About = ({ about, image = "https://via.placeholder.com/215", alt = "blog logo" }) => {
  return (
    <aside>
      <img src={image} alt={alt} />
       <p>{about}</p>
    </aside>
  );
}

export default About;
