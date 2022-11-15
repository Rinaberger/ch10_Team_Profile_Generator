const Manager = require('../lib/Manager');

describe('Manager', () => {
    test('create a manager', () => {
        const manager = new Manager('Becky', 5, 'becky@email.com', '123-456-7890');

        expect(manager.name).toEqual('Becky');
        expect(manager.id).toEqual(5);
        expect(manager.email).toEqual('becky@email.com');
        expect(manager.officeNumber).toEqual('123-456-7890');
    })
});