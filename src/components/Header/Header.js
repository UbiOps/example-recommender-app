import { IconButton } from "components";
import "./Header.css";

const Header = () => (
  <header className="header">
    <h1>foodhouse</h1>
    <div>
      <IconButton icon="icon-user" className="header__button" />
      <IconButton icon="icon-shopping-cart" className="header__button" />
    </div>
  </header>
);

export default Header;
