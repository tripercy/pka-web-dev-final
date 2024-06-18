import LeftPane from "./LeftPane"
import Latest from "./Latest"
import Explore from "./Explore"
import FeedContainer from "./FeedContainer"

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
                {/* <FeedContainer/> */}
                <div className="right-pane">
                    <Latest />
                    <Explore />
                </div>
            </div>
        </div>
    )
}