## Step 1: Build the Docker Image

Run the following command in the terminal where your Dockerfile is located:

```sh
docker build -t flask-bg-color .
```

## Run the Docker Container

Pass the background color as an environment variable when running the container:

```sh
docker run -d -p 5000:5000 -e BG_COLOR=lightblue flask-bg-color
```

Here:

- `-d`: Runs the container in detached mode.
- `-p 5000:5000`: Maps port 5000 of the container to port 5000 of your machine.
- `-e BG_COLOR=lightblue`: Sets the environment variable `BG_COLOR` to `lightblue`.