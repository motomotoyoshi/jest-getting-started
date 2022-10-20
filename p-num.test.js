test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 0; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }    
  }
});