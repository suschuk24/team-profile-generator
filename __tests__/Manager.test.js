const Manager = require('../lib/Manager')
const Employee = require('../lib/Employee')

test('creates manager object', () => {
    const manager = new Manager('John', '1234', 'Manager', 'manager@test.com', '1029');

    expect(manager.name).toBe('John');
    expect(manager.id).toBe('1234');
    expect(manager.role).toBe('Manager');
    expect(manager.email).toEqual(expect.stringContaining('@'))
})

test('creates office number', () => {
    const manager = new Manager('John', '1234', 'Manager', 'manager@test.com', '1029');

    expect(manager.officeNum).toBe('1029')
})