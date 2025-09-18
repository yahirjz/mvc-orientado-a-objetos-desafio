import test from "ava";
import { ContactsCollection } from "./models";
import * as contactsObject from "./contacts.json";
import * as jsonfile from "jsonfile";

test("Testeo el load del modelo", (t) => {
  const model = new ContactsCollection();
  model.load();
  t.deepEqual(contactsObject, model.getAll());
});

test("Testeo el addOne del modelo", (t) => {
  const model = new ContactsCollection();
  const mockContact = {
    id: 30,
    name: "Marce",
  };
  model.addOne(mockContact);
  t.deepEqual(model.getAll(), [mockContact]);
});

test("Testeo el save del modelo", (t) => {
  const model = new ContactsCollection();
  model.load();
  const mockContact = {
    id: 30,
    name: "Marce",
  };
  model.addOne(mockContact);
  model.save();
  const fileContent = jsonfile.readFileSync(__dirname + "/contacts.json");
  t.deepEqual(fileContent, model.getAll());
});

test("Testeo el getOneById del modelo", (t) => {
  const model = new ContactsCollection(); // crea uns isntancia del modelo ContactsCollection
  const mockContact = { // Crea un contacto de prueba 
    id: 31,
    name: "Marce",
  };
  model.addOne(mockContact); // lo agregamos a model  ese contacto se agrega a tu colección 
  const one = model.getOneById(31); // Lo buscas por ID
  t.deepEqual(one, mockContact); // para combrobar que el resultado sea indentico al que agregaste 
});
