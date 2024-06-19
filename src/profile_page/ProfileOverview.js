import './ProfileOverview.css';
import { SmileyIcon, PeopleIcon, LinkIcon } from '@primer/octicons-react';

function ProfileAvatar() {
    return (
        <div className='profile-avatar'>
            <img src="https://avatars.githubusercontent.com/u/64069046" alt="profile-pic"></img>
            <button>
                <SmileyIcon className='profile-avatar-icon' />
            </button>
        </div>
    );
}

function ProfileDesc() {
    return (
        <div className='profile-desc'>
            <span className='profile-display-name'> Triperc: </span>
            <span className='profile-username'> tripercy </span>
            <span className='profile-intro'> Good dev wannabe </span>

            <button>
                Edit profile
            </button>
        </div>
    );
}

function ProfileFollows() {
    return (
        <div className='profile-follows'>
            <PeopleIcon />
            <span> <span className='profile-ov-highlight'>0</span> follower</span>
            <span> <span className='profile-ov-highlight'>0</span> following</span>
        </div>
    );
}

function ProfileLinks() {
    return (
        <div className='profile-links'>
            <LinkIcon />
            <a href="https://tripercy.github.io"><span className='profile-ov-highlight'> tripercy.github.io</span></a>
        </div>
    );
}

export default function ProfileOverview() {
    return (
        <div className='profile-overview'>
            <ProfileAvatar />
            <ProfileDesc />
            <ProfileFollows />
            <ProfileLinks />
        </div>
    );
}