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
$ docker build . -t <CONT_TAG>
$ docker run <CONT_TAG>:latest
```
Or simply push to `master` to initiate the GitHub Action pipeline.

* Go into repo settings
* Under `Github Pages` add in the `Custom Domain` value to `connorsvrcek.com` (**TODO:** not sure why this is needed, should fix)