import React, { useEffect } from "react";
import { useQuery } from '@apollo/react-hooks';
import { UPDATE_PRODUCTS } from "../../utils/actions";
import { QUERY_PRODUCTS } from "../../utils/queries";
import ProductItems from "../ProductItems";
import { useDispatch, useSelector } from 'react-redux';
import { idbPromise } from "../../utils/helpers";
import spinner from '../../assets/spinner.gif';

function ProductList() {
    const dispatch = useDispatch();
    const state = useSelector(state => state);
    const { currProducts } = state;
    const { loading, data } = useQuery(QUERY_PRODUCTS);

    useEffect(() => {
        if (data) {
            dispatch(
                {
                    type: UPDATE_PRODUCTS,
                    products: data.products,
                }
            );
            data.products.forEach((product) => {
                idbPromise('products', 'put', product);
            });
        }
        else if (!loading) {
            idbPromise('products', 'get').then((products) => {
                dispatch({
                    type: UPDATE_PRODUCTS,
                    products: products,
                });
            });

        }
    }, [data, loading, dispatch]);

    function filterProduct() {
        if (!currProducts) {
            return state.products;
        }
        return state.products.filter((product) => product.product._id === currProducts);
    }

    return (
        <div className="container">
            <h2>Tomorrow's Outfit Today</h2>
            {state.products.length ? (
                <div className="flex-column">
                    {filterProduct().map(product => (
                        <ProductItems
                            key={product._id}
                            _id={product._id}
                            image={product.image}
                            price={product.price}
                            quantity={product.quantity}
                        />
                    ))}
                </div>
            ) : (
                <h3>You haven't added any products yet!</h3>
            )}
            {loading ? <img src={spinner} alt="loading" /> : null}
        </div>
    );
}
export default ProductList;