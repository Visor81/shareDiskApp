export const supportFileTypes: {
  [key: string]: {
    fileType?: string;
    documentType?: string;
    mimeType: string;
    iconType: string;
  };
} = {
  pdf: {
    fileType: "pdf",
    documentType: "word",
    mimeType: "application/pdf",
    iconType: "pdf",
  },
  word: {
    fileType: "docx",
    documentType: "word",
    mimeType:
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    iconType: "doc",
  },
  word_old: {
    fileType: "doc",
    documentType: "word",
    mimeType: "application/msword",
    iconType: "doc",
  },
  rtf: {
    fileType: "rtf",
    documentType: "word",
    mimeType: "application/rtf",
    iconType: "doc",
  },
  odt: {
    fileType: "odt",
    documentType: "word",
    mimeType: "application/vnd.oasis.opendocument.text",
    iconType: "doc",
  },
  excel: {
    fileType: "xlsx",
    documentType: "cell",
    mimeType:
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    iconType: "excel",
  },
  ods: {
    fileType: "ods",
    documentType: "cell",
    mimeType: "application/vnd.oasis.opendocument.spreadsheet",
    iconType: "excel",
  },
  excel_old: {
    fileType: "xls",
    documentType: "cell",
    mimeType: "application/vnd.ms-excel",
    iconType: "excel",
  },
  csv: {
    fileType: "csv",
    documentType: "cell",
    mimeType: "text/csv",
    iconType: "excel",
  },
  powerPoint: {
    fileType: "pptx",
    documentType: "slide",
    mimeType:
      "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    iconType: "ppt",
  },
  powerPoint_old: {
    fileType: "ppt",
    documentType: "slide",
    mimeType: "application/vnd.ms-powerpoint",
    iconType: "ppt",
  },
  odp: {
    fileType: "odp",
    documentType: "slide",
    mimeType: "application/vnd.oasis.opendocument.presentation",
    iconType: "ppt",
  },
  draw: {
    fileType: "draw",
    mimeType: "application/x-draw",
    iconType: "draw",
  },
  text: {
    fileType: "txt",
    documentType: "text",
    mimeType: "text/plain",
    iconType: "doc",
  },
  imgGif: {
    mimeType: "image/gif",
    fileType: "png",
    iconType: "image",
  },
  imgPng: {
    mimeType: "image/png",
    fileType: "png",
    iconType: "image",
  },
  imgJpeg: {
    mimeType: "image/jpeg",
    fileType: "jpeg",
    iconType: "image",
  },
  imgJpg: {
    mimeType: "image/jpg",
    fileType: "jpg",
    iconType: "image",
  },
  imgSvg: {
    mimeType: "image/svg",
    iconType: "image",
  },
  imgSvg2: {
    mimeType: "image/svg+xml",
    iconType: "image",
  },
  webp: {
    mimeType: "image/webp",
    iconType: "image",
  },
  gif: {
    mimeType: "image/gif",
    iconType: "image",
  },
  videoMp4: {
    mimeType: "video/mp4",
    fileType: "mp4",
    iconType: "video",
  },
  webm: {
    mimeType: "video/webm",
    fileType: "webm",
    iconType: "video",
  },
  audio: {
    mimeType: "audio/mpeg",
    fileType: "audio",
    iconType: "audio",
  },
  zip: {
    mimeType: "application/zip",
    iconType: "zip",
  },
  archiveZip: {
    mimeType: "application/x-zip-compressed",
    iconType: "zip",
  },
  archiveRar: {
    mimeType: "application/x-rar-compressed",
    iconType: "zip",
  },
  archive7z: {
    mimeType: "application/x-compressed",
    iconType: "zip",
  },
};
