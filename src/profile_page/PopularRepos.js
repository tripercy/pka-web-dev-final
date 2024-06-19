import './PopularRepos.css'

let data = {
    repo: {
        repoName: "tripercy.github.io",
        repoDesc: "My personal website",
        language: "HTML"
    }
}

function RepoCard(props) {
    let { data } = props;
    return (
        <div className='repo-card'>
            <div className='repo-card-info'>
                <a href='/profile'>{data.repo.repoName}</a>
                <span> {data.repo.repoDesc} </span>
                <span> {data.repo.language} </span>
            </div>
            <div className='repo-card-vis'>
                Public
            </div>
        </div>
    );
}

export default function PopularRepos() {
    return (
        <div className='popular-repos'>
            <span>Popular repositories</span>
            <ul>
                <li><RepoCard data={data} /></li>
                <li><RepoCard data={data} /></li>
                <li><RepoCard data={data} /></li>
                <li><RepoCard data={data} /></li>
                <li><RepoCard data={data} /></li>
                <li><RepoCard data={data} /></li>
            </ul>
        </div>
    );
}