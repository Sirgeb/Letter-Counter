import countLettersInANumber from '../countLettersInANumber';

test('it counts correctly', () => {
  const result = countLettersInANumber(957);
  expect(result).toBe(24);
});

test('it returns a number', () => {
  const result = countLettersInANumber(5);

  if (typeof result !== "number") {
    throw new Error('Not a number');
  } 
});
