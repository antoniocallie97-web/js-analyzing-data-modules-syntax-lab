require('datejs');

function combineUsers(...args) {
    const combinedObject = {
        users: []
    };

    args.forEach(array => {
        combinedObject.users.push(...array);
    });

    combinedObject.merge_date = new Date().toString('M/d/yyyy');

    return combinedObject;
}

module.exports = { combineUsers };