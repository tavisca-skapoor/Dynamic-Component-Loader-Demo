import { TestCompModule } from './test-comp.module';

describe('TestCompModule', () => {
  let testCompModule: TestCompModule;

  beforeEach(() => {
    testCompModule = new TestCompModule();
  });

  it('should create an instance', () => {
    expect(testCompModule).toBeTruthy();
  });
});
