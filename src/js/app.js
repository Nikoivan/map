class ErrorRepository {
  constructor() {
    this.error = new Map();
    this.error.set(405, "Method Not Allowed");
    this.error.set(404, "Not Found");
    this.error.set(502, "Bad Gateway");
  }

  translate(code) {
    if (this.error.has(code)) {
      return this.error.get(code);
    }
    return "Unknown error";
  }
}

export default ErrorRepository;

const somes = new ErrorRepository();

const result = somes.translate(409);

console.log(result);
