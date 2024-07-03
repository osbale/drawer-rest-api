
# Drawer REST API

Trying out Deno in addition with oak middleware framework to build a simple Drawer REST API

## Methods

- GET All - get all drawer items
- GET One - get drawer item
- PUT One - update drawer item
- DELETE One = delete drawer item
- POST One = add drawer item

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`CONNECTION_STRING`

## Run Locally

To run locally you need to [install deno](https://deno.com/) and [vscode deno extension](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno)


Clone repository

```bash
  git clone https://github.com/osbale/drawer-rest-api
```

Go to the project directory

```bash
  cd drawer-rest-api
```

Start development server
```bash
  deno run --allow-net --allow-read --watch src/server.ts
```

Test endpoint
```bash
  Invoke-WebRequest http://localhost:8080/drawer-items #WindowsOS
  curl http://localhost:8080/drawer-items #MacOS