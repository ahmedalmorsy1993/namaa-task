<template>
  <div>
    <Table>
      <template #item="{ index }">
        <tr>
          <td>
            <TextField :label="$t('label.name')" :name="`actors.${index}.name`" />
          </td>
          <td>
            <TextField :label="$t('label.age')" type="number" :name="`actors.${index}.age`" />
          </td>
          <td>
            <DatePicker :label="$t('label.join_date')" :name="`actors.${index}.join_date`" />
          </td>
          <td>
            <SelectField :label="$t('label.role')" type="number" :name="`actors.${index}.role`" :items="roleItems"
              item-title="name" item-value="value" />
          </td>
          <td>
            <div class="d-flex align-center ga-2">
              <v-btn @click="onAddActor" size="small" icon="mdi-plus" color="primary"></v-btn>
              <v-btn @click="onRemove(index)" v-if="index > 0" size="small" icon="mdi-delete" color="error"></v-btn>
            </div>
          </td>
        </tr>
      </template>

    </Table>
  </div>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/stores/app';
import { useFieldArray } from 'vee-validate';
const { fields, push, remove } = useFieldArray('actors')
const store = useAppStore()
store.setItems(fields.value)
store.setHeaders([
  { title: 'name' },
  { title: 'age' },
  { title: 'join_date' },
  { title: 'role' },
  { title: 'actions' },
])


const roleItems: { name: string; value: string }[] = [
  { name: 'Background role', value: 'background_role' },
  { name: 'Cameo', value: 'cameo' },
  { name: 'Recurring character', value: 'recurring_character' },
  { name: 'Recurring character', value: 'recurring_character' },
  {
    name: 'Side character', value: 'side_character'
  },
  {
    name: 'Series regular', value: 'series_regular'
  },
]

const onAddActor = () => {
  push({
    name: '',
    age: '',
    join_date: '',
    role: ''
  })
}
const onRemove = (index: number) => {
  remove(index)
}

</script>
