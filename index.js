const purchases = [
    { date: 'Feb', category: 'Food', amount: 50 },
    { date: 'Feb', category: 'Clothing', amount: 100 },
    { date: 'Feb', category: 'Entertainment', amount: 75 },
    { date: 'Mar', category: 'Food', amount: 25 },
    { date: 'Mar', category: 'Clothing', amount: 200 },
    { date: 'Mar', category: 'Entertainment', amount: 50 },
    { date: 'Mar', category: 'Food', amount: 100 },
    { date: 'Mar', category: 'Clothing', amount: 150 },
    { date: 'Apr', category: 'Entertainment', amount: 100 },
    { date: 'Apr', category: 'Food', amount: 100 },
    { date: 'Apr', category: 'Clothing', amount: 100 },
    { date: 'Apr', category: 'Clothing', amount: 100 },
    { date: 'Jun', category: 'Food', amount: 100 },
    { date: 'Jun', category: 'Entertainment', amount: 100 },
    { date: 'Jun', category: 'Food', amount: 100 },
    { date: 'Jun', category: 'Entertainment', amount: 100 },
    { date: 'Jul', category: 'Clothing', amount: 100 },
    { date: 'Jul', category: 'Entertainment', amount: 100 },
    { date: 'Jul', category: 'Food', amount: 100 },
    { date: 'Jul', category: 'Clothing', amount: 100 },
];


const makePurchaseStat = (purchases) => {
    return purchases.reduce((acc, item) => {
        acc.total += item.amount;

        if (!acc.categories[item.category]) {
            acc.categories[item.category] = item.amount;
        } else {
            acc.categories[item.category] += item.amount;
        }

        if (!acc.months[item.date]) {
            acc.months[item.date] = item.amount;
        } else {
            acc.months[item.date] += item.amount;
        }
        return acc;
    }, {total: 0, categories: {}, months: {}});
};

const ExampleResult = makePurchaseStat(purchases);
console.log(ExampleResult);