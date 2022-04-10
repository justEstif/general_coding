{
  // implict types (inference)
  let helloWorld = "hello world";
  const user = {
    name: "Hayes",
    id: 0,
  };
}

{
  // explicit types
  interface User {
    name: string;
    id: number;
  }
  const user: User = {
    name: "Hayes",
    id: 0,
  };
}

{
  interface User {
    userName: string;
    id: number;
  }

  class UserAccount {
    userName: string;
    id: number;

    constructor(userName: string, id: number) {
      this.userName = userName;
      this.id = id;
    }

    get uName() {
      return this.userName;
    }
    set uName(newName: string) {
      this.userName = newName;
    }
  }

  // creating new user
  const user: User = new UserAccount("Murphy", 1);
}
