class Mobile {
    status
    battery
    constructor(status, battery) {
        this.status = status;
        this.battery =  battery;
    }
    setPin(battery){
        this.battery = battery
    }
    getPin(){
        return this.battery
    }
    setStatus(){
        this.status = !this.status
    }
    getStatus(){
        return this.status
    }
}