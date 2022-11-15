// require Employee.js for testing purposes
const Employee = require('../lib/Employee');

// General info for all team members
describe('Employee', () => {
    test('create employee', () => {
        const employee = new Employee (
            'Scott', '1', 'test@email.com'
        )
        expect(employee.name).toEqual('Scott');
        expect(employee.id).toEqual('1');
        expect(employee.email).toEqual('test@email.com');
    })
})
