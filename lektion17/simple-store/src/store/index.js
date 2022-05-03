import { reactive } from 'vue'

export const store = reactive({
  count: 0,
  increment(amount) {
    if (amount > 5) {
      console.warn("increase with too much")
      return
    }

    this.count += amount
  },
})
