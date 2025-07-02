export const formatBytes = (bytes: number, decimals = 2, locale: 'ru' | 'en') => {
  if (!+bytes) return locale === "en" ? "0 B" : "0 Б";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Б", "КБ", "МБ", "ГБ", "ТБ", "ПБ", "ЭБ", "ЗБ", "ЙБ"];
  const sizesEn = ["B", "KB", "MB", "GB", "TB", "PB", "AB", "ZB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${locale === "en" ? sizesEn[i] : sizes[i]}`;
};
