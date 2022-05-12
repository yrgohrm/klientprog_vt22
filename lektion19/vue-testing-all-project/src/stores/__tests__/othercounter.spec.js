import { describe, beforeEach, it, expect } from "vitest"
import { setActivePinia, createPinia } from "pinia"
import { useCounter2Store } from "../othercounter"

describe("Counter Store", () => {
    beforeEach(() => {
        // creates a fresh pinia and make it active so it's automatically picked
        // up by any useStore() call
        setActivePinia(createPinia())
    })

    it("increments by one", () => {
        const counterStore = useCounter2Store()
        expect(counterStore.counter).toBe(0)
        counterStore.increment()
        expect(counterStore.counter).toBe(1)
    })
})
