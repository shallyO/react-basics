import NAMES from './data.json'
import { useState } from 'react'

function JsonDisplay () {
    const [query, setQuery ] = useState('')
    const changeHandler = (event) => {
        setQuery(event.target.value)
    }

    const filteredNames = NAMES.filter(item => {
        return item.first_name.includes(query) || item.last_name.includes(query)
    })

   
    return(

            <div>
                <input type='text' value={query} onChange={changeHandler} />
                {
               filteredNames.map((item) => (
                    <p key={item.id}>
                        {item.first_name} {item.last_name}
                    </p>
                    ))
                }
                    
            </div>
          
    )
}

export default JsonDisplay