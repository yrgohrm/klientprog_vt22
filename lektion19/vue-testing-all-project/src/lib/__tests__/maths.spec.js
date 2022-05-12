import { describe, it, expect } from "vitest"

import { maximum } from "../maths"

describe("maths", () => {
    it("tests maximum with input", () => {
        const res = maximum([1, 2, 3])
        expect(res).to.be.equal(3)
    })

    it("tests maximum with bad input", () => {
        const res = maximum([])
        expect(res).to.be.undefined
    })

    it("tests maximum with bad character input", () => {
        const res = maximum(["a", "b", "c"])
        expect(res).to.be.NaN
    })
})
