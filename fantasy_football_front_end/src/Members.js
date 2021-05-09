import React from 'react'

export default function Members({name, titles}) {

    return (
        <ol className="Display">
                {name}
                {titles}
        </ol>
    )
}
