import "../stylesheet/Header.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import MessageIcon from "@material-ui/icons/Message";

const Header = () => {
  return (
    <div className="header">
      <IconButton>
        <AccountCircleIcon fontSize="large" className="header__icon" />
      </IconButton>

      <SupervisedUserCircleIcon
        color="primary"
        fontSize="large"
        className="header__logo"
        style={{ fontSize: 50 }}
      />

      <IconButton>
        <MessageIcon fontSize="large" className="header__icon" />
      </IconButton>
    </div>
  );
};

export default Header;
