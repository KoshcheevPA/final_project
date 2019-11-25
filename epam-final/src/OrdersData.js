/*export default class OrdersData {
    id = 199;

    data = [];

    addOrder(newOrder) {
        this.data = [...this.data, newOrder]
    }

    deleteOrder(orderId) {
        const item = this.data.findIndex(({id}) => id === orderId);
        console.log(item);
        console.log(this.data.slice(0, item));
        this.data = [...this.data.slice(0, item), ...this.data.slice(item, this.data.length - 1)];
    }

    getOrders() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.data)
            }, 700)
        });
    }
}*/