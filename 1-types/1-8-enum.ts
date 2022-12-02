{
  /**
   * Enum 여러가지 관련된 상수 값들을 정의한것
   */

  // Javascript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;

  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // Typescript
  enum Days {
    Monday,
    Tuesday,
    Wednesday,
  }

  console.log(Days.Monday);

  let day: Days = Days.Monday;
  // Enum은 다시 바인딩 가능하다
  day = 4;
  console.log(day);

  // Union 타입이 좀 더 안전하다
  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";

  let dayOfWeek: DaysOfWeek = "Monday";
  // 불가능
  // dayOfWeek = "test";
}
