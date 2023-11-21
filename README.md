# MERN Stack E-Learning System

## Config environment

### Frontend

Create a new `.env` file in the folder `client`. To operate frontend, we need some information for connecting backend API, as well as constant for running client:
- `API`: The url of backend that React will connect to

### Backend

Create a new `.env` file in the folder `server`. To operate the backend, we need some information for connecting MongoDB, as well as running server:

- `PORT`: Used for indicating the port that server will listen. If this is empty, default port is 3030
- `USER_DATABASE`: User in MongoDB cluster
- `PASSWORD_DATABASE`: Password in MongoDB cluster
- `DATABASE_COLLECTION`: Collection in MongoDB cluster