import EventService from '../services/EventService.js'

export const useEventsStore = Pinia.defineStore('events', {
    state: () => ({
        events: []
    }),
    actions: {
        updateEvents() {
            EventService.getEvents()
                .then(events => {
                    events.forEach(e => this.events.push(e))
                })
        }
    }
})
