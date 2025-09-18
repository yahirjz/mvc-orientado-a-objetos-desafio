import { ContactsController, ContactsControllerOptions } from "./controllers";
import { ContactsCollection } from "./models";
function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  return {
    action: null,
    params: null,
  };
}

function main() {
  const contactos = new ContactsCollection();
  contactos.load(); // cargamos los contactos.
  console.log(contactos.getAll()); 
 //Buscamos por id
  console.log(contactos.getOneById(4)); 
  console.log(contactos.getOneById(1));
}

main();
