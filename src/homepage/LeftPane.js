import "./LeftPane.css";
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function LeftPane() {
  const items = [
    "SkyjackerFWO/cloud-devops-tools",
    "SkyFWO/react-native-expo",
    "tripercy/full-stack-mern-project",
    "qkhanh711/python-data-science",
    "SkyjackerFWO/node-express-server",
    "SkyjackerFWO/flutter-app-development",
    "haitheone123/machine-learning-algos",
    "haithe13/react-context-api",
    "hait3/vuejs-ecommerce-store",
    "haite123/angular-material-ui",
    "SkyjackerFWO/docker-kubernetes-guide",
    "SkyFWO/graphql-apollo-client",
    "tripercy/ruby-rails-crm",
    "qkhanh711/aspnet-core-mvc",
    "SkyjackerFWO/android-jetpack-compose",
  ];

  const [visibleItems, setVisibleItems] = useState(5);
  const showMoreItems = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 5);
  };

  return (
    <div class="d-flex flex-column left-panel p-3 text-bg-dark">
      {/* Account switch */}
      <Dropdown data-bs-theme="dark">
        <Dropdown.Toggle
          variant="dark"
          id="dropdown-basic"
          class="align-items-center dropdown-toggle-no-hover"
        >
          <Image
            src="https://avatars.githubusercontent.com/u/54128762?v=4"
            roundedCircle
            style={{ width: "30px", height: "30px", marginRight: "5px" }}
            class="mr-2"
          />
          SkyjackerFWO
        </Dropdown.Toggle>

        <Dropdown.Menu className="custom-dropdown-menu">
          <Dropdown.ItemText class="small text-nowrap gray-text px-3">
            Switch dashboard context
          </Dropdown.ItemText>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-2">
            <Form>
              <Form.Check type="radio" id={`radio-1`}>
                <Form.Check.Input type="radio" hidden />
                <Form.Check.Label htmlFor={`radio-1`}>
                  <Image
                    src="https://avatars.githubusercontent.com/u/54128762?v=4"
                    roundedCircle
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "5px",
                    }}
                    class="mr-2"
                  />
                  SkyjackerFWO
                </Form.Check.Label>
              </Form.Check>
            </Form>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">
            <Form>
              <Form.Check type="radio" id={`radio-1`}>
                <Form.Check.Input type="radio" hidden />
                <Form.Check.Label htmlFor={`radio-1`}>
                  <Image
                    src="https://avatars.githubusercontent.com/u/64069046"
                    roundedCircle
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "5px",
                    }}
                    class="mr-2"
                  />
                  tripercy
                </Form.Check.Label>
              </Form.Check>
            </Form>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">
            <Form>
              <Form.Check type="radio" id={`radio-1`}>
                <Form.Check.Input type="radio" hidden />
                <Form.Check.Label htmlFor={`radio-1`}>
                  <Image
                    src="https://avatars.githubusercontent.com/u/91556072?s=16&v=4"
                    roundedCircle
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "5px",
                    }}
                    class="mr-2"
                  />
                  haitheone123
                </Form.Check.Label>
              </Form.Check>
            </Form>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-building-fill-gear"
              viewBox="0 0 16 16"
            >
              <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v7.256A4.5 4.5 0 0 0 12.5 8a4.5 4.5 0 0 0-3.59 1.787A.5.5 0 0 0 9 9.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .39-.187A4.5 4.5 0 0 0 8.027 12H6.5a.5.5 0 0 0-.5.5V16H3a1 1 0 0 1-1-1zm2 1.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5m3 0v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5m3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5M7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5M4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z" />
              <path d="M11.886 9.46c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
            </svg>
            <span class="mx-2">Manage organizations</span>
          </Dropdown.Item>
          <Dropdown.Item href="#/action-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-plus"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
            </svg>
            <span class="mx-2">Create organizations</span>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* Top repository */}
      <div class="my-2">
        <div class="d-flex flex-row justify-content-between my-2">
          <h6>Top Repository</h6>
          <Button variant="success">
            <svg
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              class="octicon octicon-repo"
              fill="#ffffff"
            >
              <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
            </svg>
            <span class="mx-1">New</span>
          </Button>
        </div>
        <Form.Control
          type="text"
          placeholder="Find a repositories..."
          data-bs-theme="dark"
        />
        <div class="my-2">
          <ul className="list-group list-group-flush">
            {items.slice(0, visibleItems).map((item, index) => (
              <li key={index} className="list-group-item">
                <a href="#">
                  <Image
                    src="https://raw.githubusercontent.com/rdimascio/icons/master/icons/light/github.svg"
                    roundedCircle
                    style={{
                      width: "15px",
                      height: "15px",
                      marginRight: "5px",
                    }}
                    class="mr-2"
                  />
                  {item}
                </a>
              </li>
            ))}
          </ul>
          {visibleItems < items.length && (
            <Button
              onClick={showMoreItems}
              variant="link"
              style={{
                fontSize: "small",
                textDecoration: "none",
                color: "rgba(189, 179, 179, 0.626)",
              }}
              class="show-more gray-text"
            >
              Show More
            </Button>
          )}
        </div>
      </div>

      {/* Recent activity*/}
      <div class="my-3">
        <h6>Recent activity</h6>
        <div>
          <div class="d-flex flex-start align-items-center my-2">
            <div class="mr-1">
              <a href="#">
                <svg
                  aria-label="Open issue"
                  role="img"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  class="octicon octicon-issue-opened color-fg-open"
                >
                  <path
                    d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                    fill="#198754"
                  ></path>
                  <path
                    d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"
                    fill="#198754"
                  ></path>
                </svg>
              </a>
            </div>

            <div class="mx-2 px-1">
              <p>
                <a href="#" class="gray-text hover-blue ">
                  tripercy/pka-web-dev-final
                </a>
              </p>
              <p>
                <a href="#" class="hover-underline">
                  Homepage news card
                </a>
              </p>
            </div>
          </div>
          <div class="d-flex flex-start align-items-center my-2">
            <div class="mr-1">
              <a href="#">
                <svg
                  aria-label="Open issue"
                  role="img"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  class="octicon octicon-issue-opened color-fg-open"
                >
                  <path
                    d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                    fill="#198754"
                  ></path>
                  <path
                    d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"
                    fill="#198754"
                  ></path>
                </svg>
              </a>
            </div>

            <div class="mx-2 px-1">
              <p>
                <a href="#" class="gray-text hover-blue ">
                  haitheone123/pka-web-dev-final
                </a>
              </p>
              <p>
                <a href="#" class="hover-underline">
                  Login page
                </a>
              </p>
            </div>
          </div>
          <div class="d-flex flex-start align-items-center my-2">
            <div class="mr-1">
              <a href="#">
                <svg
                  aria-label="Open issue"
                  role="img"
                  height="16"
                  viewBox="0 0 16 16"
                  version="1.1"
                  width="16"
                  data-view-component="true"
                  class="octicon octicon-issue-opened color-fg-open"
                >
                  <path
                    d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                    fill="#198754"
                  ></path>
                  <path
                    d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"
                    fill="#198754"
                  ></path>
                </svg>
              </a>
            </div>

            <div class="mx-2 px-1">
              <p>
                <a href="#" class="gray-text hover-blue ">
                  SkyjackerFWO/pka-web-dev-final
                </a>
              </p>
              <p>
                <a href="#" class="hover-underline">
                  Nav Bar
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
