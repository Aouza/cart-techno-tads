import React, { useState } from "react";
import { Container } from "./styles";
const QuantityInput = ({
  price,
  setTotalAccumulatedProduct,
  setTotalValue,
  totalValue,
}) => {
  const [itemQuantity, setItemQuantity] = useState(1);

  const moreQuantity = () => {
    if (itemQuantity < 10) {
      setItemQuantity(itemQuantity + 1);
      setTotalValue(totalValue + price);
    }
  };

  const lessQuantity = () => {
    if (itemQuantity > 0) {
      setItemQuantity(itemQuantity - 1);
      setTotalValue(totalValue - price);
    }
  };

  return (
    <Container>
      <button onClick={lessQuantity}>-</button>
      <input
        type="number"
        value={itemQuantity}
        onChange={(e) => setItemQuantity(e.target.value)}
      />
      <button onClick={moreQuantity}>+</button>
    </Container>
  );
};

export default QuantityInput;
