import { useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";

const useAxios = (url) => {
  const [cards, setCards] = useState([]);
  const addCard = async (name=null) => {
    console.log(name)
    if (name) url += name;
    try{
    const response = await axios.get(url);
    setCards((cards) => [...cards, { ...response.data, id: uuid() }]);
    }catch{
        
    }
  };
  const removeAll = () => {setCards([])};
  return [cards, addCard,removeAll];
};

export default useAxios;
