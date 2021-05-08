import React from 'react'

export default function MemberCard({buttonPressed, members}) {
    return (
        <div>
            {buttonPressed === true ? members.sort(() => Math.random() - 0.5) : null }
            {/* {members.sort(() => Math.random() - 0.5)} */}
        </div>
    )
}
