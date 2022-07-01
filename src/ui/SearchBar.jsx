import React from 'react'
import {GoSearch} from 'react-icons/go'
const SearchBar = () => {
  const [search, setSearch] = React.useState('')
  React.useEffect(() => {
    console.log(search)
  }
  , [search])
  return (
    <div className='searchBarContainer'>
      <input
        type='text'
        value={search}
        onChange={({target:{value}}) => setSearch(value)}
        placeholder='¿QUÉ ESTAS BUSCANDO? ESCRIBELO AQUI'
      />
      <button type='button'><GoSearch
        size={30}
      /></button>
    </div>
  )
}

export default SearchBar