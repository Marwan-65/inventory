import InventoryItem from './InventoryItem.js'

class ElectricalPart extends InventoryItem {
    constructor(id, name, quantity, voltage, power, current) {
      super(id, name, quantity);
      this.voltage = voltage;
      this.power = power;
      this.current=current;
    }
    GetDescription() {
        return { "ID":this.id, "Name": this.name, "Quantity": this.quantity, "Voltage": this.voltage, "Power": this.power, "Current": this.current };
     }

  }

  export default ElectricalPart