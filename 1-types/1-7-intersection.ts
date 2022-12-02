{
  /**
   * Intersection Types: &, and
   */

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    empolyeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.empolyeeId, person.work());
  }

  internWork({
    name: "Wonsik",
    score: 1,
    empolyeeId: 123,
    work: () => {},
  });
}
