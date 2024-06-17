import LeftPane from "./LeftPane"
import Latest from "./Latest"
import Explore from "./Explore"
import ExploreItem from "./ExploreItem"

import TopNav from "../nav/TopNav"
import './HomePage.css'

export default function HomePage() {
    return (
        <div>
            <TopNav />
            <div className='content'>
                <LeftPane />
                <div className="right-pane">
                    <Latest />
                    <Explore />
                    <ExploreItem />
                </div>
            </div>
        </div>
    )
}