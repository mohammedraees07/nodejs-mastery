type User = {
  id: number;
  name: string;
};

const users: User[] = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

function findUserById(id: number, callback: (error: Error | null, user?: User) => void): void {
  setTimeout(() => {
    const user = users.find((currentUser) => currentUser.id === id);
    if (!user) {
      callback(new Error(`User with id ${id} was not found`));
      return
    }   

    callback(null, user);
},500)}

// findUserWithCallback(2, (error, user) => {
//   if (error) {
//     console.error(error.message);
//     return;
//   }
//   console.log("callback result", user?.id,user?.name);
// })