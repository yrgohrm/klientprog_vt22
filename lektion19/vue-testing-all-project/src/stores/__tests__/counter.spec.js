import { afterAll, afterEach, describe, beforeAll, beforeEach, it, expect } from "vitest"
import { setActivePinia, createPinia } from "pinia"
import { useCounterStore } from "@/stores/counter"
import { setupServer } from "msw/node"
import { rest } from "msw"

// The following code imports node-fetch and sets it up as a global objects

import fetch, { Headers, Request, Response } from "node-fetch"

if (!globalThis.fetch) {
    globalThis.fetch = fetch
    globalThis.Headers = Headers
    globalThis.Request = Request
    globalThis.Response = Response
}

// Here we set up the handlers for REST API:s with MSW

const restHandlers = [
    rest.get("http://www.randomnumberapi.com/api/v1.0/random", (req, res, ctx) => {
        return res(ctx.status(200), ctx.json([1]))
    }),
]

const server = setupServer(...restHandlers)

describe("Counter Store", () => {
    beforeAll(() => {
        server.listen({ onUnhandledRequest: "error" })
    })

    afterAll(() => {
        server.close()
    })

    afterEach(() => {
        server.resetHandlers()
    })

    beforeEach(() => {
        // creates a fresh pinia and make it active so it's automatically picked
        // up by any useStore() call without having to pass it to it:
        // `useStore(pinia)`
        setActivePinia(createPinia())
    })

    it("increments", () => {
        const counter = useCounterStore()
        expect(counter.counter).toBe(0)
        counter.increment()
        expect(counter.counter).toBe(1)
    })

    it("can double count", () => {
        const counter = useCounterStore()
        counter.increment()
        expect(counter.doubleCount).toBe(2)
    })

    it("can increment random", async () => {
        const counter = useCounterStore()
        await counter.incrementRandom()
        expect(counter.counter).toBe(1)
    })
})
