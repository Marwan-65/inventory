 class InventoryItem {
    constructor(id,name,quantity) {
      if(this.constructor == InventoryItem) {
         throw new Error("Class is of abstract type and can't be instantiated");
      };

      if(this.GetDescription == undefined) {
          throw new Error("GetDescription method must be implemented");
      };
      this.name = name;
      this.id=id;
      this.quantity=quantity;

  }
}

export default InventoryItem;