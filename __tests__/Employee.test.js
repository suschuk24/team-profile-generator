const { exportAllDeclaration } = require('@babel/types')
const { TestResult } = require('@jest/types')
const Employee = require('../lib/Employee')

test('creates an employee object', () => {
    const employee = new Employee('John', '1234', 'Manager', 'manager@test.com')

    expect(employee.name).toBe('John');
    expect(employee.id).toBe('1234');
    expect(employee.role).toBe('Manager')
    expect(employee.email).toEqual(expect.stringContaining('@'));
} )