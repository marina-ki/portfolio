export const range = (start: number, end: number) =>
  [...Array(end - start + 1)].map((_, i) => start + i)

//range(2,6) -> [2,3,4,5,6]
