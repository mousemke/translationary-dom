import T, { TranslationContructorProps, Translator } from "translationary";
import type { TranslationsMap } from "./TranslationaryDom.types";

const TranslationaryDom = function TranslationaryDom(
  props: TranslationContructorProps
): any {
  /**
   *
   * @param element
   * @param key
   * @param translationProps
   */
  this.autoT = (
    element: HTMLElement,
    key: string,
    translationProps: TranslationContructorProps
  ): void => {
    this.translationsMap[key] = this.translationsMap[key] || [];

    this.translationsMap[key].push({
      element,
      translationProps
    });

    this.replaceElementText(element, this.t(key, translationProps));
  };

  /**
   *
   * @param lang
   */
  this.onLanguageChange = (lang: string): void => {
    this.updateLanguage();
    this.props.onLanguageChange?.(lang);
  };

  /**
   *
   * @param container
   * @param text
   */
  this.replaceElementText = (container: HTMLElement, text: string): void => {
    while (container.lastChild) {
      container.removeChild(container.lastChild);
    }

    const textNode = document.createTextNode(text);

    container.appendChild(textNode);
  };

  /**
   *
   */
  this.updateLanguage = (): void => {
    Object.keys(this.translationsMap).forEach((key) => {
      this.translationsMap[key].forEach(({ element, translationProps }) =>
        this.replaceElementText(element, this.t(key, translationProps))
      );
    });
  };

  this.props = props;
  this.translationsMap = {} as TranslationsMap;

  this.t = new T({
    ...props,
    onLanguageChange: this.onLanguageChange
  }) as Translator;

  const { autoT } = this;

  autoT.setLanguage = this.t.setLanguage;

  return autoT;
};

export default TranslationaryDom;
