import solveChecker from '../src/triangle.js';

describe ('solveChecker', () => {

  test('should correctly determine if an array would fail a sudoku', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 8];
    expect(solveChecker(input)).toEqual("not a solved sudoku");
  });

  test('should correctly determine if an array would pass a sudoku', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(solveChecker(input)).toEqual("check pass");
  });
});