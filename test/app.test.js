import ErrorRepository from "../src/js/app";

const somes = new ErrorRepository();

test("test for method thanslate(isError) of class ErrorRepository", () => {
  expect(somes.translate(405)).toBe("Method Not Allowed");
});

test("test for method thanslate(noError) of class ErrorRepository", () => {
  expect(somes.translate("Some error")).toBe("Unknown error");
});
