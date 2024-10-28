
class RailwayTicketSystem {
    constructor(name,trainNo) {
        this.name = name
        this.trainNo = trainNo
    }
    submit () {
        console.log(this.name + " :Form Submitted for Train number : !!" + this.trainNo)
    }
    cancel() {
        console.log(this.name + ": Form Cancelled: !!" + this.trainNo)
    }
}

let bisshwajit = new RailwayTicketSystem("Bisshwajit",12345)
let payelh = new RailwayTicketSystem("Payelh",4209211)

bisshwajit.submit()
payelh.submit()
payelh.cancel()