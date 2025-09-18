import { ContactsCollection } from "./models";

export type ContactsControllerOptions = {
  action?: "get" | "save" | null;
  params: any;
};

class ContactsController {
  contacts: ContactsCollection;
  constructor() {
    this.contacts = new ContactsCollection(); // Instanciás y guardás
    this.contacts.load(); //para cargar el archivo Json
  }

  //* 
  processOptions(options: ContactsControllerOptions) {
    const {action, params} = options; // destructutamos option

    //* Primera condicional usando la accion "get"
    if(action === "get"){
      if(params.id){
        return this.contacts.getOneById(params.id); // retornamos por id
      }
      return this.contacts.getAll() // si no retornamos todo
    }

    //* Segunda condicional usando la accion "save"
    if(action === "save"){
      this.contacts.addOne(params);// se añade el nuevo contacto
      this.contacts.save()// se guarda los nuevo parametros
      return "Guardado exitosamente";
    }
    return "Acción no valida";
  }
  
}

export { ContactsController };
