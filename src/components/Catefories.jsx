import React from "react";

export const Catefories = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onClickCategory = (index) => {
    setActiveIndex(index);
  };

  const categories = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((category,index) => (
          <li key={index}
            className={activeIndex ===index ? "active" : ""}
            onClick={() => onClickCategory(index)}>{category}</li>
        ))}
      </ul>
    </div>
  );
};
