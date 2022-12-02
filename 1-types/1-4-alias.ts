{
  /**
   * Type aliases
   */
  type Text = string;
  const name: Text = "wonsik";
  const address: Text = "korea";
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };

  const student: Student = {
    name: "wonsik",
    age: 20,
  };

  /**
   * String Literal Types
   */
  type Name = "name";
  let ellieName: Name;
  ellieName = "name";

  type Boal = true;
  const isCat: Boal = true;
}
