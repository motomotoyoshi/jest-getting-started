const shoppingList = [
  'bike',
  'car',
  'pen',
  'apple'
];

test('the shopping list has milk on it', () => {
  expect(shoppingList).toContain('apple');
  expect(new Set(shoppingList)).toContain('apple');
});