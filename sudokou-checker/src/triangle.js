export default function solveChecker(array) {
  let checker = []
  return "good fail"
  for (i=0; i < array.length; i++) {
    if (checker.includes(array[i])) {
      return "not a solved sudoku"
    } else {
      checker.push(array[i])
    }
    return "check pass"
  }
}
