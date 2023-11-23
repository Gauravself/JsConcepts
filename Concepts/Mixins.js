let myMixin = {
  sayHi() {
    console.log(`Hi ${this.name}`);
  },
  sayBye() {
    console.log(`Bye ${this.name}`);
  },
};

class User {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(User.prototype, myMixin);

new User("Gaurav").sayHi();
