// Task 1 Customer class
class Customer {
    const(name, email) {
      this.name = name;
      this.email = email;
      this.purchaseHistory = [];
    }
  
    addPurchase(amount) {
      this.purchaseHistory.push(amount);
    }
  
    getTotalSpent() {
      return this.purchaseHistory.reduce((total, amount) => total + amount, 0);
    }
  }

  // Task 2 Sales Class
  class SalesRep {
    const(name) {
        this.name = name;
        this.clients = [];
      }
    
      // Adding customers to the clients portal list
      addClient(customer) { 
        this.clients.push(customer);
      }
    
      // Finding clients by name and or total spent
      getClientTotal(name) {
        const client = this.clients.find(client => client.name === name);
        return client ? client.getTotalSpent() : 0;
      }
    }