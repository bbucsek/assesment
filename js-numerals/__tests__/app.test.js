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

  test('5555 to be equal to: fifty-five hundred fifty-five', () => {
    expect(convertNumber(5555)).toBe("fifty-five hundred fifty-five"); 
  });

  test('9901 to be equal to: ninety-nine hundred one', () => {
    expect(convertNumber(9901)).toBe("ninety-nine hundred one"); 
  });
  

  //test huge numbers

  test('9748280719914710 to be equal to: nine quadrillion seven hundred forty-eight trillion two hundred eighty billion seven hundred nineteen million nine hundred fourteen thousand seven hundred ten', () => {
    expect(convertNumber(9748280719914710)).toBe("nine quadrillion seven hundred forty-eight trillion two hundred eighty billion seven hundred nineteen million nine hundred fourteen thousand seven hundred ten"); 
  });

  test('1648264559103 to be equal to: one trillion six hundred forty-eight billion two hundred sixty-four million five hundred fifty-nine thousand one hundred three', () => {
    expect(convertNumber(1648264559103)).toBe("one trillion six hundred forty-eight billion two hundred sixty-four million five hundred fifty-nine thousand one hundred three"); 
  });
  