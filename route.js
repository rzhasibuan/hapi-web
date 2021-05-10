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
    method: '*',
    path: '/',
    handler: (request, h) => {
      return 'Halaman tidak dapat di akses dengan method tersebut';
    }
  },
  {
    method: "GET",
    path: "/about",
    handler: (request, h) => {
      return "About Page";
    },
  },
  {
    method: '*',
    path: '/about',
    handler : (request,h) => {
      return "halaman tidak dapat di akses dengan method ";
    }
  },
  {
    method: '*',
    path: '/{any*}',
    handler: (request,h) => {
      return "halaman tidak dapat ditemukan";
    }
  },
  {
    method: 'GET',
    path: '/hello/{name?}',
    handler: (request,h) => {
      const {name = "stranger"} = request.params;
      return `hello, ${name}!`;
    }
  },
];

module.exports = routes;
