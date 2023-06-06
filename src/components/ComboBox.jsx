import React, { useState } from "react";

const ComboBox = ({categories}) => {
    const [selectedCategory, setSelectedCategory] = useState("");
  
    const handleChange = (event) => {
      const selectedValue = event.target.value;
      setSelectedCategory(selectedValue);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Enviar o valor selecionado (value) para o back-end
      const selectedCategoryObject = categories.find(
        (category) => category.title === selectedCategory
      );
      const selectedValue = selectedCategoryObject.value;
  
      // Chame sua função PUT aqui, passando o valor selecionado (selectedValue)
  
      // Resetar o valor selecionado
      setSelectedCategory("");
    };
  
    return (
      <span onSubmit={handleSubmit}>
        <select value={selectedCategory} onChange={handleChange}>
          <option value="">Selecione uma categoria</option>
          {categories.map((category) => (
            <option key={category.id} value={category.title}>
              {category.title}
            </option>
          ))}
        </select>
      </span>
    );
  };  

export default ComboBox;