const subscribers = {}

export default {
    subscribe(event, cb) {
        if (!subscribers[event]) { // if event doesn't exist create it
            subscribers[event] = new Set()
        }
        subscribers[event].add(cb)
        return {
            unsubscribe() {
                subscribers[event].delete(cb)
            }
        }
    },

    publish(event, data) {
        if (!subscribers[event]) return; // if such event doesn't exist just return
        subscribers[event].forEach(cb => cb(data))
    }
}
