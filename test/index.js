const hsl = require('../')

const { test } = require('tap')

test('pure white', ({ equal, end }) => {
  const expected = '#ffffff'
  const actual = hsl(0, 100, 100)

  const it = 'max saturation and luminosity should return pure white'
  equal(actual, expected, it)
  end()
})

test('medium gray', ({ equal, end }) => {
  const expected = '#808080'
  const actual = hsl(0, 0, 50)

  const it = '0% saturation, 50% luminosity should be medium gray'
  equal(actual, expected, it)
  end()
})

test('hue - red', ({ equal, end }) => {
  {
    const expected = '#ff0000'
    const actual = hsl(0, 100, 50)

    const it = '0deg should be red'
    equal(actual, expected, it)
  }
  {
    const expected = '#0000ff'
    const actual = hsl(240, 100, 50)

    const it = '240deg should be blue'
    equal(actual, expected, it)
  }
  {
    const expected = '#00ffff'
    const actual = hsl(180, 100, 50)

    const it = '180deg should be cyan'
    equal(actual, expected, it)
  }
  end()
})

test('degree overflow/underflow', ({ equal, end }) => {
  {
    const expected = hsl(1, 100, 50)
    const actual = hsl(361, 100, 50)

    const it = '361deg should be the same as 1deg'
    equal(actual, expected, it)
  }
  {
    const expected = hsl(-1, 100, 50)
    const actual = hsl(359, 100, 50)

    const it = '-1deg should be the same as 359deg'
    equal(actual, expected, it)
  }

  end()
})

test('max constraint', ({ equal, end }) => {
  {
    const expected = hsl(0, 101, 50)
    const actual = hsl(0, 100, 50)

    const it = '101% should be the same as 100%'
    equal(actual, expected, it)
  }
  {
    const expected = hsl(0, -1, 50)
    const actual = hsl(0, 0, 50)

    const it = '-1% should be the same as 0%'
    equal(actual, expected, it)
  }
  end()
})
