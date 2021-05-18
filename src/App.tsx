import { defineComponent, reactive, ref } from '@vue/runtime-core'
import HelloWorld from '@/components/HelloWorld'
const img = require('./assets/logo.png') // eslint-disable-line

function renderHW(msg: string) {
  return <HelloWorld age={12} msg={msg} />
}

export default defineComponent({
  setup() {
    const state = reactive({
      name: 'fridolph',
    })
    const numberRef = ref(1)

    setInterval(() => {
      state.name += '-'
      numberRef.value += 1
    }, 1000)

    return () => {
      const number = numberRef.value

      return (
        <div id="app">
          <img src={img} alt="vue logo" />
          <p>{state.name + number}</p>
          {renderHW('hello world')}
        </div>
      )
    }
  },
})
