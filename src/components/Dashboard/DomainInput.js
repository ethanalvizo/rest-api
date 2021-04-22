import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import RangeSlider from 'react-bootstrap-range-slider';

const Domains = ({ name, onChange, rating = 1 }) => {
    const [ value, setValue ] = React.useState(rating);

    const changeValue = (rating) => {
        setValue(rating);
        onChange(name, rating);
    }

    return (
        <Form>
            <Form.Label>
                {name}
            </Form.Label>
            <Form.Group as={Row}>
                <Col xs={10}>
                <RangeSlider
                    value={value}
                    onChange={e => changeValue(e.target.value)}
                    tooltip="off"
                    min={1} 
                    max={5} 
                    step={1}
                    variant="success"
                />
                </Col>
                <Col xs={2}>
                    <Form.Control value={value} readOnly style={{ backgroundColor: '#f8f9fa', border: 'none'}} />
                </Col>
            </Form.Group>
        </Form>
    );
}

export default Domains
