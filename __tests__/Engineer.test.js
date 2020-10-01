const { exportAllDeclaration } = require('@babel/types')
const Engineer = require('../lib/Engineer')
const Employee = require('../lib/Employee')

test('creates Engineer object', () => {
    const engineer = new Engineer('John', '1234', 'Manager', 'manager@test.com', 'github')

    expect(engineer.name).toBe('John');
    expect(engineer.id).toBe('1234');
    expect(engineer.role).toBe('Manager')
    expect(engineer.email).toEqual(expect.stringContaining('@'));
    
})

test('creates an engineers github username', () => {
    const engineer = new Engineer('John', '1234', 'Manager', 'manager@test.com', 'github');

    expect(engineer.github).toEqual(expect.any(String));
})