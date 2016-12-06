# Path

## Setting up the dev environment
### Clone the repo
```sh
git clone git@github.com:andela/path.git
```

### Install dependencies
```sh
npm install
```

### Setup authentication
For the authentication to work with the API gateway, the app must be served
from an `andela.com` subdomain.

#### Create a local `andela.com` subdomain
Add the domain mapping to your `/etc/hosts` or `/private/etc/hosts`:
```
127.0.0.1       localhost
127.0.0.1       path-dev.andela.com
```

### Start the server

To start the development server run:
* `npm run start:dev`

_If you want to test out the production server, run_:
* `npm run clean` to remove old builds
* `npm run build` to build the app
* `npm start` to start the production server

### View the running app

Visit `http://path-dev.andela.com:3000` or whatever subdomain you added to your hosts file to view the app.


### Using the redux logger and dev tools

You can easily debug the app using the redux logger or the redux dev tools:
* To view the logger, you just need to open you browser's console.
* To use the dev tools, use <kbd>Ctrl</kbd>+<kbd>h</kbd> to toggle visibilty and <kbd>Ctrl</kbd>+<kbd>q</kbd> to change position.
