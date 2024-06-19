import TopNav from "../nav/TopNav";
import UserNav from "../nav/UserNav";
import LeftNav from "../nav/LeftNav";

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
                <ProfileOverview />
                <PopularRepos />
            </div>
        </div>
    );
}