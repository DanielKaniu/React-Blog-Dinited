import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://images.pexels.com/photos/5028850/pexels-photo-5028850.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="ProfilePicture"
            />
            <label for="fileInput">
              <i className="settingsPPIcon fas fa-user-circle"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Enter username" />
          <label>Email</label>
          <input type="email" placeholder="Enter email" />
          <label>Username</label>
          <input type="password" placeholder="Enter password" />
          <button className="settingsSubmit">Update Profile</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
