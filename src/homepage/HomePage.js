import LeftPane from "./LeftPane"
import Latest from "./Latest"
import Explore from "./Explore"

import TopNav from "../nav/TopNav"
import UserNav from "../nav/UserNav"

import './HomePage.css'

export default function HomePage() {
    return (
        <div>
            <TopNav />
            <UserNav />
            <div className='content'>
                <LeftPane />
                <div className="right-pane">
                    <Latest />
                    <Explore />
                </div>
            </div>
        </div>
    )
}