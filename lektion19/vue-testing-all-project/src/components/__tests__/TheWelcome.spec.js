import { describe, it, expect, vi } from "vitest"
import { shallowMount } from "@vue/test-utils"
import { createTestingPinia } from "@pinia/testing"
import { useCounterStore } from "@/stores/counter"
import TheWelcome from "../TheWelcome.vue"

describe("TheWelcome", () => {
    it("renders properly", async () => {
        const wrapper = shallowMount(TheWelcome, {
            global: {
                plugins: [createTestingPinia({ createSpy: vi.fn })],
            },
        })

        const counterStore = useCounterStore()
        counterStore.$patch({ counter: 111 })
        expect(counterStore.counter).toBe(111)

        await wrapper.find('input[type="button"').trigger("click")

        expect(counterStore.increment).toHaveBeenCalledOnce()
        expect(wrapper.text()).to.contain("111")
    })
})
