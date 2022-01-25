import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { listProduct } from "../actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;
  //component didMount
  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]); // this part does the trigger to fireoffs useEffects

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <h2>Loading</h2>
      ) : error ? (
        <h3>{error} </h3>
      ) : (
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <Product key={product._id} product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
