import { useEventsStore } from '../store/events.js'

export default {
    methods: {
        ...Pinia.mapActions(useEventsStore, ['updateEvents'])
    },
    computed: {
        ...Pinia.mapStores(useEventsStore),
        severities() {
            let severityCount = {}
            for (let {severity} of this.eventsStore.events) {
                if (severityCount[severity] === undefined) {
                    severityCount[severity] = 1
                }
                else {
                    severityCount[severity]++
                }
            }

            let severityList = []
            for (let severity in severityCount) {
                severityList.push({severity: severity,
                                    count: severityCount[severity]})
            }

            return severityList
        }
    },
    template: `<div>
                 <!-- Att ha actions i vår store gör det lätt att uppdatera vårt state 
                      på samma vis från flera olika ställen utan att duplicera massa kod -->
                 <input type="button" value="Uppdatera" @click="this.eventsStore.updateEvents">
                 <ul>
                    <li v-for="severity of severities">
                        {{severity.count}} händelser av nivå {{severity.severity}}
                    </li>
                 </ul>
               </div>`
}