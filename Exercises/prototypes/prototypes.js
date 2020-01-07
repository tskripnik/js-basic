// https://gist.github.com/Mike-Savin/bf38383b79a8e2c032e684d7ae5a21c0
// Task 1: Make inheritance chain cat -> mammal -> animal using __proto__ property.
// Do the same thing using Object.setPrototypeOf() method. You should be able to call cat.eat, cat.feed, cat.hunt methods;

let animal = {
    weight: 10,
    eat() {
      this.weight += 1;
    }
  };
  
  let mammal = {
    feed() {
      this.weight -= 1;
    },
    //__proto__:animal
  }
  
  let cat = {
    huntCount: 0,
    hunt() {
      this.huntCount++;
      this.weight += 0.5;
    },
    //__proto__:mammal
  };
  
  Object.setPrototypeOf(cat, mammal);
  Object.setPrototypeOf(mammal, animal);
  
  cat.hunt();
  cat.eat();
  //cat.feed();
  console.log(cat.huntCount, cat.weight);

// Task 2: Check the behavior of the code and fix it

  let animal = {
    stomach: [],
    eat(food) {
      this.stomach = [food];
    }
  };
  
  let cat = {
    __proto__: animal
  };
  
  let dog = {
    __proto__: animal
  };
  
  cat.eat('fish');
  
  console.log(cat.stomach);
  console.log(dog.stomach);

// Task 3: Make a constructor function User which receives name and email parameters.
// Add to it's prototype checkIfEmailIncludesName method which returns true
// if user's email includes it's name. Create new User() with any name and email.
// Use checkIfEmailIncludesName method.

function User(name, email) {
    this.name = name;
    this.email = email
}

User.prototype.checkIfEmailIncludesName = function() {
  return this.email.includes(this.name.toLowerCase()) ? true : false;
}

let firstUser = new User('Jack', 'jack_sparrow@gmail.com');
console.log(firstUser.checkIfEmailIncludesName());

// Create AdminUser constructor function, add to it's prototype isAdmin function
// and extend AdminUser from User. Create new AdminUser() and check that it has both
// isAdmin and checkIfEmailIncludesName functions.

function AdminUser() {
  let admin;
}

AdminUser.prototype.isAdmin = function() {
  this.admin = true;
  return true;
}

const admin = new AdminUser;
admin.isAdmin();
console.log(admin);