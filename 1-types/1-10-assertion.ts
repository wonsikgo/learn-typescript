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
  console.log((wrong as Array<number>).push(1)); // π±

  function findNumber(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumber();
  // !. λ¬΄μ‘°κ±΄ nullμ΄ μλλΌκ³  νν, νμ§λ§ μλ¬κ° λ  μ μλ€.
  numbers!.push(2); // π±

  const button = document.querySelector("class");
  button?.nodeValue;
}
