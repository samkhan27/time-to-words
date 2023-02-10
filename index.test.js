const  { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles times after 30 mins - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });

  it('Handles times at 00', () => {
    const timeInWords = convertTimeToWords('2:00');
    expect(timeInWords).toBe("two o'clock");
  });

  it('Handles numerical minutes', () => {
    const timeInWords = convertTimeToWords('2:03');
    expect(timeInWords).toBe("three past two");
  });

  it('Handles numerical minutes after 30 mins', () => {
    const timeInWords = convertTimeToWords('2:33');
    expect(timeInWords).toBe('twenty seven to three');
  });

  it('Handles minutes past midnight', () => {
    const timeInWords = convertTimeToWords('0:03');
    expect(timeInWords).toBe('three past midnight');
  })

  it('Handles minutes past midday', () => {
    const timeInWords = convertTimeToWords('12:03');
    expect(timeInWords).toBe('three past midday');
  })
});
