interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

class List implements Stack {
  private index: number = 0;
  private array: string[] = new Array(this.size);

  constructor(readonly size: number) {}

  push(value: string): void {
    if (typeof value !== "string") {
      throw new Error(`${value} 문자열이 아닙니다.`);
    }

    if (this.size <= this.index) {
      throw new Error("더 이상 문자열을 담을 수 없습니다.");
    }

    this.array[this.index] = value;
    this.index++;
  }
  pop(): string {
    if (this.index === 0) {
      throw new Error("List가 비어있습니다.");
    }
    this.index--;
    return this.array[this.index];
  }
}

const list = new List(10);
list.push("테스트1");
list.push("테스트2");
list.push("테스트3");
list.push("테스트4");
list.push("테스트5");

console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
console.log(list.pop());
