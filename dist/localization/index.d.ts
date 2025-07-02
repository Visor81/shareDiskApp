export type DynamicLocale = {
    [key: string]: string | number | boolean | DynamicLocale | DynamicLocale[];
};
export declare const localize: (locale: "en" | "ru" | undefined, section: string) => string;
