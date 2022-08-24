import "./Footer.css";
import { socialIcons } from "./SocialIcons";

const Footer = () => {
  const addIcons = (
    <>
      <ul className="footerLinks">
        {socialIcons.map((item) => {
          const { id, icon, url } = item;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </>
  );

  return (
    <footer className="wrapper">
      <h5>
        &copy; {new Date().getFullYear()}
        <span className="copyright">Optimo Group</span>
      </h5>
      <h5>
        All rights reserved by{" "}
        <span className="copyright">Goga Imerlishvili</span>
      </h5>
      <div className="icons">{addIcons}</div>
    </footer>
  );
};

export default Footer;
