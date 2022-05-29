const redux = require("redux");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUYMOB = "BUYMOB";
const BUYTAB = "BUYTAB";

function buyMob() {
  return {
    type: BUYMOB,
    info: "first",
  };
}
function buyTab() {
  return {
    type: BUYTAB,
    info: "second",
  };
}

const mobState = {
  numOfMobs: 100,
};
const tabState = {
  numOfTabs: 50,
};

const mobReducer = (state = mobState, action) => {
  switch (action.type) {
    case BUYMOB:
      return {
        ...state,
        numOfMobs: state.numOfMobs - 1,
      };
    default:
      return state;
  }
};
const tabReducer = (state = tabState, action) => {
  switch (action.type) {
    case BUYTAB:
      return {
        ...state,
        numOfTabs: state.numOfTabs - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  mob: mobReducer,
  tab: tabReducer,
});

const store = createStore(rootReducer);

console.log("initialState is ", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("updatedStete is", store.getState())
);

store.dispatch(buyMob());
store.dispatch(buyMob());
store.dispatch(buyMob());
store.dispatch(buyMob());
store.dispatch(buyMob());
store.dispatch(buyMob());

unsubscribe();

// console.log(typeof([1, 2, 3]));

// {
//     var ali = "ali"
//     let mamad= "mamad"
// }
// function ali() {
//     var hasan = "hasan"
//     let vahid = "vahid"
// }
// console.log("updatedState is", store.getState());
// console.log(ali);
// console.log(mamad);
// console.log(hasan);
// console.log(vahid);

// let a;
// var b;
// console.log(a);
// console.log(b);

// for (var i=0; i<3; i++) {
//     setTimeout(() => console.log(i),0);
//   }
// for (var i=0; i<3; i++) {
//     console.log(i);
//   }
// for (let i=0; i<3; i++) {
//     setTimeout(() => console.log(i),0);
//   }
// for (let i=0; i<3; i++) {
//     console.log(i);
//   }

// const radius = 20

// const shape = {
//     radius: 10,
//     diameter() {
//       return this.radius * 2;
//     },
//     perimeter: () => 2 * Math.PI * radius,
//   };

//   console.log(shape.diameter());
//   console.log(shape.perimeter());

// let myFunc = {
//   showArgs(){
//    console.log(arguments);
//   }
//  };
//  myFunc.showArgs(1, 2, 3, 4);
// let myFunc = {
//   showArgs: () => {
//     console.log(...arguments);
//   },
// };
// myFunc.showArgs(1, 2, 3, 4);

// let x = function(){
//   console.log(arguments);
// };
// x(1,2,3);
// let x = (...arguments) => {
//   console.log(...arguments);
// };
// x(1,2,3);

// function regFunc() {
//   return console.log("Regular Function");
// }
// regFunc(); 
// function regFunc() {
//   return console.log("Regular Function");
// }
// regFunc(); 

// var x = (x) => {
//   console.log("i'm", x);
// }
// x("mamad");
// var x = (x) => {
//   console.log("i'm", x);
// }
// x("mamad");

// var arrowFunction = (...args) => {
//   console.log(...args)
// }
// arrowFunction(1,2)
// // 1 2

// // 3️⃣ Indirect Invocation
// const context = { aVal: 'A', bVal: 'B' };
// function indirectInvocation() {
//     console.log(this);
// }
// indirectInvocation.call(context);  // logs { aVal: 'A' }
// indirectInvocation.apply(context); // logs { bVal: 'A' }

// class FullName {
//   constructor(name) {
//       this.name = name;
//   }
//   result() {
//       console.log(this.name)
//   }
// }
// let name = new FullName("Suprabha")
// console.log(name) 
// // FullName {name: "Suprabha"}
// setTimeout(name.result.bind(name), 2000) 
// // Suprabha

// console.log(+true);
// console.log(!"");

// let name = "parsa";
// let family = name;
// console.log(family);

// class Chameleon {
//   static colorChange(newColor) {
//     this.newColor = newColor;
//     return this.newColor;
//   }

//   constructor({ newColor = 'green' } = {}) {
//     this.newColor = newColor;
//   }
// }
// const freddie = new Chameleon({ newColor: 'purple' });
// console.log(freddie.colorChange('orange'));

// let greeting;
// greetign = {}; // Typo!
// console.log(greetign);

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }
// const lydia = new Person('Lydia', 'Hallie');
// const sarah = Person('Sarah', 'Smith');
// console.log(lydia);
// console.log(sarah);

// const sum = eval('10*10+5');
// console.log(sum);

// let a = ""
// a.toString();

// const obj = {
//   name: "ali"
// }
// let xyz ={};
// let abc ={};
// xyz[obj] = 123
// xyz[obj] = 456
// console.log(xyz);

// let person = { name: 'Lydia' };
// const members = person;
// person = null;

// console.log(members);
// console.log(person);