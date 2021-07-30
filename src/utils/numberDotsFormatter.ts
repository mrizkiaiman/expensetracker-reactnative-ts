const numberDotsFormatter = (input: any) => {
  if (typeof input !== 'number') {
    return '-'
  }

  let rupiah = ''
  let numberrev = input.toString().split('').reverse().join('')
  for (let i = 0; i < numberrev.length; i++) {
    if (i % 3 == 0) {
      rupiah += numberrev.substr(i, 3) + '.'
    }
  }
  return rupiah
    .split('', rupiah.length - 1)
    .reverse()
    .join('')
}

export default numberDotsFormatter
