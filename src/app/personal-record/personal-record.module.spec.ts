import { PersonalRecordModule } from './personal-record.module';

describe('PersonalRecordModule', () => {
  let personalRecordModule: PersonalRecordModule;

  beforeEach(() => {
    personalRecordModule = new PersonalRecordModule();
  });

  it('should create an instance', () => {
    expect(personalRecordModule).toBeTruthy();
  });
});
