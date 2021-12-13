import './About.css';
import darrenImgUrl from '../assets/images/swan.jpg';
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div className="About">
      <h1>About</h1>
      <div className="content">
        <div className="left">
          <p>Hello. I'm Darren Angle. I'm a poet and software engineer.</p>
          <p>I enjoy leading complex efforts to create meaningful systems.</p>
          <p>
            I do this for money and to experience rare emotions like{' '}
            <i>Beauty</i>, <i>Group Satisfaction Tinged with Grief</i>, and
            <i>Mastery I Wasn't Sure Would Come</i>.
            <p>
              I'm currently working on developer experience and front-end
              application modernization as Lead Engineer at Dina.
            </p>
            <p>
              Over the past 8 years, I have had many joyous experiences in
              engineering including: building facebook for dogs, being shamed on
              reddit for a memory leak, and improving the wellbeing of patients
              in hospital and home-care settings.
            </p>
            <p>
              In my free time, I'm writing a book inspired by{' '}
              <a
                href="https://en.wikipedia.org/wiki/Conway%27s_law"
                target="_blank"
              >
                Conway's Law
              </a>{' '}
              about how to create software successfully with other people.
            </p>
            <p>
              For more detail about my technical experience, see{' '}
              <Link to="/work">Work</Link>
            </p>
          </p>
        </div>
        <div className="right">
          <img
            className="photo"
            src={darrenImgUrl}
            alt="a boy disperses swans with his voice"
          />
          <div className="stats">
            <p>
              <em>
                <strong>degrees:</strong>
              </em>
              <br />
              MFA, Literary Arts, Brown University
              <br />
              BA, English, Macalester College
            </p>
            <p>
              <em>
                <strong>proudest moments:</strong>
              </em>
              <br />
              starting a family
              <br />
              buying a house
              <br />
              giving a talk to 2K US Marines about therapy
              <br />
              publishing some poems in a{' '}
              <a
                href="https://bombmagazine.org/articles/four-poems-13/"
                target="_blank"
              >
                fancy magazine
              </a>
              <br />
              building a predictive pricing model while working the customer
              service desk at whole foods
              <br />
              doing some triathlons
              <br />
              first paycheck surpassing immigrant parent's income
            </p>
            <p>
              <em>
                <strong>favorite Wittgentsein quotes:</strong>
              </em>
              <br />
              How small a thought it takes to fill a whole life.
              <br />
              Ethics and aesthetics are one.
              <br />
              Nothing is so difficult as not deceiving oneself.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
