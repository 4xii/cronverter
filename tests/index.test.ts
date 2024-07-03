import { describe, it, expect } from 'vitest';
import CrontabConverter from '../src';

describe('CrontabConverter', () => {
  it('should convert crontab to JSON', () => {
    const crontab = `0 5 * * * /path/to/command1
30 6 * * * /path/to/command2
15 14 1 * * /path/to/command3`;

    const expectedJson = [
      { schedule: '0 5 * * *', task: '/path/to/command1' },
      { schedule: '30 6 * * *', task: '/path/to/command2' },
      { schedule: '15 14 1 * *', task: '/path/to/command3' },
    ];

    const json = CrontabConverter.crontabToJson(crontab);
    expect(json).toEqual(expectedJson);
  });

  it('should convert JSON to crontab', () => {
    const json = [
      { schedule: '0 5 * * *', task: '/path/to/command1' },
      { schedule: '30 6 * * *', task: '/path/to/command2' },
      { schedule: '15 14 1 * *', task: '/path/to/command3' },
    ];

    const expectedCrontab =
      `0 5 * * * /path/to/command1
30 6 * * * /path/to/command2
15 14 1 * * /path/to/command3`;

    const crontab = CrontabConverter.jsonToCrontab(json);
    expect(crontab).toBe(expectedCrontab);
  });


  it('should throw an error if crontab format is invalid', () => {
    const invalidCrontab = `0 5 * * *`;

    expect(() => {
      CrontabConverter.crontabToJson(invalidCrontab);
    }).toThrow('Invalid crontab format: each line must have at least 6 parts');
  });

  it('should throw an error if JSON format is invalid (not an array)', () => {
    const invalidJson = {};

    expect(() => {
      CrontabConverter.jsonToCrontab(invalidJson as any);
    }).toThrow('Invalid JSON format: input must be an array');
  });

  it('should throw an error if JSON format is invalid (missing properties)', () => {
    const invalidJson = [{ schedule: '0 5 * * *' }];

    expect(() => {
      // @ts-expect-error
      CrontabConverter.jsonToCrontab(invalidJson);
    }).toThrow('Invalid JSON format: each entry must be an object with schedule and task properties');
  });
});

