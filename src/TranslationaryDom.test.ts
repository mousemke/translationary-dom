// import { Formatter, TranslationObject } from "t";
// import useT from "./";
import exampleTranslations from "./example-app.en.json";

// const formatter: Formatter = (value: string) => value;

// const fetchTranslations = (): TranslationObject =>
//   exampleTranslations;

// const defaultProps = {
//   appName: "example-app",
//   fetchTranslations,
//   formatter,
//   lang: "en",
// };

// const renderAndPrepare = async (props = {}) => {
// const { result, waitForNextUpdate } = renderHook(() => useT({ ...defaultProps, ...props}));

// await act(() => waitForNextUpdate());

// return {
//   result,
//   waitForNextUpdate
// };
// };

describe("translationary-react", () => {
  describe("useT", () => {
    expect(exampleTranslations).toBe(false);
    // renderAndPrepare().then(({ result }) => {

    // expect(result.current[0]).toBeInstanceOf(Function);
    // expect(result.current[1]).toBeInstanceOf("en");
  });
});
