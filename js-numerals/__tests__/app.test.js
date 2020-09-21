import convertNumber from '../app'

test('whatever', () => {
  document.body.innerHTML =
    '<div>' +
    '  <input class="input-number" />' +
    '  <button class="btn" />' +
    '</div>';

  const num = document.querySelector('.input-number')
  const btn = document.querySelector('.btn')
  inp.value = 10;
  btn.addEventListener('click', function() {
    convertNumber(inp.value)
  })

  expect(convertNumber(10)).toBe("ten");

});