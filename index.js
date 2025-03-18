const complexObject = {
    name: 'Test Object',
    age: 42,
    isActive: true,
    scores: [95, 88, 76, 100],
    address: {
        street: '123 Main St',
        city: 'Anytown',
        zip: '12345',
        geo: {
            lat: 40.7128,
            lng: -74.0060
        }
    },
    tags: ['test', 'example', 'sample'],
    metadata: {
        version: 1.0,
        contributors: [
            { name: 'Alice', role: 'Author' },
            { name: 'Bob', role: 'Reviewer' }
        ]
    },
    settings: {
        theme: 'dark',
        notifications: {
            email: true,
            sms: false
        },
        preferences: {
            language: 'en',
            timezone: 'UTC'
        }
    },
    preferences: {
        colorScheme: 'light',
        fontSize: 14,
        layout: {
            header: 'fixed',
            footer: 'static'
        }
    },
    history: [
        { event: 'created', timestamp: '2023-10-01T10:00:00Z' },
        { event: 'updated', timestamp: '2023-10-02T12:00:00Z' }
    ]
};

const getCopyObj = (obj) => {

    if (obj === null || typeof(obj) !== 'object') {
        return obj;
    }
    if (Array.isArray(obj)) {
        const arr = [];

        for (let i = 0; i < obj.length; i++) {
            arr.push(getCopyObj(obj[i]));
        } return arr;
    }

    const newObj = {};
    for (let key in obj) {
        newObj[key] = getCopyObj(obj[key]);
    }
    return newObj
}
console.log(getCopyObj(complexObject));