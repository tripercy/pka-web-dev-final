import './UserNav.css'
import {
    XIcon,
    SmileyIcon,
    PersonIcon,
    PersonAddIcon,
    RepoIcon,
    ProjectIcon,
    CopilotIcon,
    OrganizationIcon,
    GlobeIcon,
    StarIcon,
    HeartIcon,
    CodeSquareIcon,
    BeakerIcon,
    GearIcon,
    PeopleIcon,
    CommentDiscussionIcon
} from '@primer/octicons-react';

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

function closeUserNav() {
    let userNav = document.querySelector('.user-nav');
    userNav.style.display = 'none';
}

function openUserNav() {
    let userNav = document.querySelector('.user-nav');
    userNav.style.display = 'block';
    userNav.style.animation = 'userNavSlideIn 0.2s';
}

function UserNavTop({ user }) {
    return (
        <div className='user-nav-top'>
            <UserInfo user={user} />
            <button onClick={closeUserNav}>
                <XIcon className="icon" />
            </button>
        </div>
    )
}

function UserNavItem({ icon, text }) {
    return (
        <button className='user-nav-item'>
            {icon}
            <span>{text}</span>
        </button>
    );
}

function UserNavLists() {
    return (
        <div className='user-nav-lists'>
            <ul>
                <li> <UserNavItem icon={<SmileyIcon className='icon' />} text="Set status" /> </li>
            </ul>
            <ul>
                <li> <UserNavItem icon={<PersonIcon className='icon' />} text="Your profile" /> </li>
                <li> <UserNavItem icon={<PersonAddIcon className='icon' />} text="Add account" /> </li>
            </ul>

            <ul>
                <li> <UserNavItem icon={<RepoIcon className='icon' />} text="Your repositories" /> </li>
                <li> <UserNavItem icon={<ProjectIcon className='icon' />} text="Your projects" /> </li>
                <li> <UserNavItem icon={<CopilotIcon className='icon' />} text="Your Copilot" /> </li>
                <li> <UserNavItem icon={<OrganizationIcon className='icon' />} text="Your organizations" /> </li>
                <li> <UserNavItem icon={<GlobeIcon className='icon' />} text="Your enterprises" /> </li>
                <li> <UserNavItem icon={<StarIcon className='icon' />} text="Your stars" /> </li>
                <li> <UserNavItem icon={<HeartIcon className='icon' />} text="Your sponsors" /> </li>
                <li> <UserNavItem icon={<CodeSquareIcon className='icon' />} text="Your gists" /> </li>
            </ul>

            <ul>
                <li> <UserNavItem icon={<GlobeIcon className='icon' />} text="Try Enterprise" /> </li>
                <li> <UserNavItem icon={<BeakerIcon className='icon' />} text="Feature preview" /> </li>
                <li> <UserNavItem icon={<GearIcon className='icon' />} text="Settings" /> </li>
            </ul>

            <ul>
                <li> <UserNavItem icon={<PeopleIcon className='icon' />} text="Github Support" /> </li>
                <li> <UserNavItem icon={<CommentDiscussionIcon className='icon' />} text="Github Community" /> </li>
            </ul>

            <ul>
                <li> <UserNavItem icon={<></>} text="Sign out" /> </li>
            </ul>
        </div>
    );
}

export default function UserNav() {
    return (
        <div className="user-nav">
            <div className='user-nav-overlay' />
            <UserNavTop user={test_user} />
            <UserNavLists />
        </div>
    );
}

export { openUserNav };