import { Form } from './form';

describe('Form', () => {
  it('should create an instance', () => {
    expect(new Form(1001,"Anmol",23000,".Net")).toBeTruthy();
  });
});
