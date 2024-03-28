import { info } from "../constants";

const About = () => {
  return (
    <div>
      <div>
        <h1>About Me 👨🏻‍💻</h1>
      </div>
      <div>
        {info.map((link) => (
          <div key={link.id}>
            <h2>{link.title}</h2>
            <p>{link.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
