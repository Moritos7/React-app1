import React from 'react'
import { useParams } from 'react-router'

function Catalog() {
    let {id} =useParams();
    return (
        <div>
            {id}
        </div>
    )
}

export default Catalog
