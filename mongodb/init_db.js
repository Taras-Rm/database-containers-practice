// get database
db = db.getSiblingDB("test");

// create 'users' collection
db.createCollection("users");

// add data into 'users' collection
db.users.insertMany([
  {
    name: "Bob",
    email: "bob@test.com",
  },
  {
    name: "Nick",
    email: "nick@test.com",
  },
  {
    name: "Tom",
    email: "tom@test.com",
  },
  {
    name: "Alice",
    email: "alice@test.com",
  },
  {
    name: "Martin",
    email: "martin@test.com",
  },
]);
