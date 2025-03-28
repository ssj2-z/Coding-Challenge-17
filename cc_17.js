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
    
console.log(`Sales rep's clients:`, salesRep.clients.map(client => client.name));
console.log(`Total spent by John Wright: $${salesRep.getClientTotal('John Wright')}`);

    // Task 3 Adding 'VIP' customers
    class VIPCustomer extends Customer {
        constructor(name, email, vipLevel) {
          super(name, email);
          this.vipLevel = vipLevel;
        }
      
        // Adding rewards point to customers
        getTotalSpent() {
          const total = super.getTotalSpent();
          return total + (total * 0.1); // Add loyalty bonus
        }
      }

      const vipCustomer = new VIPCustomer('Tim Watson', 'TimW@aol.com', 'Gold');
vipCustomer.addPurchase(500);
vipCustomer.addPurchase(300);

console.log(`VIP Customer's total spent with bonus: $${vipCustomer.getTotalSpent()}`);

// Task 4: Reporting platform
// Calculating revenue
const totalRevenue = salesRep.clients.reduce((total, client) => total + client.getTotalSpent(), 0);

const highSpendingCustomers = salesRep.clients.filter(client => client.getTotalSpent() > 500);

const customerSummary = salesRep.clients.map(client => ({
  name: client.name,
  totalSpent: client.getTotalSpent()
}));

// Log results
console.log('Total revenue: $', totalRevenue);
console.log('High-spending customers: ', highSpendingCustomers.map(client => client.name));
console.log('Customer summary: ', customerSummary);