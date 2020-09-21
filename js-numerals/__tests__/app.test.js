import convertNumber from '../app'

test('10 to be equal to: ten', () => {
  expect(convertNumber(10)).toBe("ten"); 
});

test('11 to be equal to: eleven', () => {
  expect(convertNumber(11)).toBe("eleven"); 
});

test('1000 to be equal to: one thousand', () => {
  expect(convertNumber(1000)).toBe("one thousand"); 
});

test('102012 to be equal to: one hundred two thousand twelve', () => {
  expect(convertNumber(102012)).toBe("one hundred two thousand twelve"); 
});

test('770243101 to be equal to: seven hundred seventy million two hundred forty-three thousand one hundred one', () => {
  expect(convertNumber(770243101)).toBe("seven hundred seventy million two hundred forty-three thousand one hundred one"); 
});


  //test rule 6

  test('1200 to be equal to: twelve hundred', () => {
    expect(convertNumber(1200)).toBe("twelve hundred"); 
  });
  