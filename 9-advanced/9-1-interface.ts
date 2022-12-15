{
  /**
   * Interface 규격사항
   * Type 데이터를 담을 목적
   */
  type PostionType = {
    x: number;
    y: number;
  };

  interface PostionInterface {
    x: number;
    y: number;
  }

  // object
  const obj1: PostionType = {
    x: 1,
    y: 1,
  };

  const obj2: PostionInterface = {
    x: 1,
    y: 1,
  };

  // class
  class Pos1 implements PostionType {
    x: number;
    y: number;
  }

  class Pos2 implements PostionInterface {
    x: number;
    y: number;
  }

  // Extends
  interface ZPositionInterface extends PostionInterface {
    z: number;
  }

  type ZPositionType = PostionType & { z: number };

  // only Interfaces can be merged.
  interface PositionInterface {
    z: number;
  }

  // type PostionType {}

  // Type aliaes can use computed properties
  type Person = {
    name: string;
    age: number;
  };

  type Name = Person["name"];
  type NumberType = number;
  type Direction = "left" | "right";
}
