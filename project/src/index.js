const express = require("express");
const mongoose = require("mongoose");
const mocksRouter = require("./routes/mocks.router");

const app = express();

//conectar a mongodb
mongoose
  .connect("mongodb://localhost:27017/entregaBackend3", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conectado a MongoDB");
  })
  .catch((err) => {
    console.error("Error al conectar a MongoDB:", err);
  });

//middleware para parsear jso
app.use(express.json());

//usar las rutas del router mocks
app.use("/api/mocks", mocksRouter);

//configurar el puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
