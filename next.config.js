const dev = process.env.NODE_ENV !== "production";
module.exports = {
  env: {
    mongouri:
      "Ymongodb+srv://a7med:Kalli.linx2@cluster0.ujyiq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    server: dev
      ? "http://localhost:3000"
      : "https://your_deployment.server.com",
  },
};
