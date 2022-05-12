import { defineStore } from "pinia"

export const useCounterStore = defineStore('counter', {
    state: () => ({
        counter: 0,
    }),
    getters: {
        doubleCount: (state) => state.counter * 2,
    },
    actions: {
        increment() {
            this.counter++
        },
        async incrementRandom() {
            const resp = await fetch("http://www.randomnumberapi.com/api/v1.0/random?min=1&max=100&count=1")
            if (resp.ok) {
                const randomArray = await resp.json()
                if (randomArray.length === 1) {
                    this.counter += Number(randomArray[0])
                }
            }
        },
    },
})
