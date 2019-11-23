export default class OrdersData {
    data = [
        {
            id: 'or1',
            service: 'Hair',
            time: '12:00'
        },
        {
            id: 'or2',
            service: 'Meditation',
            time: '14:00'
        }
    ];

    getOrders() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.data)
            }, 700)
        });
    }
}