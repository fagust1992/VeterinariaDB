const fs = require("fs"); // importamos moduolo node///
const registrar = (valor1, valo2, valor3, valor4, valor5) => {
  // funcion registrar//
  const file = fs.readFileSync("./citas.json", "utf8");
  console.log(file); // recuperamos el archivo json  ya creado vacio
  const datos = JSON.parse(file); // convertimos

  const citas_perritos = {
    // asignamos los valores
    nombre: valor1,
    edad: valo2,
    animal: valor3,
    color: valor4,
    enfermedad: valor5,
  };
  fs.writeFileSync("citas.json", JSON.stringify([...datos, citas_perritos]));
  console.log("¡Registro realizado,felicidades!");
};

const leer = () => {
  const file = JSON.parse(fs.readFileSync("citas.json", "utf8"));
  console.log(file);
};

module.exports = { registrar, leer };
