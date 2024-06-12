import './LeftPane.css';

export default function LeftPane() {
    return (
        <aside class="left-panel">
            <section class="repo-search">
                <div class="header-with-button">
                    <h3>Top repositories</h3>
                    <button class="new-repo-button">New</button>
                </div>

                <input type="text" placeholder="Find a repository..." />
            </section>
            <section class="top-repos">
                <h3>Recently browsed</h3>
                <ul>
                    <li><a href="/">Repo 1</a></li>
                    <li><a href="/">Repo 2</a></li>
                    <li><a href="/">Repo 3</a></li>
                    <li><a href="/">Repo 4</a></li>
                    <li><a href="/">Repo 5</a></li>
                </ul>
            </section>
            <section class="recent-activities">
                <h3>Recent activities</h3>
                <ul>
                    <li><a href="/">User A starred Repo 1</a></li>
                    <li><a href="/">User B forked Repo 2</a></li>
                    <li><a href="/">User C opened an issue in Repo 3</a></li>
                    <li><a href="/">User D closed an issue in Repo 4</a></li>
                    <li><a href="/">User E created a pull request in Repo 5</a></li>
                </ul>
            </section>
        </aside>
    );
}