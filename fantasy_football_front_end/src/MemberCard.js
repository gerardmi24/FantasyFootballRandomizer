import React from 'react';
import Members from './Members';

export default function MemberCard({count, members}) {
    let newOrder = members.sort(() => Math.random() - 0.5)

    function display() {
        return newOrder.map((mem) => <Members name={mem.name} titles={mem.titles} />)
        // console.log("Mem", mem))
        // console.log("new order", newOrder)
    }

    return (
        <div>
            {count > 0 ? 
            <ul> {display(newOrder)} </ul>
             : null }
            {/* {members.sort(() => Math.random() - 0.5)} */}
        </div>
    )
}
