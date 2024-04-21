import { useField } from "vee-validate";

export const useFieldGroup = (name: string) => {
  const fields = useField(() => name, undefined, {
    keepValueOnUnmount: true,
  });

  // Function to validate the field on blur
  const validateField = () => {
    fields.validate();
  };

  return {
    ...fields,
    validateField,
  };
};
