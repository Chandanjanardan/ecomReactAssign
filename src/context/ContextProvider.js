import React, { Children } from 'react'
import DataContext from './DataContext'



// This will act as centalised component where we will keep everrything or every info related to webpage
// A children is prop wich will become that component which is this component (context provider)wraps.
function ContextProvider({Children}) {
  return (
    <DataContext.Provider>
        {Children}
    </DataContext.Provider>
  )
}

export default ContextProvider