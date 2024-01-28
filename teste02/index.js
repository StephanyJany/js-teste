const users = [
    {
      common: [
        {
          name: "user 1",
          age: 12,
          email: "user1@gmail.com"
        },
        {
          name: "user 2",
          age: 16,
          email: "user2@gmail.com"
        },
        {
          name: "user 3",
          age: 13,
          email: "user3@gmail.com"
        },
      ],
      premium: [
        {
          name: "user 4",
          age: 12,
          email: "user4@gmail.com"
        },
        {
          name: "user 5",
          age: 16,
          email: "user5@gmail.com"
        },
        {
          name: "user 6",
          age: 13,
          email: "user6@gmail.com"
        },
      ]
    }
  ]

users[0].common[0].name = "Marcos"
users[0].common[1].email = "maria@gmail.com";
users[0].premium[1].age = 24;
console.log();