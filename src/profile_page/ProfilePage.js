import TopNav from "../nav/TopNav";
import UserNav from "../nav/UserNav";
import LeftNav from "../nav/LeftNav";
import GitHubCalendar from 'react-github-calendar';

import './ProfilePage.css';
import ProfileOverview from "./ProfileOverview";
import PopularRepos from "./PopularRepos";

export default function ProfilePage() {
    return (
        <div className="profile-page">
            <TopNav loc="tripercy" />
            <UserNav />
            <LeftNav />

            <div className="profile-content">
                <div className="profile-left">
                    <ProfileOverview />
                </div>
                <div className="profile-right">
                    <PopularRepos />
                    <GitHubCalendar username="tripercy" />
                </div>
            </div>
        </div>
    );
}