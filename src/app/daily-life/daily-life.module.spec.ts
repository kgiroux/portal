import { DailyLifeModule } from './daily-life.module';

describe('DailyLifeModule', () => {
  let dailyLifeModule: DailyLifeModule;

  beforeEach(() => {
    dailyLifeModule = new DailyLifeModule();
  });

  it('should create an instance', () => {
    expect(dailyLifeModule).toBeTruthy();
  });
});
