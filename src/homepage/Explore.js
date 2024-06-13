import './Explore.css'
import ExploreItem from './ExploreItem'

import {ThreeBarsIcon, CommandPaletteIcon, SearchIcon, PlusIcon,
    TriangleDownIcon, IssueOpenedIcon, GitPullRequestIcon, InboxIcon,
    StarIcon
} from "@primer/octicons-react";

const repositories = [
    { name: 'Nemo / react', description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.', stars: 168000 },
    { name: 'Asaini / vue', description: '🖖 Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.', stars: 183000 },
    { name: 'ich_bin_heinrich / angular', description: 'One framework. Mobile & desktop.', stars: 72000 },
];

const Explore = () => {
    return (
        <div className="repository-list">
            <h1>Explore Repositories</h1>
            {repositories.map(repo => (
                <ExploreItem
                    key={repo.name}
                    name={repo.name}
                    description={repo.description}
                    stars={repo.stars}
                />
            ))}
            <div className="explore-more">Explore more</div>
        </div>
    );
};

export default Explore;