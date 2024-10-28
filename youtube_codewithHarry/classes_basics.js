
class RailwayTicketSystem {
    submit () {
        console.log(this.name + " :Form Submitted for Train number : !!" + this.trainNo)
    }
    cancel() {
        console.log(this.name + ": Form Cancelled: !!" + this.trainNo)
    }
    fill (name,trainNo){
        this.name = name // this keyword sets the value to individual instances of the class e.g bisshwajit instance name, train No.
        this.trainNo = trainNo // this keyword sets the value to individual instances of the class e.g payelh instance  name, train No.
    }
}

let bisshwajit = new RailwayTicketSystem()
bisshwajit.fill("Bisshwajit",12345)
let payelh = new RailwayTicketSystem()
payelh.fill("Payelh",4209211)

bisshwajit.submit()
payelh.submit()
payelh.cancel()