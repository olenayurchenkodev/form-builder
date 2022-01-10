import {WayDirectionPipe} from "./way-direction.pipe";

describe('WayDirectionPipe', () => {
  const pipe = new WayDirectionPipe();

  it('transforms', () => {
    expect(pipe.transform('/')).toBe('Login page');
    expect(pipe.transform('/form-builder')).toBe('Form builder');
  });
});
