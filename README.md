# [iNotebook](https://inotebook23.herokuapp.com)
iNotebook is a MERN Stack application which stores your data safely.

---

## Required Environment Variables

VARIABLE | Sample value
---- | ---
KEY  | sample_key
URI  | mongodb://localhost/iNotebook
REACT_APP_HOST_KEY | http://localhost:5000


## Installation Instructions

1. Install *Node.js*
2. Install *npm*
3. If you plan to use a local instance of *MongoDB database*, install *MongoDB atlas*.
4. Clone this github repo.
5. In the local project directory, create a new file called "`.env`".
6. Setup the environment variables as described above.
7. Open the local project directory in a terminal, and run: `npm install`.


## To start the application locally

In the project directory, you can run:
---
```cd client```
### `npm run start`

Runs the front-end client app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

```cd server```
### `nodemon .\index.js`

Runs the back-end server app in the development mode.<br>
Open [http://localhost:5000](http://localhost:8000) to view it in the browser. Please note that the server requires an active instance of the **MongoDB database**. Either provide a *MongoDB atlas* link in the `URI` environment variable, or use a local database, by placing its URI in the same.

---

