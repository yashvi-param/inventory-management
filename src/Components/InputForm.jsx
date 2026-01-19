import React, { useEffect, useState } from "react";
import {
  addProduct,
  updateProductData,
} from "../features/product/productSlice";

import { useDispatch, useSelector } from "react-redux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const InputForm = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    qty: 10,
    category: "",
  });

  const updateState = useSelector((state) => state.product.updateState);

  useEffect(() => {
    if (updateState) {
      setProduct(updateState);
    }
  }, [updateState]);

  const dispatch = useDispatch();

  const handleChange = (identifier, e) => {
    setProduct((prev) => ({
      ...prev,
      [identifier]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (updateState) {
      dispatch(updateProductData(product));
      setProduct({ name: "", price: "", qty: "", category: "" });
    } else {
      dispatch(
        addProduct({
          id: new Date().getTime(),
          ...product,
        })
      );
      setProduct({ name: "", price: "", qty: "", category: "" });
      alert("product added");
    }
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow-lg border-0">
            <Card.Header className="bg-primary text-white text-center">
              <h4 className="mb-0">
                {updateState ? "Update Product" : "Add New Product"}
              </h4>
            </Card.Header>

            <Card.Body className="p-4">
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Product Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter name"
                        value={product.name}
                        onChange={(e) => handleChange("name", e)}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Category</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Category"
                        value={product.category}
                        onChange={(e) => handleChange("category", e)}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Price</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Price"
                        value={product.price}
                        onChange={(e) => handleChange("price", e)}
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Quantity</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Quantity"
                        value={product.qty}
                        onChange={(e) => handleChange("qty", e)}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <div className="d-grid mt-4">
                  <Button
                    variant={updateState ? "warning" : "success"}
                    size="lg"
                    type="submit"
                  >
                    {updateState ? "Update Product" : "Add Product"}
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default InputForm;
