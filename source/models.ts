// este import existe solo para que tsc lo tome y lo copie a /build
import "./contacts.json";
import * as jsonfile from "jsonfile";

// si no estuviera este import typescript no se da cuenta que lo necesitamos
// ya que para escribir o leer al archivo usamos la libreria "jsonfile"

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  data: Contact[];

  constructor(){
    this.data = []
  }
  load(){ // <-- Lectura del archivo
    const json = jsonfile.readFileSync(__dirname + "/contacts.json"); //cargamos el archivo json
    this.data = json;
  }
  getAll(){
    return this.data;
  }
  addOne(contact:Contact){ //<----- Para  agregar 
    this.data.push(contact);
  }
  save(){
    jsonfile.writeFileSync(__dirname + "/contacts.json", this.data); // sobreescribimos el archivo. de data 
  }
  ///
  getOneById(id: number){ // <--- Para buscar por ID
    const idEncontrado = this.data.find(encontrar => encontrar.id === id);
    if(idEncontrado){
      return idEncontrado;
    }
     return `ID:${id} no encontrado `;
  }
}
export { ContactsCollection };
