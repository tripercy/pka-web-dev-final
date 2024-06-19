import LeftPane from "./LeftPane";
import Latest from "./Latest";
import Explore from "./Explore";
import FeedContainer from "./FeedContainer";

import TopNav from "../nav/TopNav";
import UserNav from "../nav/UserNav";
import "bootstrap/dist/css/bootstrap.min.css";

import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="bg-landing-dark">
      <TopNav />
      <UserNav />
      <div class="container-fluid">
        <div class="row">
          <div class="col gx-0 ">
            <LeftPane />
          </div>
          <div class="col-6">
            <FeedContainer />
          </div>
          <div class="col">
            <Latest />
            <Explore/>
          </div>
        </div>
      </div>
      <div className="content row"></div>
    </div>
  );
}
