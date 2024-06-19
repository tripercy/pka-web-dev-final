import React from 'react';
import "./FeedContainer.css";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "react-bootstrap/Image";


const NewsCardItem = ({ avartar, name, status, time, version, title,description }) => {
    return (
       
        <div class="py-2 my-3 border border-secondary rounded-2 text-bg-dark" >
        <header class="d-flex mt-1 mb-2 px-3">
          <div class="mr-2">
          <Image
          
            src= "https://raw.githubusercontent.com/rdimascio/icons/master/icons/light/github.svg"
            roundedCircle
            style={{ width: "30px", height: "30px", marginRight: "5px" }}
            class="mr-2"
          />
          </div>
          <div class=" d-flex justify-content-between flex-grow-1">
            <div>
              <div class="d-flex m-0">
                <a href="#" class="text-start text-decoration-none name-a text-light ">
                 {name}
                </a>
                <p class="mx-1 mb-0 gray-text">{status}</p>
              </div>
              <span class="text-start small gray-text">{time}</span>
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
                <Dropdown.Toggle variant="link" id="dropdown-basic" bsPrefix='none'  >
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
                  <Dropdown.ItemText class="small text-nowrap gray-text px-3">You're seeing this because you starred {name}</Dropdown.ItemText>
                  <Dropdown.Divider />
                  <Dropdown.Item href="#/action-2" className="text-hover-blue p-3">
                    Show less activity like this
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3" className="text-hover-blue p-3">
                    Unstart this repository
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </header>
        <h5 class="text-start px-3">{version}</h5>
        <div class="text-start mx-3 p-3 bg-light-gray  text-light">
          <h6>{title}</h6>
          <ul>
          {description.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
          <a href="#" class="text-primary text-decoration-underline">Read more</a>
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
      </div>
    );
};

export default NewsCardItem;