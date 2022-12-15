{
  type Video = {
    title: string;
    author: string;
    description: string;
  };

  type Optional<T> = {
    [P in keyof T]?: T[P]; // for...in
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type VideoOptional = Optional<Video>;
  const videoOp: VideoOptional = {
    title: "hi",
  };

  type Animal = {
    name: string;
    age: number;
  };

  const animal: Optional<Animal> = {
    name: "dog",
  };
  animal.name = "ellie";

  const video: ReadOnly<Video> = {
    title: "hi",
    author: "ellie",
    description: "test",
  };

  type Nullable<T> = {
    [P in keyof T]: T[P] | null;
  };
  const obj2: Nullable<Video> = {
    title: null,
    author: null,
    description: "test",
  };
  // video.author = "hello"; 불가능

  //   type VideoOptional = {
  //     title?: string;
  //     author?: string;
  //     description?: string;
  //   };

  //   type VideoReadOnly = {
  //     readonly title: string;
  //     readonly author: string;
  //     readonly description: string;
  //   };
}
