import { useEventsStore } from './store/events.js'
import HighestSeverity from './components/HighestSeverity.js'
import EventList from './components/EventList.js'
import SeverityCount from './components/SeverityCount.js'

const app = {
    computed: {
        ...Pinia.mapStores(useEventsStore)
    },
    components: {
        HighestSeverity,
        EventList,
        SeverityCount
    },
    created() {
        this.eventsStore.updateEvents()
    }
}

Vue.createApp(app).use(Pinia.createPinia()).mount("#app")
