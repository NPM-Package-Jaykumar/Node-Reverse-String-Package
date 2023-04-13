export function jkg(input: string | number): string | number {
  if (typeof input === 'string') {
    return input.split('').reverse().join('');
  } else if (typeof input === 'number') {
    return parseInt(input.toString().split('').reverse().join(''));
  } else {
    throw new Error('Invalid input type. Only string and number are supported.');
  }
}
