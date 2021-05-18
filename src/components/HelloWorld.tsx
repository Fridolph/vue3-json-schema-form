import { defineComponent } from '@vue/runtime-core'

const PropsType = {
  msg: String,
  age: {
    type: Number,
    required: true,
  },
} as const

export default defineComponent({
  props: PropsType,
  setup(props) {
    return () => (
      <p>
        {props.msg}, age: {props.age}
      </p>
    )
  },
})
