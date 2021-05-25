<template>
  <input type="number" :value="value" @input="handleChange" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { FieldPropsDefine } from '../types'

export default defineComponent({
  name: 'NumberField',
  props: FieldPropsDefine,
  setup(props) {
    const handleChange = (e: any) => {
      // console.log('handleChange: ', e)
      const value = e.target.value
      const num = Number(value)

      if (Number.isNaN(num) && num) {
        props.onChange(undefined)
      } else {
        props.onChange(num)
      }
    }

    return {
      handleChange,
    }
  },
})
</script>
