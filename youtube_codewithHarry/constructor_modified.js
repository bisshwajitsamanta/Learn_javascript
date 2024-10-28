
class RailwayBookForm {
    constructor(name, age, sex, trainNo, address,toStation, fromStation) {
        this.name = name
        this.sex = sex
        this.trainNo = trainNo
        this.address = address
        this.toStation = toStation
        this.fromStation = fromStation
    }
    preview(){
        console.log("[Preview]: " + this.name + " [ " +this.sex + " ]" + ": with your address " + this.address + " Your train no " + this.trainNo + " is booked between " + this.toStation + " to " + this.fromStation )
    }
    submit(){
        console.log("[Submit]: " + this.name + " [ " +this.sex + " ]" + ": with your address " + this.address + " Your train no " + this.trainNo + " is booked between " + this.toStation + " to " + this.fromStation )
    }
    cancel(){
        console.log("[Cancelled]: " + this.name + " [ " +this.sex + " ]" + ": with your address " + this.address + " Your train no " + this.trainNo + " is booked between " + this.toStation + " to " + this.fromStation )
        this.trainNo = "N/A"
    }
}
let bisshwajit = new RailwayBookForm("bisshwajit","35","Male","12356","36 G Jogupalya","sbc","DGR")
bisshwajit.preview()
bisshwajit.submit()
bisshwajit.cancel()
let payelh = new RailwayBookForm("payelh","29","Female","12356","36 G Jogupalya","sbc","DGR")
payelh.preview()
payelh.submit()
payelh.cancel()
