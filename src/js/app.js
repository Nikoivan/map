class ErrorRepository {
  constructor() {
    this.error = new Map();
  }

  addError(name, description) {
    this.error.set(name, description);
  }

  translate(code) {
    if (this.error.has(code)) {
      return this.error.get(code);
    }
    return 'Unknown error';
  }
}

export default ErrorRepository;

const somes = new ErrorRepository();
somes.addError('Title of error', 'some description about');
const result = somes.translate('Title of error');

console.log(result);
