import { describe, it, expect, vi } from "vitest"
import { nextTick } from "vue"
import { shallowMount } from "@vue/test-utils"
import { createTestingPinia } from "@pinia/testing"
import { useCounter2Store } from "@/stores/othercounter"
import Counter from "@/components/Counter.vue"

describe("Actions.vue", () => {
    it('calls store action "increment" when button is clicked', async () => {
        const wrapper = shallowMount(Counter, {
            global: {
                // create Pinia plugin suitable for testing and supply
                // a function that can create function spies
                plugins: [createTestingPinia({ createSpy: vi.fn })],
            },
        })

        // get hold of the counter store
        const counterStore = useCounter2Store()

        await wrapper.find("button").trigger("click")

        // test that the function has been called
        expect(counterStore.increment).toHaveBeenCalled()
    })

    it("updates the display when the store is updated", async () => {
        const wrapper = shallowMount(Counter, {
            global: {
                // create Pinia plugin suitable for testing and supply
                // a function that can create function spies
                plugins: [createTestingPinia({ createSpy: vi.fn })],
            },
        })

        expect(wrapper.text()).toContain("0")

        const counterValue = 987654

        // the value is changed, but it won't trigger a complete render
        const counterStore = useCounter2Store()
        counterStore.counter = counterValue

        // now we have to give the system time to update
        await nextTick()

        expect(wrapper.text()).toContain(String(counterValue))
    })
})
