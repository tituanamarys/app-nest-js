import { User } from './user.dto';

describe('User', () => {
  it('should be defined', () => {
    expect(new User()).toBeDefined();
  });
});
