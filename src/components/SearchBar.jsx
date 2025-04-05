import React, { useState, useEffect } from 'react';
import { FormControl } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../store/slices/filterSlice';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      // Dispatch the search query after 500ms of inactivity
      dispatch(setSearchQuery(query));
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [query, dispatch]);

  return (
    
    <div className='position-relative d-flex p-2 rounded-pill flex-grow-1 mx-4 items-align-items-center'>
      <SearchIcon size={25} className='text-secondary me-2'/>
      <FormControl
      type="text"
      placeholder="Search games..."
      className="border-1 bg-transparent w-100 shadow-none"
      
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
    </div>
  );
};

export default SearchBar;
