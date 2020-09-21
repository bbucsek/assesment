import convertNumber from '../app'

test('whatever', () => {
  document.body.innerHTML =
    '<div>' +
    '  <input class="input-number" />' +
    '  <button class="btn" />' +
    '</div>';

  const num = document.querySelector('.input-number')
  const btn = document.querySelector('.btn')
  num.value = 10;
  btn.addEventListener('click', function() {
    convertNumber(num.value)
  })

  expect(convertNumber(10)).toBe("ten");
  expect(convertNumber(11)).toBe("eleven");
  expect(convertNumber(1000)).toBe("one thousand");

});