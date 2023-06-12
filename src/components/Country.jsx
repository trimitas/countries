import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Country = ({ filteredCountry,getOneCountryInfo }) => {
  return (
    <div className='d-inline-flex flex-wrap justify-content-center bg-dark'>
      {filteredCountry !== undefined && filteredCountry.length !== 0 ? (
        filteredCountry.map((country, index) => (
          <Card className='m-3 border border-secondary text-secondary' style={{ width: '18rem' }} key={index}>
            <Card.Img className='border-bottom border-secondary' variant="top" src={country.flags.png} alt={country.flags.alt} />
            <Card.Body className='d-flex flex-column justify-content-around'>
              <Card.Title>{country.name.common}</Card.Title>
              <Card.Text>Region: {country.region} ({country.subregion})</Card.Text>
              <Button variant="primary" onClick={()=>getOneCountryInfo(country.name.common)}>Read more about</Button>
            </Card.Body>
          </Card>
        ))
      ) : (
        <h1>Duomenys nerasti</h1>
      )}
    </div>
  );
}

export default Country;