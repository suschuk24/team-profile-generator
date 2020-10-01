const Intern = require('../lib/Intern')
const Employee = require('../lib/Employee')

test('creates intern object', () => {
    const intern = new Intern('John', '1234', 'Intern', 'manager@test.com', 'School');

    expect(intern.name).toBe('John');
    expect(intern.id).toBe('1234');
    expect(intern.role).toBe('Intern');
    expect(intern.email).toEqual(expect.stringContaining('@'))
})

test('creates a school option for inern', () => {
    const intern = new Intern('John', '1234', 'Intern', 'manager@test.com', 'School')

    expect(intern.school).toBe('School')
})