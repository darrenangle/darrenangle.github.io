import './About.css';
import darrenImgUrl from '../assets/images/swan.jpg';
const About = () => {
  return (
    <div className="About">
      <div className="content">
        <img
          className="photo"
          src={darrenImgUrl}
          alt="a boy disperses swans with his voice"
        />
      </div>
    </div>
  );
};
export default About;
