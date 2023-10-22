
import './About.css';

export default function About({ data }) {
  return (
    <>
    <br></br>
    <br></br>
    <div className="summary">
    <h2>{data.aboutme1}</h2>
    <h2>{data.aboutme2}</h2>
    <h2>{data.aboutme3}</h2>
    </div>
    <br></br>
    <br></br>
    <div className="skills-container">
      <div className="skills">
        {data.skills &&
          data.skills.map((item, index) => (
            <div className="skill" key={index}>
             <img src={`${item.icon}`} className={item.class + ' skill-icon'}/>
            </div>
          ))}
      </div>
    </div>
    </>
  );
}