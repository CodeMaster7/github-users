<div id="top"></div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#component-breakdown">Component Breakdown</a></li>
      </ul>
    </li>
    <li><a href="#deployment">Deployment</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<!-- [![Product Name Screen Shot][product-screenshot]](https://example.com) -->

For this project I fetch the Github Users API for profile information on a specific user. You'll create a form that submits a username to the API and return the results on the same page.

The Github API URL is (replace [username] with an actual username): https://api.github.com/users/[username]



### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [React.js](https://reactjs.org/)
* [Bootstrap](https://getbootstrap.com)
* [react-Bootstrap](https://react-bootstrap.netlify.app/getting-started/introduction/)
* [react-router-dom v6](https://reactrouter.com/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started
### Installation

_how you can install and start the app._

1. Github API Docs at [API](https://developer.github.com/v3/.)
2. Clone the repo
   ```sh
   git clone https://github.com/CodeMaster7/github-users.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Start application
   ```sh
   npm start
   ```
<p align="right">(<a href="#top">back to top</a>)</p>

## Component Breakdown

## `App.js` (funtional component)

- contains the TopNavbar component
- one route to the Home component

## `TopNavbar` (functional component)

- this component just renders a bootstrap navbar

## `Home` (functional component)

- This component fetches a user from saved state and passes it as a user objects as a prop (to `UserCard`)

  #### Functions

`handleChange`:

- This will `setState` to change the username value based on what is typed

`handleSubmit`:

- On submit the form will take the username value and make a `fetch()` request to the Github API
- The response from the API will be a _single user_.

## `UserCard` (functional component)

- This component render the user card with data through props
<p align="right">(<a href="#top">back to top</a>)</p>

## Deployment

[Netlify](https://www.netlify.com/)
Project Link: [https://github.com/your_username/repo_name](https://github.com/your_username/repo_name)

<br>
<!-- CONTACT -->
## Contact

Sam Bonfanti - [Email](sammybonfanti@gmail.com) - sammybonfanti@gmail.com
Linkedin- [Linkedin](https://www.linkedin.com/in/sambonfanti) - https://www.linkedin.com/in/sambonfanti

<p align="right">(<a href="#top">back to top</a>)</p>