import './Header.css';

export default function Header({ data }) {
  return (
    <header id="home">
      <div>
        <div>
          <p><img src='../../../images/css.png' /></p>
          <h1>{data.name}</h1>
          <h3 className="role">{data.role}</h3>
          <h3>{data.roleDescription}</h3>
          <hr />
          <ul className="social">
            {data.socialLinks &&
              data.socialLinks.map((item) => {
                return (
                  <p key={item.name}>
                    <a href={item.url} target="_blank">
                      <img className="icons" src={item.image} alt={item.name} />
                    </a>
                  </p>
                );
              })}
             <p><a href={data.resume}><img className="briefcase" src={data.briefcase} /></a></p>
          </ul>
        </div>
      </div>
    </header>
  );
}