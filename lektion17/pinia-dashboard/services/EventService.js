// Det här är en låtsas-service. Egentligen hade vi haft ett 
// riktigt api att fråga med fetch()

// Den här metoden exporteras inte och kan bara användas i den här filen
function randomSeverity() {
    let rand = Math.floor(Math.random()*8)
    if (rand < 4) {
        return 0
    }
    else if (rand < 6) {
        return 1
    }
    else if (rand < 7) {
        return 2
    }
    else {
        return 3
    }
}

export default {
    async getEvents() {
        return [
            { message: 'Program started', severity: randomSeverity()},
            { message: 'Program started', severity: randomSeverity()},
            { message: 'Restart', severity: randomSeverity()},
            { message: 'Shutdown', severity: randomSeverity()},
            { message: 'Restart', severity: randomSeverity()}
        ]
    }
}
