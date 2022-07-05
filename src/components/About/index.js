import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
  return (
    <section>
      <h1>The World's Most Interesting Man</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
    </section>
  );
}

export default About;