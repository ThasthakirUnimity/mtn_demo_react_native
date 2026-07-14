import React, { createContext, useState } from 'react'

export const Context = createContext({
  refSearch: null,
  setRefSearch: () => {},
  searchKey: '',
  setSearchKey: () => {}
})

const ContextProvider = ({ children }) => {
  const [refSearch, setRefSearch] = useState(null)
  const [searchKey, setSearchKey] = useState('')

  return (
    <Context.Provider value={{
      refSearch,
      setRefSearch,
      searchKey,
      setSearchKey
    }}
    >{children}
    </Context.Provider>
  )
}

export default ContextProvider
