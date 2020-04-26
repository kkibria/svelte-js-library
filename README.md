
This is an example where we will use node package in a javascript file. This kind of setup would work in a node environment without
problem. But in a browser using ``require`` would normally be a problem. We can use the ``browserify`` to make it work in svelte.

In this example we will instantiate jquery with ``require`` as a node module.

## Get started

Install the dependencies.

```bash
npm install
```

## dev build 
```bash
npm run jswrap
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000).

## Building and running in production mode
To create an optimized version of the app:

```bash
npm run jswrap
npm run build
```

You can run the newly built app with `npm run start`.

