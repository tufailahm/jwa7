import { BroadcastMessage } from "./broadcastMessage"

describe('this is to test broadcast message ', () => {

    var broadcastMessage :BroadcastMessage;

    beforeAll(() => {
        console.log("Before all called - BROADCAST MESSAGE ")

    });

    beforeEach(() => {
        broadcastMessage = new BroadcastMessage();
        console.log("Before EACH Test called - BROADCAST MESSAGE ")
    })

    it('should be able to display correct message in case of fire - 1', () => {
        console.log("testing broadcast message 1")

        expect(broadcastMessage.getMessage()).toEqual("!!! Fire in the building, please evacuate ASAP !!!")
    })

    it('should be able to display correct message in case of fire - 2', () => {
        console.log("testing broadcast message 2")
        expect(broadcastMessage.getMessage()).toEqual("!!! Fire in the building, please evacuate ASAP !!!")
    })
})