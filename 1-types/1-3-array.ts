{
  // Array
  const fruits: string[] = ["ð", "ð"];
  const scores: Array<number> = [1, 2, 3];
  function printArray(fruits: readonly string[]) {}

  // Tuple -> interface, type alias, classë¥¼ ì¬ì©íë ê²ì´ ì¢ì
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
}
