import React, { useState } from 'react';
import PropTypes from 'prop-types'

function AddCategory({setCategories}) {

    const [inputValue, setinputValue] = useState('')

    const handelInputChange = (e) => {
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if (inputValue.trim().length > 2) { 
            setCategories(categories =>[inputValue,...categories])
            setinputValue('')
        }
    }

  return (
    <>
      <h2>Add Category</h2>
      <form onSubmit={handleSubmit}>
        {/* <button type="submit">agregar</button> */}
        <input 
        type="text" 
        value={inputValue}
        onChange={handelInputChange}
        />
      </form>
    </>
  );
}

export default AddCategory;

AddCategory.propTypes={
    setCategories: PropTypes.func.isRequired
}