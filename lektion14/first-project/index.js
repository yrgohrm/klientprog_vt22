import lodash from 'lodash'
import { sayGoodbye, sayHello } from './funny.js'

for (let i = 0; i < 10000; i += 343) {
    console.log(lodash.padStart(String(i), 5))
}

sayHello()
sayGoodbye()