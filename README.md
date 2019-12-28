# personal-website-mk3
An updated version of my personal website using React and NodeJS.

# How to run (dev)

Build and run the Docker image.

```shell
$ docker-compose up
```

Or run

```shell
$ docker-compose up --build
```

to rebuild image from scratch.

It's that simple!

# How to deploy
```shell
$ npm run deploy
```
* Go into repo settings
* Under `Github Pages` add in the `Custom Domain` value to `connorsvrcek.com` (**TODO:** not sure why this is needed, should fix)