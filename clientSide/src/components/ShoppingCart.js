import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
//import { checkOut } from "../utilities/checkOut";
import invItems from "../data/items.json"
import Offcanvas from "react-bootstrap/Offcanvas";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";

export function ShoppingCart({ isOpen }) {
    const { closeCart, cartItems } = useShoppingCart();
   
    function checkOut() {
        // fetch("http://localhost:4000/create-checkout-session", {
        fetch("https://wedding-registry.herokuapp.com/create-checkout-session", {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              items: cartItems  
          })
        // all this code will get res back from server which is a url, and send user to url   
        }).then(res => {
          console.log(res)
          if (res.ok) return res.json()
          console.log("res ok",res.json)
          return res.json().then(json => Promise.reject(json))
        }).then(({ url }) => {
          window.location = url
        }).catch(e => {
            console.error(e.error)
        })
      }

    return <Offcanvas show={isOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap={3}>
                {cartItems.map(item => (
                    <CartItem key={item.id} {...item} />
                ))}
                <div className="ms-auto fw-bold fs-5">
                    Total{" "}
                    {formatCurrency(
                        cartItems.reduce((total, cartItem) => {
                            const item = invItems.find(i => i.id === cartItem.id)
                            return total + (item?.price || 0) * cartItem.quantity
                        }, 0)
                    )}
                </div>
                <Button onClick={checkOut}>Checkout</Button>
            </Stack>
        </Offcanvas.Body>
    </Offcanvas>
}