{
  /**
   *  Java: Exception
   *  Javascript: Error
   *  Error(Exception) Handling : try => catch => finally
   */
  // const array = new Array(10000000000000);

  function readFile(fileName: string): string {
    if (fileName === "not exist!") {
      throw new Error(`file not exist ${fileName}`);
    }
    return "file contents";
  }

  function closeFile(file: string) {}

  const fileName: string = "not exist!";

  try {
    console.log(readFile(fileName));
  } catch (error) {
    console.log("catched!!");
  } finally {
    closeFile(fileName);
    console.log("finally!");
  }
  console.log("!!!");
}
