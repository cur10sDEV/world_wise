import { LogoImg } from "../images/";

const Logo = ({ styles }) => {
  return (
    <img className={`w-64 ${styles}`} src={LogoImg} alt="worldwise-logo" />
  );
};
export default Logo;
