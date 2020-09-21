import convertNumber from '../app'

test('10 to be equal ten', () => {
  expect(convertNumber(10)).toBe("ten"); 
});

test('11 to be equal eleven', () => {
  expect(convertNumber(11)).toBe("eleven"); 
});

test('1000 to be equal one thousand', () => {
  expect(convertNumber(1000)).toBe("one thousand"); 
});


  