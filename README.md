# personal-website-mk3
An updated version of my personal website using React and NodeJS.

# How to run

Build the Docker image

```shell
docker build -t <NAME_OF_IMAGE>:latest .
```

Run the Docker container

```shell
docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm <NAME_OF_IMAGE>:latest
```
