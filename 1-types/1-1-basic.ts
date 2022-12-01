{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array...
   */

  // number
  const num: number = 1;

  // string
  const str: string = "hello";

  // boolean
  const boal: boolean = true;

  // undefined 단일로는 쓰이지 않음
  let name: undefined;
  // OR을 사용해서 데이터가 없다면 undefined로 정의할 수 있음
  let age: number | undefined;
  age = undefined;
  age = 1;

  function find(): number | undefined {
    return undefined;
  }

  // null 단일로는 쓰이지 않음
  let person: null;
  let person2: string | null;
  person2 = null;
  person2 = "wonsik";

  // unknown (타입을 모르는 상태) 👿 사용하지 않는것이 좋음
  let notSure: unknown = 0;
  notSure = "he";
  notSure = 1;
  notSure = true;

  // any (무엇이든 가능한 타입) 👿 사용하지 않는것이 좋음
  let anything: any = 0;
  anything = "heelo";

  // void 함수에서 리턴하는 값이 없는 경우
  function print(): void {
    console.log("hello");
    return;
  }

  // never 아무것도 리턴하지 않는 경우
  function throwError(message: string): never {
    // message => server (log)
    // while (true) {}
    throw new Error(message);
  }

  // object 원시타입을 제외한 모든 object를 사용가능 👿 사용하지 않는것이 좋음
  let obj: object;
  function accpetSomeObject(obj: object) {}
  accpetSomeObject({ name: "ellie" });
  accpetSomeObject({ animal: "dog" });
}
