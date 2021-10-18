import './index.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const origin = 'Maddock, ND';
  const education = 'North Dakota State University';
  const major = 'Computer Science';
  const experience = [
    "'NDSU' => 'Software/Asset Management Assistant'",
    "'NDSU' => 'Web Application Developer'",
    "'Bushel' => 'Software Engineer Intern'",
    "'NDSU' => 'Software Engineer'",
  ];
  const interests =  [
    'Coding',
    'Golf',
    'Caffeine',
    'Gaming',
    'Snowboarding',
    'Weight lifting',
  ];

  const skills = [
    'Java',
    'JavaScript',
    'Python',
    'PHP',
    'HTML',
    'CSS/SCSS',
    'SQL/NoSQL',
  ];
  return (
    <div className="main">
    <div className="terminal">
    <span className="options">
      <div className="close"></div>
      <div className="min"></div>
      <div className="max"></div>
    </span>
    <div className="code">
      <p>
        <span>
          <FontAwesomeIcon icon={faApple}/>&nbsp;&nbsp;
        </span>
        <span className="folder">
          <FontAwesomeIcon icon={faFolderOpen}/>&nbsp;
        </span>
          ~ > &nbsp; 
        <span className="cmd">echo</span> Trevor.origin
      </p>
      <p className="out">'{ origin }'</p>
      <br />
      <p>
        <span><FontAwesomeIcon icon={faApple}/>&nbsp;&nbsp;</span>
        <span className="folder">
          <FontAwesomeIcon icon={faFolderOpen}/>&nbsp;
        </span>
        ~ > 
        <span className="cmd">echo</span> Trevor.education
      </p>
      <p className="out">'{ education }'</p>
      <br />
      <p>
        <span><FontAwesomeIcon icon={faApple}/>&nbsp;&nbsp;</span>
        <span className="folder">
          <FontAwesomeIcon icon={faFolderOpen}/>&nbsp;
        </span>
        ~ > <span className="cmd">echo</span> Trevor.major
      </p>
      <p className="out">'{ major }'</p>
      <br />
      <p>
        <span><FontAwesomeIcon icon={faApple}/>&nbsp;&nbsp;</span>
        <span className="folder">
          <FontAwesomeIcon icon={faFolderOpen}/>&nbsp;
        </span>
        ~ > <span className="cmd">echo</span> Trevor.experience
      </p>
      <p className="experience">
        [
        <br />
        { experience.join(",\n ") }
        <br />
        ]
      </p>
      <br />
      <p>
        <span><FontAwesomeIcon icon={faApple}/>&nbsp;&nbsp;</span>
        <span className="folder">
          <FontAwesomeIcon icon={faFolderOpen}/>&nbsp;
        </span>
        ~ > <span className="cmd">echo</span> Trevor.skills
      </p>
      <p className="out">[ { skills.join(", ") } ]</p>
      <br />
      <p>
        <span><FontAwesomeIcon icon={faApple}/>&nbsp;&nbsp;</span>
        <span className="folder">
          <FontAwesomeIcon icon={faFolderOpen}/>&nbsp;
        </span>
        ~ > <span className="cmd">echo</span> Trevor.interests
      </p>
      <p className="out">[ { interests.join(", ") } ]</p>
      <br />
    </div>
  </div>
  </div>
  );
};

export default About;
