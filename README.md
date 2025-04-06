# React + Vite

# DEPLOYMENT LINKS :-
Main :- https://vercel.com/muskan-agarwals-projects/game-atlas  

Branch :- https://game-atlas.vercel.app/

# AUTHOR :- MUSKAN AGARWAL
        - Email: muskaanagarwal2591@gmail.com
        - LinkedIn: https://www.linkedin.com/in/muskan-agarwal-b23450267/
        - GitHub: https://github.com/muskanagarwal23

- created vite app

- configured redux toolkit

- configured React-bootstrap

- installed and set up Clerk Authentication

- structured folders: 
    - components
    - pages
    - redux store(store)
    - slices
    - context
    - assets
    - api

- created routes using react-router-dom

- used vanilla css and bootstrap for styling

- built Header component with Logo , Searchbar , Bookmark and theme icons 

- used Material UI icons for better display 

- implemented Login and Signup pages using Clerk

- created protected routes (acess of website only after signed-in users)

- configured Redux Store with:

    - gameSlice for handling API data

    - favouriteSlice for managing bookmarks

    - filterSlice for applying filters

- created real-time search functionality using RAWG API

- built Sidebar with filtering:

    - Genre / Category

    - Tags

    - Release Year

    - Popularity

- made sidebar responsive and not visible on other pages (Bookmark,GameDeatail)  

- implemented filter state in Redux

- created GameCard component and display details(name,genre,ratings,tags) which was fetched from API

- designed responsive GameGrid layout

- used RAWG’s now-playing/popular API endpoints

- created custom hooks for:

    - fetching games

    - fetching genres, tags, filters

    - created GameDetail page:

    - embedded screenshots

    - showed ratings

- fetched from RAWG API

- displayed all data cleanly using React Bootstrap

- added Pagination using RAWG's &page=n

- added Previous and Next buttons

- managed via Redux

- added Bookmark (Library) page

- reused GameCard in libaray page as well

- persistent storage using localStorage

- state managed via Redux

- added protected route for bookmarks (redirects if not logged in)

- added loading skeletons or shimmer effects

- made project fully responsive 

- added dark mode/light mode for user experience 

- integrated environment variables via .env

- added .env to .gitignore

- deployed using Vercel


