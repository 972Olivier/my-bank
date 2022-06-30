import UserIcon from "./UserIcon";
const User = ({ userName }) => {
  return (
    <div className="boxUser">
      <span>{userName}</span>
      <div className="userCircle">
        <UserIcon></UserIcon>
      </div>
    </div>
  );
};

export default User;
