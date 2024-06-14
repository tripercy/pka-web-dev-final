import './UserNav.css'
import { XIcon } from '@primer/octicons-react';

let test_user = {
    username: "tripercy",
    display_name: "Tri Percy",
}

function UserInfo({ user }) {
    return (
        <div className='user-info'>
            <div className='user-avatar'>
                <img id="profile-pic" src="https://avatars.githubusercontent.com/u/64069046" alt="profile-pic"></img>
            </div>
            <div className='user-name'>
                <span className='github-user-name'> {user.username} </span>
                <span className='github-display-name'> {user.display_name} </span>
            </div>
        </div>
    );
}

function UserNavTop({user}) {
    return (
        <div className='user-nav-top'>
            <UserInfo user={user} />
            <button>
                <XIcon className="icon" />
            </button>
        </div>
    )
}

export default function UserNav() {
    return (
        <div className="user-nav">
            <UserNavTop user={test_user} />
        </div>
    );
}