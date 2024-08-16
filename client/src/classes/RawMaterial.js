import InventoryItem from './InventoryItem.js'

class RawMaterial extends InventoryItem{
    constructor(id, name, quantity,type,purity) {
      super(id, name, quantity);
      this.type = type;
      this.purity = purity;
    }
    GetDescription() {
        return { "ID":this.id, "Name": this.name, "Quantity": this.quantity, "Type": this.type, "Purity": this.purity };
     }

  }


export default RawMaterial