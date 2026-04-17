require('datejs');

function combineUsers(...args) {
    const combinedObject = {
        users: []
    };

    // Merge all arrays
    args.forEach(array => {
        combinedObject.users.push(...array);
    });

    // Add merge date
    combinedObject.merge_date = new Date().toString('M/d/yyyy');

    return combinedObject;
}

// Export for testing (important for labs)
module.exports = combineUsers;


// Example usage (you can remove this if tests fail)
const result = combineUsers(
    ['john', 'mary'],
    ['sam', 'lisa'],
    ['peter']
);

console.log(result);