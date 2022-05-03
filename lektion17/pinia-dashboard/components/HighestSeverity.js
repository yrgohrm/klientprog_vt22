import { useEventsStore } from '../store/events.js'

export default {
    computed: {
        ...Pinia.mapStores(useEventsStore),
        highestSeverity() {
            let highestSeverity = 0
            for (let event of this.eventsStore.events) {
                if (event.severity > highestSeverity) {
                    highestSeverity = event.severity
                }
            }
            
            return highestSeverity
        }
    },
    template: `<div>
                <img src="/images/Achtung.svg" width="20" v-if="highestSeverity >= 3">
                <img src="/images/Achtung-orange.svg" width="20" v-else-if="highestSeverity >= 2">
                <img src="/images/Achtung-yellow.svg" width="20" v-else-if="highestSeverity >= 1">
                Högsta allvarlighet: {{highestSeverity}}
               </div>`
}