import { toTypedSchema } from '@vee-validate/yup'
import { useForm } from 'vee-validate'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'
import { array, object, string } from 'yup'
export const useFormAction = () => {
  const { t } = useI18n()
  const route = useRoute()
  const { id } = route.params
  const title = id ? t('heading.edit_movie') : t('heading.create_movie')
  const { } = useForm({

    validationSchema: toTypedSchema(object({
      title: string().required(),
      year: string().required(),
      description: string().optional().nullable(),
      actors: array().of(object({
        name: string().required(),
        age: string().required(),
        join_date: string().required(),
        role: string().required(),
      })).required().min(1)
    })),
    initialValues: {
      year: "",
      title: "",
      description: "",
      actors: [{
        name: '',
        age: '',
        join_date: '',
        role: ''
      }]
    }


  },

  )

  return { title }

}
