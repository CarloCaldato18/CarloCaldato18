import { createRoot } from 'react-dom/client'

const myelement=(
  <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td>Elisa</td>
    </tr>
  </table>
);

class Car {
  constructor(name){
    this.brand=name;
  }

  present(){
    return 'I have a ' + this.brand;
  }
}

class Model extends Car {
  constructor(name, mod){
    super(name); // <- con questo chiamo il costruttore di Car (classe padre) e ottengo l'accesso alle sue proprietà e metodi
    this.model=mod;
  }

  show(){
    return this.present() + ', it is a ' + this.model;
  }
}

const mycar=new Car("Ferrari");
console.log(mycar.present());

const mymodel=new Model("Ferrari", "SF90");
console.log(mymodel.show());

/*
classic function:
  hello = function(val) {
    return "Hello " + val;
  }
*/
// Arrow function:
hello = (val) => {
  return "Hello " + val;
}

// La differenza tra var e let è che il primo permette di dichiarare variabili anche all'interno di blocchi (come while, for, ecc...) usabili poi anche al di fuori, mentre se dichiarate col let posso essere utilizzabili solo nel blocco.
// Entrambi però dichiarano se dichiarano variabili all'interno di funzioni, queste saranno utilizzabili solo all'interno di esse.
// const è usato per dichiarare riferimenti costanti a valori. Posso cambiare gli elementi di un array dichiarato con const, cambiare le proprietà di un oggetto dichiarato con const ma non riassegnare valori, array o oggetti
createRoot(document.getElementById('sandy')).render(
  mycar.present()
)
