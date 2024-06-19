import { ThreeBarsIcon, CommandPaletteIcon, SearchIcon, PlusIcon, TriangleDownIcon, IssueOpenedIcon, GitPullRequestIcon, InboxIcon } from "@primer/octicons-react";
import "./TopNav.css";
import { openUserNav } from "./UserNav"
import { OpenLeftNav } from "./LeftNav";

function BtnLeftNav() {
    return (
        <button className="btn-left-nav" onClick={OpenLeftNav}>
            <ThreeBarsIcon className="topnav-icon" size={"14"} />
        </button>
    )
}

function CurrentLoc({ loc }) {
    return (
        <div className="current-loc">
            <a className="btn-home" href="/">
                <img src="https://raw.githubusercontent.com/rdimascio/icons/master/icons/light/github.svg" alt="github-logo"></img>
            </a>
            <a href="/">{loc}</a>
        </div>
    )
}

function LeftPart({ loc }) {
    return (
        <div className="left-part">
            <BtnLeftNav />
            <CurrentLoc loc={loc} />
        </div>
    )
}

function SearchBar() {
    return (
        <div className="search-bar">
            <SearchIcon className="topnav-icon" />
            <input className="search-box" type="text" placeholder="Type / to search" />
            <CommandPaletteIcon className="topnav-icon" />
        </div>
    )
}

function RightPart() {
    return (
        <div className="right-part">
            <SearchBar />

            <div className="top-nav-buttons">
                <button>
                    <PlusIcon className="topnav-icon" />
                    <TriangleDownIcon className="topnav-icon" />
                </button>

                <button>
                    <IssueOpenedIcon className="topnav-icon" />
                </button>

                <button>
                    <GitPullRequestIcon className="topnav-icon" />
                </button>

                <button>
                    <InboxIcon className="topnav-icon" />
                </button>
            </div>
            <button onClick={openUserNav}>
                <img id="profile-pic" src="https://avatars.githubusercontent.com/u/64069046" alt="profile-pic"></img>
            </button>
        </div>
    )

}

export default function TopNav({loc = "Dashboard"}) {
    return (
        <nav className="top-nav">
            <LeftPart loc={loc} />
            <RightPart />
        </nav>
    )
}