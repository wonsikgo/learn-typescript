{
  /**
   * Type Assertions
   */

  function isStrFunc(): any {
    return "hello";
  }

  const result = isStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 😱

  function findNumber(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumber();
  // !. 무조건 null이 아니라고 표현, 하지만 에러가 날 수 있다.
  numbers!.push(2); // 😱

  const button = document.querySelector("class");
  button?.nodeValue;
}
