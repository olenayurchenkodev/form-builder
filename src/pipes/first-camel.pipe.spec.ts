import {FirstCamelPipe} from "./first-camel.pipe";

describe('TitleCasePipe', () => {
  const pipe = new FirstCamelPipe();

  it('transforms "abc" to "Abc"', () => {
    expect(pipe.transform('abc')).toBe('Abc');
  });
});
