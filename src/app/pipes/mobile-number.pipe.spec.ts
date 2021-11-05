import { MobileNumberPipe } from './mobile-number.pipe';

describe('MobileNumberPipe', () => {
  it('create an instance', () => {
    const pipe = new MobileNumberPipe();
    expect(pipe).toBeTruthy();
  });

  it('should display mobile number is (651) 417 1511 format ', () => {
    const mobileNumber = '6514171511';
    const pipe = new MobileNumberPipe();
    const result = pipe.transform(mobileNumber);

    expect(result).toBe('(651) 417 1511');

  })
});
