import { defineStore } from "pinia"

export const useCounter2Store = defineStore('counter2', {
    state: () => ({
        counter: 0,
    }),
    actions: {
        increment() {
            this.counter++
        },
    },
})
