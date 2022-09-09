import { Observable } from 'rxjs';

let message: string = 'Hello World';
console.log(message);

const foo = new Observable(subscriber => {
    console.log('Hello');
    subscriber.next(42);
  });
  
  foo.subscribe(x => {
    console.log(x);
  });
  foo.subscribe(y => {
    console.log(y);
  });