import React, { useCallback, useEffect, useState } from "react";
import {
  Container,
  AddressSide,
  CartSide,
  CartList,
  PaymentWrapper,
} from "./styles";
import { v4 as uuidv4 } from "uuid";
import { api } from "../../service/api";
import Input from "../../components/Input";
import QuantityInput from "../../components/QuantityInput";
import RadioButton from "../../components/RadioButton";

const CartPage = () => {
  const [cartItems, setCartItems] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [complement, setComplement] = useState("");
  const [city, setCity] = useState("");
  const [number, setNumber] = useState(0);
  const [state, setState] = useState("");

  const [activePayment, setActivePayment] = useState(0);

  const [totalValue, setTotalValue] = useState(0);
  const [paymentType, setPaymentType] = useState([{}]);

  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  useEffect(() => {
    api.get("/produtos").then((response) => setCartItems(response.data));
    api
      .get("/formas-pagamento")
      .then((response) => setPaymentType(response.data));
  }, []);

  useEffect(() => {
    const res =
      cartItems &&
      cartItems.reduce((acc, item) => {
        return acc + item.preco;
      }, 0);

    setTotalValue(res);
  }, [cartItems]);

  const handleDeleteProduct = useCallback(
    async (produtctId) => {
      const newArray = cartItems;

      await api.delete(`/produtos/delete/${produtctId}`).then((response) => {
        setCartItems(
          newArray && newArray.filter((product) => product.id !== produtctId)
        );
      });
    },
    [cartItems]
  );

  const sendSale = () => {
    const itemVenda = cartItems.map((item) => {
      return { produto: { id: item.id }, quantidade: 2 };
    });

    const codigoVenda = uuidv4();

    api
      .post("/vendas", {
        cliente: name,
        endereco: {
          rua: address,
          numero: number,
          complemento: complement,
          cidade: city,
          estado: state,
        },
        formaPagamento: {
          id: activePayment,
        },
        codigoVenda,
        itemVenda,
      })
      .then((response) => {
        if (response.status === 201) {
          alert("Compra efetuada com sucesso!");
          alert(`Seu código da venda é: ${codigoVenda}`);
          setCity("");
          setComplement("");
          setLastName("");
          setName("");
          setNumber("");
          setAddress("");
          setCartItems("");
        }
      });
  };

  return (
    <Container>
      <div>
        <AddressSide>
          <h2>Endereço</h2>
          <form>
            <div>
              <Input
                type="name"
                label="Nome"
                id="name"
                name="name"
                placeholder="Digite o nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="name"
                label="Sobrenome"
                id="lastName"
                name="lastName"
                placeholder="Digite o sobrenome"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div>
              <Input
                type="text"
                label="Endereço"
                id="address"
                name="address"
                placeholder="Digite o endereço"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <Input
                type="number"
                label="Número"
                id="number"
                name="number"
                placeholder="Digite o número"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div>
              <Input
                type="text"
                label="Complemento"
                id="complemento"
                name="complemento"
                placeholder="Digite o complemento"
                value={complement}
                onChange={(e) => setComplement(e.target.value)}
              />
              <Input
                type="text"
                label="Cidade"
                id="cidade"
                name="cidade"
                placeholder="Digite a cidade"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <Input
                type="text"
                label="Estado"
                id="estado"
                name="estado"
                placeholder="Digite o estado"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <PaymentWrapper>
              <h2>Forma de pagamento</h2>
              <div>
                {paymentType &&
                  paymentType.map((type, i) => {
                    return (
                      <RadioButton
                        key={i}
                        label={type.tipo}
                        name={type.tipo}
                        checked={activePayment === type.id}
                        onChange={() => setActivePayment(type.id)}
                      />
                    );
                  })}
              </div>
            </PaymentWrapper>
          </form>
        </AddressSide>
        <CartSide>
          <header>
            <h2>Meu Carrinho</h2>
          </header>
          <main>
            <CartList>
              {cartItems &&
                cartItems.map((product) => {
                  return (
                    <li key={product.id}>
                      <img src={product.foto} alt={product.nome} />
                      <div>
                        <h2>{product.nome}</h2>
                        <strong>{formatter.format(product.preco)}</strong>
                      </div>
                      <aside>
                        <button onClick={() => handleDeleteProduct(product.id)}>
                          excluir
                        </button>
                        <QuantityInput
                          price={product.preco}
                          setTotalValue={setTotalValue}
                          totalValue={totalValue}
                        />
                      </aside>
                    </li>
                  );
                })}
            </CartList>
          </main>
          <div>
            <span>
              Subtotal: <strong>{formatter.format(totalValue)}</strong>
            </span>
            <span>
              Frete: <strong>40</strong>
            </span>
          </div>
          <footer>
            <strong>{formatter.format(totalValue + 40)}</strong>
            <button onClick={sendSale}>Finalizar</button>
          </footer>
        </CartSide>
      </div>
    </Container>
  );
};

export default CartPage;
