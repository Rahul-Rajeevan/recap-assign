import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Sidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [category, setCategory] = useState(
    searchParams.getAll("category") || []
  );
  const [order, setorder] = useState(searchParams.get("order")||"");

  const handleOrder = (e) => {
    setorder(e.target.value);
  };

  const handleChange = (e) => {
    // console.log(e.target.value)
    let newCategory = [...category];
    let value = e.target.value;
    if (newCategory.includes(value))
      newCategory.splice(newCategory.indexOf(value), 1);
    else newCategory.push(value);
    setCategory(newCategory);
    console.log(category);
  };
  useEffect(() => {
    let obj={ category,
    }
    order&&(obj.order=order)
    setSearchParams(obj);
  }, [category,order]);

  return (
    <div>
      <h3>Sort by category</h3>
      <div>
        <input
          type="checkbox"
          value="male"
          onChange={handleChange}
          checked={category.includes("male")}
        />
        <label>Men</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="female"
          onChange={handleChange}
          checked={category.includes("female")}
        />
        <label>Women</label>
      </div>
      <div>
        <input
          type="checkbox"
          value="kids"
          onChange={handleChange}
          checked={category.includes("kids")}
        />
        <label>Kids</label>
      </div>
      <br />
      <h3>Sort by Price</h3>
      <div onChange={handleOrder}>
        <input type="radio" name="order" value="asc" checked={order==="asc"}/>
        <label>Ascending</label>
        <input type="radio" name="order" value="desc" checked={order==="desc"}/>
        <label>Descending</label>
      </div>
    </div>
  );
};

export default Sidebar;
