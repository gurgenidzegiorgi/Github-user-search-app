# GitHub User Search App

- [GitHub User Search App](#github-user-search-app)
  - [Project Preview](#Project-Preview)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Project Structure](#project-structure)
  - [Getting Started](#getting-started)
  - [Contributing](#contributing)
  - [Author](#author)

## Project Preview

![App Screenshot](./src/assets/images/preview.jpg "Screenshot")

## Features

- **Search:** Enter a GitHub username to search for and retrieve user information.
- **Theme Toggle:** Toggle between light and dark themes for a personalized experience.
- **Responsive Design:** The app is designed to be accessible and usable on various devices.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Styled Components: CSS-in-JS library for styling React components.
- Axios: A promise-based HTTP client for making requests to the GitHub API.

## Project Structure

The project is organized into components, styles, and utility functions. Here's a brief overview:

- **components:** Contains React components used to build the UI.
- **themes.tsx:** Defines light and dark themes using Styled Components.
- **App.tsx:** Main component that orchestrates the app's functionality.
- **Button.tsx:** Button component for UI interactions.
- **Toggler.tsx:** Component for toggling between light and dark themes.
- **InputDiv.tsx:** Component for handling user input and search functionality.
- **UserInfo.tsx:** Component for displaying user information.
- **UserContainer.tsx:** Styled component for the user container.
- **GlobalStyles.tsx:** Global styles for the app.

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/gurgenidzegiorgi/Github-user-search-app.git

cd Github-user-search-app
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the app:

```bash
pnpm run dev
```

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch: git checkout -b feature/my-feature.
3. Commit your changes: git commit -m 'Add some feature'.
4. Push to the branch: git push origin feature/my-feature.
5. Submit a pull request.

## Author

- GitHub Repo - [Github user search app](https://github.com/gurgenidzegiorgi/Github-user-search-app)
- Live URL - [Netlify](github-user-search-app-g-gurgenidze.netlify.app)
- Author - [Giorgi Gurgenidze](https://www.linkedin.com/in/george-gurgenidze-5801501a0/)
