import "./FeedContainer.css";
import  NewsCardItem from "./FeedContainerItem"

// import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
const newsfeed = [
  {
    avatar: "https://raw.githubusercontent.com/rdimascio/icons/master/icons/light/github.svg",
    name: "Kevin/apple",
    status: "release",
    time: "2 weeks",
    version: "v15.0.6",
    title: "Fix bug",
    description: [
      "Fixed an issue where HTTP/2 was not enabled for https2http and https2https plugins.",
      "Fixed the issue where the default values of INI configuration parameters are inconsistent with other configurations.",
    ],
  },
  {
    "avatar": "https://raw.githubusercontent.com/rdimascio/icons/master/icons/light/visualstudio.svg",
    "name": "Sophie/vscode",
    "status": "updated",
    "time": "1 week",
    "version": "v1.59.0",
    "title": "Editor Enhancements",
    "description": [
      "Added new code refactoring tools for improved code quality and maintainability.",
      "Improved IntelliSense performance for faster and more accurate code completion suggestions."
    ]
  },
  {
    "avatar": "https://raw.githubusercontent.com/rdimascio/icons/master/icons/light/git.svg",
    "name": "Mike/git",
    "status": "planned",
    "time": "6 months",
    "version": "v2.32.0",
    "title": "Version Control Improvements",
    "description": [
      "Planning to introduce file locking mechanism to prevent merge conflicts in collaborative projects.",
      "Proposing a new command-line interface for more intuitive version control operations."
    ]
  },
  {
    "avatar": "https://raw.githubusercontent.com/rdimascio/icons/master/icons/light/html5.svg",
    "name": "Laura/html5",
    "status": "launched",
    "time": "2 weeks",
    "version": "",
    "title": "Semantic Elements Update",
    "description": [
      "New semantic elements introduced for better document structure and SEO.",
      "Deprecated tags removed and documentation updated to reflect best practices."
    ]
  },
  {
    "avatar": "https://raw.githubusercontent.com/rdimascio/icons/master/icons/light/code.svg",
    "name": "Linda/nodejs",
    "status": "development",
    "time": "1 month",
    "version": "v12.3.0",
    "title": "Performance Improvements",
    "description": [
      "Enhanced performance of the event loop by optimizing callback execution.",
      "Improved the efficiency of memory allocation and garbage collection processes."
    ]
  },
  {
    "avatar": "https://raw.githubusercontent.com/rdimascio/icons/master/icons/light/npm.svg",
    "name": "James/react",
    "status": "testing",
    "time": "3 days",
    "version": "v17.0.2",
    "title": "New Features",
    "description": [
      "Added support for concurrent mode in React for better handling of asynchronous rendering tasks.",
      "Introduced a new API for managing state transitions more effectively."
    ]
  },
  {
    "avatar": "https://raw.githubusercontent.com/rdimascio/icons/master/icons/light/docker.svg",
    "name": "Alex/docker",
    "status": "deployed",
    "time": "2 months",
    "version": "v20.10.7",
    "title": "Security Update",
    "description": [
      "Addressed critical security vulnerabilities affecting container isolation.",
      "Implemented enhanced security protocols for image signing and verification."
    ]
  }
];

function Feed() {
  
  return (
    <div class="my-0 p-3 bg-landing-dark">
      <div class="d-flex justify-content-between mb-1">
        <h2 class="text-light">Home</h2>
        <div class="d-flex">
          <a
            href="/home"
            class="mx-4 py-2 align-items-center text-primary text-decoration-underline"
          >
            Send feedback
          </a>
          <button type="button" class="btn btn-dark border d-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              class="bi bi-filter "
              viewBox="2 -2 14 14"
            >
              <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5"></path>
            </svg>
            <p class="m-0 px-1">
              Filter<span class="badge">12</span>
            </p>
          </button>
        </div>
      </div>

      {/* <div class="py-2 my-3 border border-secondary rounded-2 text-bg-dark">
        <header class="d-flex mt-1 mb-2 px-3">
          <div class="mr-2">
            <div id="UserIcon"></div>
          </div>
          <div class=" d-flex justify-content-between flex-grow-1">
            <div>
              <div class="d-flex m-0">
                <a
                  href="/home"
                  class="text-start text-decoration-none name-a text-light "
                >
                  Kevin/spce
                </a>
                <p class="mx-1 mb-0 gray-text">released</p>
              </div>
              <span class="text-start small gray-text">2 week</span>
            </div>

            <div class="d-flex align-items-center">
              <button
                type="button"
                class="btn btn-dark d-flex border m-2"
                id="Sponsor"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="25"
                  fill="red"
                  class="bi bi-heart m-0 p-0"
                  viewBox="0 -2 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                </svg>
                <p class="m-0 mx-2 ">Sponsor</p>
              </button>

              <Dropdown data-bs-theme="dark">
                <Dropdown.Toggle
                  variant="link"
                  id="dropdown-basic"
                  bsPrefix="none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="white"
                    class="bi bi-three-dots"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"></path>
                  </svg>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.ItemText class="small text-nowrap gray-text px-3">
                    You're seeing this because you starred fatedier/frp
                  </Dropdown.ItemText>
                  <Dropdown.Divider />
                  <Dropdown.Item
                    href="#/action-2"
                    className="text-hover-blue p-3"
                  >
                    Show less activity like this
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#/action-3"
                    className="text-hover-blue p-3"
                  >
                    Unstart this repository
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </header>
        <h5 class="text-start px-3">v0.58.1</h5>
        <div class="text-start mx-3 p-3 bg-light-gray  text-light">
          <h6>Fixes</h6>
          <ul>
            <li>
              Fixed an issue where HTTP/2 was not enabled for https2http and
              https2https plugins.
            </li>
            <li>
              Fixed the issue where the default values of INI configuration
              parameters are inconsistent with other confi…
            </li>
          </ul>
          <a href="/home" class="text-primary text-decoration-underline">
            Read more
          </a>
        </div>
        <div class="d-flex gap-2 mb-3 p-3">
          <button type="button" class="btn border btn-dark radious-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-emoji-smile"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
              <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"></path>
            </svg>
          </button>
          <div class="btn-group">
            <button type="button" class="btn btn-outline-success">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-emoji-smile"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"></path>
              </svg>
              <span class="visually-hidden">Button</span>
            </button>
            <button type="button" class="btn btn-outline-danger">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-emoji-smile"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"></path>
              </svg>
              <span class="visually-hidden">Button</span>
            </button>
            <button type="button" class="btn btn-outline-info">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-emoji-smile"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"></path>
                <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"></path>
              </svg>
              <span class="visually-hidden">Button</span>
            </button>
          </div>
        </div>
      </div> */}

      {newsfeed.map(news => (
                <NewsCardItem
                    avartar={news.avartar}
                    name={news.name}
                    status={news.status}
                    time={news.time}
                    version={news.version}
                    title={news.title}
                    description={news.description}
                />
            ))}
    </div>
  );
}

export default function FeedContainer() {
  return <Feed></Feed>;
}
