import TopNav from "../nav/TopNav";
import UserNav from "../nav/UserNav";
import LeftNav from "../nav/LeftNav";
import './ProfilePage.css';

export default function ProfilePage() {
    return (
        <div className="profile-page">
            <TopNav loc="tripercy" />
            <UserNav />
            <LeftNav />
        </div>
    );
}