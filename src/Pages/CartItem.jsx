import { useCallback } from "react";
import { Button, Table } from "react-bootstrap";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
    clearCart,
    decrementItem,
    incrementItem,
    removeItems,
} from "../Redux/cartSlice";
import Checkout from "./Checkout";

function CartItem() {
    const products = useSelector((state) => state.carts.products) || [];

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const removeItem = useCallback(
        (id) => {
            dispatch(removeItems(id));
        },
        [dispatch]
    );

    const handleIncrement = useCallback(
        (id) => dispatch(incrementItem({ id })),
        [dispatch]
    );

    const handleDecrement = useCallback(
        (id) => {
            dispatch(decrementItem({ id }));
        },
        [dispatch]
    );

    const handleClearCart = useCallback(() => {
        dispatch(clearCart());
    }, [dispatch]);

    const handleImageClick = useCallback(
        (id) => {
            navigate(`/product/${id}`);
        },
        [navigate]
    );

    return (
        <div className="container">
            <div>
                <center className="m-5">
                    <h1>Shopping List</h1>
                </center>
            </div>

            <Table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {products.length === 0 && (
                        <tr>
                            <td
                                colSpan={5}
                                className="text-center align-middle"
                                style={{ height: "45vh" }}
                            >
                                <h1>No items in cart</h1>
                            </td>
                        </tr>
                    )}
                    {products.map((item) => (
                        <tr key={item.id}>
                            <td style={{ width: "40%" }}>
                                {item.images && item.images.length > 0 && (
                                    <img
                                        src={item.images[0]}
                                        alt={item.title}
                                        className="w-25 ms-2 object-fit-scale"
                                        style={{ height: "150px", cursor: "pointer" }}
                                        onClick={() => handleImageClick(item.id)}
                                    />
                                )}
                                <span className="ms-2">{item.title}</span>
                            </td>
                            <td>$ {item.price}</td>
                            <td>
                                <div>
                                    <button
                                        className="btn btn-dark opacity-50"
                                        onClick={() => handleDecrement(item.id)}
                                    >
                                        -
                                    </button>
                                    <span className="mx-3">{item.quantity}</span>
                                    <button
                                        className="btn btn-dark opacity-50"
                                        onClick={() => handleIncrement(item.id)}
                                    >
                                        +
                                    </button>
                                </div>
                            </td>
                            <td>$ {(item.price * item.quantity).toFixed(2)}</td>
                            <td>
                                <button
                                    className="bg-body background-transparent border-0 btn_delete"
                                    onClick={() => removeItem(item.id)}
                                >
                                    <MdOutlineDeleteForever size={30} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <div className="d-flex justify-content-between mb-5 mx-4">
                <div>
                    <Button
                        variant="dark"
                        className="me-3"
                        onClick={() => navigate("/", { replace: true })}
                    >
                        Continue Shopping
                    </Button>
                    <Button variant="dark" onClick={handleClearCart}>
                        Clear Cart
                    </Button>
                </div>
                <div>
                    <div>
                        <h3>CART TOTALS</h3>
                    </div>
                    <hr />
                    <div className="mb-4">
                        <div className="d-flex justify-content-between">
                            <span>Subtotal :</span>
                            <span>
                                ${" "}
                                {products
                                    .reduce((a, b) => a + b.price * b.quantity, 0)
                                    .toFixed(2)}
                            </span>
                        </div>
                        <br />
                        <div className="d-flex justify-content-between">
                            <span>Shipping : </span>
                            <span>$ 0.00</span>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between">
                            <span>Total : </span>
                            <span>
                                ${" "}
                                {products
                                    .reduce((a, b) => a + b.price * b.quantity, 0)
                                    .toFixed(2)}
                            </span>
                        </div>
                    </div>
                    <div>
                        <Checkout products={products} />
                    </div>
                </div>

            </div>

        </div>
    );
}

export default CartItem;
