import { ThreeBarsIcon } from "@primer/octicons-react";
import "./TopNav.css";

function BtnLeftNav() {
    return (
        <button className="btn-left-nav">
            <ThreeBarsIcon className="btn-left-nav-icon"/>
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

export default function TopNav() {
    return (
        <nav className="top-nav">
            <LeftPart loc="Dashboard" />
        </nav>
    )
}