
import { i18n } from "@/lang";
import { IHeader } from "@/stores/app/app.types";
export const generateTableHeaders = (headers: IHeader[]) => {
  return headers.map(({ title, key, ...props }: IHeader) => ({
    title: title ? i18n.global.t(`table.${title}`) : "",
    key,
    ...props,
  }));
};
