import './style.css'
import pubsub from "./pubsub";

const btn = document.querySelector('button')

const publisher = {
    publishEvent(){
        const data = {msg: "TOP SECRET DATA"}
        pubsub.publish('anEvent', data.msg)
    }
}

const subscriber1 = pubsub.subscribe("anEvent", data => {
    console.log(`"anEvent", was published with this data: ${data}`)
})

const subscriber2 = pubsub.subscribe("anEvent", data => {
    console.log(`"anEvent", I am second subscriber2`)
})

btn.addEventListener('click', () => {
    publisher.publishEvent();
    subscriber1.unsubscribe()
    subscriber2.unsubscribe()
})