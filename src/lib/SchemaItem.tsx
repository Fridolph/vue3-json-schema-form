import { defineComponent } from 'vue'
import NumberField from './fields/NumberField.vue'
import StringField from './fields/StringField.vue'
import { SchemaTypes, FieldPropsDefine } from './types'

export default defineComponent({
  // 根据不同类型对应渲染不同的组件
  name: 'SchemaItems',
  props: FieldPropsDefine,
  setup(props) {
    return () => {
      const { schema } = props
      // TODO：如果type没有指定，我们需要猜测这个type
      const type = schema.type

      let Component: any

      switch (type) {
        case SchemaTypes.STRING: {
          Component = StringField
          break
        }
        case SchemaTypes.NUMBER: {
          Component = NumberField
          break
        }
        default: {
          console.warn(`${type} is not supported !`)
        }
      }
      return <Component {...props} />
    }
  },
})
