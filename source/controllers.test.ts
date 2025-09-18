import test from "ava";
//Importación de los Controlador de los contactos
import { ContactsController } from "./controllers"; 
test("Testeo el constructor del controller", (t) => {
  // test de ejemplo
  t.truthy(true);
});
/* Que hacer processOption? 
      Verifica que las acciones y los parametros coicidan.
        Primer caso: si tenemos  la accion de "get" y tambien el parametro de "id" entonces devolvemos el id 
        Segundo caso: comprovamos si la condicion de "save se cumple si se cumple añadimos un nuevo contacto con el metodo .addOne(parametros).
        Lo guardamos con el metodo .save() y retornamos "

    conclucion: processOption verifica hace las opciones de procesos que necesitas. si nesesitas obtenr un id o guardar un nuevo contacto ahora la pregunta es como compro bamos el test?

    tendriamos que verificar por tres procesos una que verifique la accion get y otro que verifique save tambien verificariamos si la accion no es validad.
  */
   //1. tenemos que crear una instancia del modelo ConstactsController
test("Testeo el método processOptions", (t) => {
  const modelo = new ContactsController();
     const mockContact = {
    id: 30,
    name: "Marce",
  };
    //verificacion del proceso save
    const guardarResultado = modelo.processOptions({
      action: "save",
      params: {id: 30 , name: "Marce"}
    })
    t.is(guardarResultado, "Guardado exitosamente");

    //verificacion del proceso get
   const idResultado = modelo.processOptions({action: "get", params: {id: 30}})
    t.deepEqual(mockContact, idResultado);
});
