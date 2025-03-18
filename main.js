const company = {
    hr: [{name: "Alice", salary: 1000}, {name: "Alex", salary: 1200}],
    development: {
        frontend: [{name: "Max", salary: 1300}, {name: "John", salary: 1100}],
        backend: [{name: "March", salary: 1100}, {name: "Mass", salary: 1200}],
        devops: [{name: "Mongo", salary: 1200}],
    },
    sales: [{name: "Amanda", salary: 1100}, {name: "Mark", salary: 1200}],
}

function salarySum(department) {
    if (Array.isArray(department)) {
        return department.reduce((sum, person) => sum + person.salary, 0);
    }

    return Object
        .values(department)
        .reduce((sum, subDep) => sum + salarySum(subDep), 0);
}

console.log(salarySum(company));