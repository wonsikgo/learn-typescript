{
  /**
   * Type inference (타입 추론)
   */

  let text = "hello";
  text = "hi";

  function print(message = "hello") {
    console.log(message);
  }

  print("hi");
  // print(1);

  // 타입 추론이 가능하나, 명시적으로 작성하는것이 더 좋음
  function add(x: number, y: number) {
    return x + y;
  }

  const result = add(1, 2);
}
