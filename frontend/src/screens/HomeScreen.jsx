import React from 'react';
import {Row, Col} from 'react-bootstrap';
import Product from '../components/Product';
import Loader from '../components/Loader';
import { useGetProductsQuery } from '../slices/productsApiSlice';

const HomeScreen = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  console.log('Products:', products); // Check the structure of product data
  console.log('Is Loading:', isLoading); // Check if it is still loading
  console.log('Error:', error); // Check if there's an error

  if (isLoading) return <Loader />;

  if (error) {
    const errorMessage = error?.data?.message || 'An unexpected error occurred.';
    return <div>{errorMessage}</div>;
  }

  if (!products || products.length === 0) return <div>No products found.</div>;

  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map(product => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
