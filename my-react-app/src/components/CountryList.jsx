import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CountryCard } from './CountryCard';
import { fetchCountries, loadMore } from '../app/store';
import { Row, Col, Button, Alert } from 'react-bootstrap';

export const CountryList = () => {
  const dispatch = useDispatch();
  const { data, visible, error } = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  if (error) {
    return (
      <div className="text-center mt-4">
        <Alert variant="danger">
          Error loading countries: {error}
        </Alert>
        <Button onClick={() => dispatch(fetchCountries())}>
          Retry
        </Button>
      </div>
    );
  }

  return (
    <div>
      <Row className="g-3 justify-content-center">
        {data.slice(0, visible).map((country, index) => (
          <Col key={index} xs={12} sm={6} md={6} lg={6}>
            <CountryCard country={country} />
          </Col>
        ))}
      </Row>

      {visible < data.length && (
        <div className="text-center mt-4">
          <Button style={{ background: "#3C3C3C" }} onClick={() => dispatch(loadMore())}>
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};
