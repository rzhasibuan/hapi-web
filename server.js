console.log("hallo, kita akan belajar membuat server mengunakan hapi");

const Hapi = require("@hapi/hapi");
const routes = require("./route");

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: "localhost",
  });

  server.route(routes);

  await server.start();
  console.log(`server berjalan pada ${server.info.uri}`);
};

init();
