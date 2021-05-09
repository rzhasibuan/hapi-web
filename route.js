//   route
const routes = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Hello world";
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (request, h) => {
      return "About Page";
    },
  },
];

module.exports = routes;
