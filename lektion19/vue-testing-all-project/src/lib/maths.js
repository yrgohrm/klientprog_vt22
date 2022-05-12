const maximum = (list) => {
    if (list.length > 0) {
        let max = list[0]
        for (const val of list) {
            if (typeof val !== "number") {
                return NaN
            }
            max = val > max ? val : max
        }
        return max
    }
}

const minimum = (list) => {
    if (list.length > 0) {
        let min = list[0]
        for (const val of list) {
            min = val < min ? val : min
        }
        return min
    }
}

export { maximum, minimum }
