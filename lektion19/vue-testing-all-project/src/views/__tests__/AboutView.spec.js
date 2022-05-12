import { nextTick } from "vue"
import { describe, it, expect, vi } from "vitest"
import { shallowMount } from "@vue/test-utils"
import { createTestingPinia } from "@pinia/testing"
import { useCounterStore } from "@/stores/counter"
import AboutView from "../AboutView.vue"

describe("AboutView", () => {
    it("renders properly", async () => {
        const wrapper = shallowMount(AboutView, {
            global: {
                plugins: [createTestingPinia({ createSpy: vi.fn })],
            },
        })

        const counterStore = useCounterStore()
        counterStore.$patch({ counter: 111 })
        expect(counterStore.counter).toBe(111)

        await nextTick()

        expect(wrapper.text()).toContain("about")
        expect(wrapper.text()).toContain("Counter is 1")
    })
})
