import "./header.css";
import Lang from "../lang/lang";
import Clock from "../clock/clock";
function Header() {
  return (
    <>
      <div className="background">
        <Lang />
        <Clock />
      </div>
    </>
  );
}

export default Header;
