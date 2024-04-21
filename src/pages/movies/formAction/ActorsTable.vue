<template>
  <div>
    <Table>
      <template #item="{ item }">
        <tr>
          <td>
            <TextField />
          </td>
        </tr>
      </template>

    </Table>
  </div>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/stores/app';
import { useFieldArray } from 'vee-validate';
const { fields } = useFieldArray('actors')
const store = useAppStore()
store.setHeaders([
  { title: 'name' },
  { title: 'age' },
  { title: 'join_date' },
  { title: 'role' },
  { title: 'actions' },
])

store.setItems(fields.value)
</script>
