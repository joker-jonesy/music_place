## Rounding Out

### Getting Started
1. `npm install`.
2. `createdb hogwarts`
3. `npm run seed` to seed your database.
4. `npm start` to run your application on PORT 8080!

### What we are covering
#### Express
- 404 Not Found Page [x]
- Custom Error Handling [x]
#### Sequelize
- Eager Loading [x]
- Class and instance methods [x]
- many to many relationships [x]

// many students to one house
1 to many relationship
House.hasMany(Student)
Student.belongsTo(House) <-- establish the foreign key on the Students table.

// one to one
House.hasOne(Student)
Student.belongsTo(House)

// many to many
