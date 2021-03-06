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
    method: "*",
    path: "/",
    handler: (request, h) => {
      return "Halaman tidak dapat di akses dengan method tersebut";
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (request, h) => {
      return "About Page";
    },
  },
  {
    method: "*",
    path: "/about",
    handler: (request, h) => {
      return "halaman tidak dapat di akses dengan method ";
    },
  },
  {
    method: "*",
    path: "/{any*}",
    handler: (request, h) => {
      return "halaman tidak dapat ditemukan";
    },
  },
  {
    method: "GET",
    path: "/queryparameter/",
    handler: (request, h) => {
      const { name, location } = request.query;
      return `Hello, ${name} from ${location}`;
    },
  },
  {
    method: "GET",
    path: "/hello/{name?}",
    handler: (request, h) => {
      const { name = "stranger" } = request.params;
      const { lang } = request.query;
      if (lang === "id") {
        return `hai, ${name}`;
      }
      retrun`hallo, ${name}`;
    },
  },
  {
    // mengunakan payload
    method: "POST",
    path: "/login",
    handler: (request, h) => {
      const { username, password } = request.payload;
    },
  },
  {
    method: "GET",
    path: "/home/{name}",
    handler: (request, h) => {
      const { name } = request.params;
      return h.response(`Data Success Created ${name}`).code(201);
    },
  },
];

module.exports = routes;
