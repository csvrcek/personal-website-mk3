# personal-website-mk3
An updated version of my personal website using React and NodeJS.

# How to run

Build the Docker image

```shell
$ docker build -t <NAME_OF_IMAGE>:latest .
```

Run the Docker container

```shell
$ docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm <NAME_OF_IMAGE>:latest
```

# How to deploy
```shell
$ npm run deploy
```
* Go into repo settings
* Under `Github Pages` add in the `Custom Domain` value to `connorsvrcek.com` (**TODO:** not sure why this is needed, should fix)