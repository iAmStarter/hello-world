import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana']

    const people = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        }, {
            id: 2,
            name: 'Clark',
            age: 27,
            skill: 'Angular'
        }, {
            id: 3,
            name: 'Diana',
            age: 25,
            skill: 'Flutter'
        }
    ]

    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)

    const personList = people.map(person => <Person key={person.id} person={person} />)

    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList