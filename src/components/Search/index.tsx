import { AiOutlineSearch } from 'react-icons/ai'

const Search = () => {
  return (
    <div className='flex justify-between items-center'>
      <input
        type='search'
        placeholder='Search Product Here...'
        className='w-full text-sm text-gray-700 py-2 px-2 rounded-tl-md rounded-bl-md outline-none'
      />
      <button className='px-5 py-2 bg-light-brown rounded-tr-md rounded-br-md text-primary text-xl'>
        <AiOutlineSearch />
      </button>
    </div>
  )
}

export default Search
