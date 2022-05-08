# Klabber

Klabber is a video game suggestion app in the format of a conversation, it helps you get to the games you want through a question. It relies on [Wit.ai](https://wit.ai/) to process requests and [RAWG](https://rawg.io/) as an API source for the game data.

<img width="652" alt="Screen Shot 2022-05-07 at 9 07 37 PM" src="https://user-images.githubusercontent.com/99497246/167277527-70391f03-161d-471c-97c7-9d8e5ad1482a.png">

## Explanation

This repo handles the front end of Klabber, and installation guide follows below. However you will probably notice after trying it yourself that it doesn't work as it should, this is because it is calling a heroku server that hosts the custom back end I've built for Klabber. That is currently not a public repo. 

I highly recommend building your own backend and plugging that in, using this repo as inspiration for your own take. 

The Wit.ai patterns used are also not publicly available. 

## Installation

### Prerequisites

* [Node](https://nodejs.org/en/download/) installed
* NPM, Yarn, or PNPM installed

### Installing 

To run the project first ensure packages are installed by running (note: the following instructions use Yarn, but substitute it for the package manager you prefer):

```Shell
yarn install
```

### Developing

To develop and test any changes you might make:

```Shell
yarn dev
```

### Building 

Finally building, the final step:

```Shell
yarn build
```

Other script options are available within the package.json file. 

--- 

# Credits

* [Wit.ai](https://wit.ai/)
* [RAWG](https://rawg.io/)
