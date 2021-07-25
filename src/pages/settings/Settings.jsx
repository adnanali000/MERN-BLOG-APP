import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar';

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsProfilePic">
                    <img
                    className="settingsImg"
                    src="https://images.pexels.com/photos/625409/pexels-photo-625409.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                    alt="" />
                    <label htmlFor="fileInput">
                        <i className="settingsProfileIcon far fa-user-circle"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="adnan"/>
                    <label>Email</label>
                    <input type="email" placeholder="adnan@gmail.com"/> 
                    <label>Password</label>
                    <input type="password" placeholder="password"/>
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
