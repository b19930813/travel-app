

export function test(){
    var admin = require("firebase-admin");

    var serviceAccount = require("firebase-adminsdk-mil79@travel-4c6a8.iam.gserviceaccount.com");
    
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount)
    });
}





// export class Car {
//     descroption: string;
//     descroption1: string;

//     constructor() {
//       this.descroption = '我是車子';
//       this.descroption1 = ''
//     }
  
//     public getDescription(): string {
//       return this.descroption;
//     }
//   }
  
//   export class CarGG {
//     descroption: string;
  
//     constructor() {
//       this.descroption = '我是車子';
//     }
  
//     public getDescription(): string {
//       return this.descroption;
//     }
//   }


  

//   import { Collection, getRepository } from 'fireorm';

//   @Collection()
//   export class Todo {
//     id: string = "";
//     text: string = "";
//     done: Boolean = false;

//   }
  
// const todoRepository = getRepository(Todo);

// const todo = new Todo();
// todo.text = "Check fireorm's Github Repository";
// todo.done = false;

// export function CreateTodo(Todo todo){
//     await todoRepository.create(todo);
// }

