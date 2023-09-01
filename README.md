# Podcast Challenge

This is a small front-end application that allows you to explore and listen to musical podcasts. It provides a user-friendly interface to discover and enjoy podcasts conveniently.

## Getting Started

To run this application, follow these simple steps:

### Running the Application in Development Mode

To run the application in development mode, follow these steps:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/FNMieres/podcast-challenge.git
   cd podcast-challenge
   ```

2. Install the required dependencies for the frontend:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your web browser and navigate to [http://localhost:5174](http://localhost:5174) to access the application. You can now explore and test the application with unminimized and unconcatenated assets.

### Running the Application in Production Mode

To run the application in production mode with concatenated and minimized assets, follow these steps:

1. Clone the repository to your local machine (if you haven't already):

   ```bash
   git clone https://github.com/FNMieres/podcast-challenge.git
   cd podcast-challenge
   ```

2. Install the required dependencies for the frontend:

   ```bash
   npm install
   ```

3. Build the application for production:

   ```bash
   npm run build
   ```

4. Start the production server:

   ```bash
   npm run preview
   ```

5. Open your web browser and navigate to [http://localhost:5174](http://localhost:5174) to access the application. You can now explore and use the application with optimized and concatenated assets.

Please note that in production mode, the assets are minimized and concatenated for better performance.

## Technologies Used

I created the project with Vite, utilizing React and TypeScript, and integrated key libraries including React Router DOM, Redux Toolkit, Material UI, Vitest, Testing Library, ESLint, and Prettier for enhanced development and testing capabilities.

## Challenge Details

This application was developed as part of a tech challenge. The challenge requirements are listed in [Pruebatecnica-Frontend 2023](Pruebatecnica-Frontend%202023.pdf). It demonstrates my skills in front-end development, utilizing best practices, and focusing on code reusability.

## Notes

- This application is designed to provide users with an engaging and convenient way to discover and listen to musical podcasts.

- It offers a clean and user-friendly interface with three main views: the home page, podcast details, and episode details.

- The home page displays a list of the top 100 podcasts, utilizing Apple's list as a source.

- The application efficiently caches podcast data on the client, reducing unnecessary API requests and ensuring a responsive user experience.

- Real-time filtering allows users to instantly search for podcasts by text, including titles and authors.

- Detailed information about podcasts and their episodes is presented in an organized and visually appealing manner.

- The application utilizes modern technologies such as React, Redux Toolkit, and Material-UI for a seamless and attractive user interface.

- Error handling focuses on console logging for user errors, ensuring a smooth user experience.

Feel free to explore the codebase and customize the application as needed to meet the specified requirements. If you have any questions or feedback, please don't hesitate to contact me.

Enjoy exploring the world of musical podcasts! 🎧🎶
