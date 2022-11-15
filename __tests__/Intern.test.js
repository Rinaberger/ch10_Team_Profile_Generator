const Intern = require('../lib/Intern');

describe('Intern', () => {
    test('create an intern', () => {
        const intern = new Intern ('Donald', 3, 'donald@email.com', 'school');

        expect(intern.name).toEqual('Donald');
        expect(intern.id).toEqual(3);
        expect(intern.email).toEqual('donald@email.com');
        expect(intern.school).toEqual('school');
    })
});