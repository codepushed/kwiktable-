import './Header.scss';

const Header = () => {
  return (
    <nav className="header">
      <div className="header__pill">
        <div className="header__logo">Kwiktable</div>

        <div className="header__nav">
          <a href="#product" className="header__link">
            Product
          </a>
          <a href="#list" className="header__link">
            List your Restaurant
          </a>
          <a href="#pricing" className="header__link">
            Pricing
          </a>
          <button className="header__button">Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
