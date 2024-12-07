import { FunctionComponent } from "react";

import { supportFileTypes } from "@/constants";

import IconPdf from "@/icons/pdf.svg?react";
import IconDoc from "@/icons/doc.svg?react";
import IconTable from "@/icons/table.svg?react";
import IconPresentation from "@/icons/presentation.svg?react";
import IconGraphic from "@/icons/graphic.svg?react";
import IconImage from "@/icons/image.svg?react";
import IconMedia from "@/icons/media.svg?react";
import IconMusic from "@/icons/music.svg?react";
import IconArchive from "@/icons/archive.svg?react";
import IconUniversal from "@/icons/universal.svg?react";
import IconFolder from "@/icons/folder.svg?react";

const typeIcons: Record<
  string,
  FunctionComponent<React.SVGProps<SVGSVGElement>>
> = {
  pdf: IconPdf,
  doc: IconDoc,
  excel: IconTable,
  ppt: IconPresentation,
  draw: IconGraphic,
  image: IconImage,
  video: IconMedia,
  audio: IconMusic,
  zip: IconArchive,
};

export interface FileIconProps {
  mimeType?: string;
}

export const FileIcon = ({ mimeType }: FileIconProps) => {
  const iconType =
    Object.values(supportFileTypes).find((item) => item.mimeType === mimeType)
      ?.iconType ?? "";

  if (!mimeType) return <IconFolder width={20} />;

  const Component = typeIcons[iconType];

  return Component ? <Component width={20} /> : <IconUniversal width={20} />;
};
