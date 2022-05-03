import { useEventsStore } from '../store/events.js'

export default {
    computed: {
        ...Pinia.mapStores(useEventsStore),
        ...Pinia.mapState(useEventsStore, ['events']),
    },
    template: `<div>
                 <!-- Att ha actions i vår store gör det lätt att uppdatera vårt state 
                      på samma vis från flera olika ställen utan att duplicera massa kod -->
                 <input type="button" value="Uppdatera" @click="this.eventsStore.updateEvents">
                 <ul>
                    <li v-for="event of events">
                        {{event.message}} med allvarlighet {{event.severity}}
                    </li>
                 </ul>
               </div>`
}