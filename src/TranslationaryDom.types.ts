import type { TranslationContructorProps } from "translationary";

export type TranslationMapItem = {
  /**
   *
   */
  element: HTMLElement;

  /**
   *
   */
  translationProps: TranslationContructorProps;
};

export type TranslationsMap = {
  [key: string]: TranslationMapItem[];
};
