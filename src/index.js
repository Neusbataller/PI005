const express = require("express");
const app = express();

app.set("port", process.env.PORT || 8080);

app.use(require("./routes/index"));

app.listen(app.get("port"), () => {
  console.log("hola desde el puerto " + app.get("port"));
});
