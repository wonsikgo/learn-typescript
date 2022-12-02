{
  /* // Javascript
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // Typescript
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // Javascript
  function jsFetchNum(id) {
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // Typescript
  function fetchNum(id: string): Promise<number> {
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  } */

  // Javascript => Typescript
  // Optional parameter 파라미터가 전달될수도 있고 안될수도 있다.
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  printName("Wonsik", undefined);

  // Default parameter
  function printMessage(message: string = "default message") {
    console.log(message);
  }
  printMessage();

  // Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }

  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3));
  console.log(addNumbers(1, 2, 3, 4));
}
