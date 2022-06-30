import Logo from "./Logo";
import User from "./User";
const Header = () => {
  return (
    <header>
      <nav>
        <div className="nav1">
          <div className="circle">
            <i class="fa-solid fa-circle one"></i>
            <i class="fa-solid fa-circle two"></i>
            <i class="fa-solid fa-circle three"></i>
          </div>

          <span className="left">
            <i class="fa-solid fa-angle-left"></i>
          </span>
          <span>My Bank</span>
        </div>
        <div className="nav2">
          <i class="fa-solid fa-lock-open"></i>
          <i class="fa-solid fa-plus"></i>
          <i class="fa-solid fa-bars"></i>
        </div>
      </nav>
      <div className="underNav">
        <Logo></Logo>
        <User userName="Etienne"></User>
      </div>
    </header>
  );
};

export default Header;
