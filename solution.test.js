const solution = require('./solution');

test('adds (1, 1) to equal 1', () => {
  expect(solution(1, 1)).toBe(1);
});
test('adds (2, 3) to equal 9', () => {
    expect(solution(2, 3)).toBe(9);
});
test('adds (3, 2) to equal 8', () => {
    expect(solution(3, 2)).toBe(8);
});
test('adds (4, 2) to equal 12', () => {
    expect(solution(4, 2)).toBe(12);
});