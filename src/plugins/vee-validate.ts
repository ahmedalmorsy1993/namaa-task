import { setLocale } from "yup";
import { i18n } from "@/lang";
import { configure } from "vee-validate";

setLocale({
  mixed: {
    required: i18n.global.t("validation.required"),
  },
  string: {
    min: ({ min }) => i18n.global.t("validation.min", { min }),
  },
  number: {},
});
configure({
  validateOnBlur: true,
  validateOnChange: true,
  validateOnInput: false,
  validateOnModelUpdate: true,

});
