import ErrorRepository from '../src/js/app';

const somes = new ErrorRepository();

somes.addError('Title of error', 'some description about');

test('test for method addError of class ErrorRepository', () => {
  expect(somes.error.size).toBe(1);
});

test('test for method thanslate(isError) of class ErrorRepository', () => {
  expect(somes.translate('Title of error')).toBe('some description about');
});

test('test for method thanslate(noError) of class ErrorRepository', () => {
  expect(somes.translate('Some error')).toBe('Unknown error');
});
