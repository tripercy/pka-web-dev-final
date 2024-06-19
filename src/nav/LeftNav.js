import './LeftNav.css'
import {
    XIcon,
    HomeIcon,
    IssueOpenedIcon,
    GitPullRequestIcon,
    ProjectIcon,
    CommentDiscussionIcon,
    CodespacesIcon,
    TelescopeIcon,
    GiftIcon,
    SearchIcon
} from '@primer/octicons-react';

function LeftNavTop() {
    return (
        <div className='left-nav-top'>
            <img src="https://raw.githubusercontent.com/rdimascio/icons/master/icons/light/github.svg" alt="github-logo"></img>
            <button>
                <XIcon className="left-nav-icon" />
            </button>
        </div>
    );
}

function LeftNavItem({ icon, text }) {
    return (
        <button className='left-nav-item'>
            {icon}
            <span>{text}</span>
        </button>
    );
}

function LeftNavList() {
    return (
        <div className='left-nav-list'>
            <ul>
                <li> <LeftNavItem icon={<HomeIcon className='left-nav-icon' />} text="Home" /> </li>
                <li> <LeftNavItem icon={<IssueOpenedIcon className='left-nav-icon' />} text="Issues" /> </li>
                <li> <LeftNavItem icon={<GitPullRequestIcon className='left-nav-icon' />} text="Pull requests" /> </li>
                <li> <LeftNavItem icon={<ProjectIcon className='left-nav-icon' />} text="Project" /> </li>
                <li> <LeftNavItem icon={<CommentDiscussionIcon className='left-nav-icon' />} text="Discussions" /> </li>
                <li> <LeftNavItem icon={<CodespacesIcon className='left-nav-icon' />} text="Codespaces" /> </li>
            </ul>
            <ul>
                <li> <LeftNavItem icon={<TelescopeIcon className='left-nav-icon' />} text="Explore" /> </li>
                <li> <LeftNavItem icon={<GiftIcon className='left-nav-icon' />} text="Marketplace" /> </li>
            </ul>
        </div>
    );
}

function LeftNavRepoTop() {
    return (
        <div className='left-nav-repo-top'>
            <span>Repositories</span>
            <button>
                <SearchIcon className="left-nav-icon" />
            </button>
        </div>
    );
}

function LeftNavRepoList() {
    return (
        <div className='left-nav-list'>
            <ul>
                <li> <LeftNavItem icon={<img src="https://avatars.githubusercontent.com/u/64069046" alt="profile-pic" />} text="tripercy/web-dev-final" /> </li>
                <li> <LeftNavItem icon={<img src="https://avatars.githubusercontent.com/u/64069046" alt="profile-pic" />} text="tripercy/repo-2" /> </li>
                <li> <LeftNavItem icon={<img src="https://avatars.githubusercontent.com/u/64069046" alt="profile-pic" />} text="tripercy/repo-3" /> </li>
            </ul>
        </div>
    );
}

function LeftNavRepos() {
    return (
        <div className='left-nav-repos'>
            <LeftNavRepoTop />
            <LeftNavRepoList />
        </div>
    );
}

export default function LeftNav() {
    return (
        <div className='left-nav'>
            <LeftNavTop />
            <LeftNavList />
            <LeftNavRepos />
        </div>
    );
}