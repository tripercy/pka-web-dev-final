import { ThreeBarsIcon, CommandPaletteIcon, SearchIcon, PlusIcon, TriangleDownIcon, IssueOpenedIcon, GitPullRequestIcon, InboxIcon } from "@primer/octicons-react";
import "./TopNav.css";

function BtnLeftNav() {
    return (
        <button className="btn-left-nav">
            <ThreeBarsIcon className="btn-left-nav-icon" />
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
            <SearchIcon className="icon" />
            <input className="search-box" type="text" placeholder="Type / to search" />
            <CommandPaletteIcon className="icon" />
        </div>
    )
}

function RightPart() {
    return (
        <div className="right-part">
            <SearchBar />

            <div className="top-nav-buttons">
                <button>
                    <PlusIcon className="icon" />
                    <TriangleDownIcon className="icon" />
                </button>

                <button>
                    <IssueOpenedIcon className="icon" />
                </button>

                <button>
                    <GitPullRequestIcon className="icon" />
                </button>

                <button>
                    <InboxIcon className="icon" />
                </button>
            </div>

            <img id="profile-pic" src="https://avatars.githubusercontent.com/u/64069046" alt="profile-pic"></img>
        </div>
    )

}

export default function TopNav() {
    return (
        <nav className="top-nav">
            <LeftPart loc="Dashboard" />
            <RightPart />
        </nav>
    )
}