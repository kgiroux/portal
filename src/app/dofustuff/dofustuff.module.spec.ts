import { DofustuffModule } from './dofustuff.module';

describe('DofustuffModule', () => {
  let dofustuffModule: DofustuffModule;

  beforeEach(() => {
    dofustuffModule = new DofustuffModule();
  });

  it('should create an instance', () => {
    expect(dofustuffModule).toBeTruthy();
  });
});
