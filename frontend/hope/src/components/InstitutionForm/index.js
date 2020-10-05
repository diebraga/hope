/* eslint-disable @typescript-eslint/camelcase */
import React, { useState } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import { BsSearch } from 'react-icons/bs'

import { Container } from './styles';

const InstitutionForm = props => {
  const [formData, setFormData] = useState({
    institution_type: 'Humanitarian',
    has_photos: '1+',
    keywords: '',
  });

  const { institution_type, has_photos, keywords } = formData;

  const [loading, setLoading] = useState(false);

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    setLoading(true);
    axios
      .post(
        `http://127.0.0.1:8000/api/institutions/search`,
        {
          institution_type,
          has_photos,
          keywords,
        },
        config,
      )
      .then(res => {
        setLoading(false);
        props.setInstitutions(res.data);
        window.scrollTo(0, 0);
      })
      .catch(err => {
        setLoading(false);
        window.scrollTo(0, 0);
      });
  };

  return (
    <Container>
      <form onSubmit={e => onSubmit(e)}>
        <div className='row justify-content-around text-center'>
          <label className='col-sm-4 hide' for="institution_type">Category</label>
          <label className='col-sm-4 hide' for="media">Media</label>
          <label className='col-sm-4 hide' for="keywords">Search</label>
        </div>

        <div className='row justify-content-around text-center form-group'>
          <div className='col-sm-4 hide'>
            <select className='form-control' name='institution_type' onChange={e => onChange(e)} value={institution_type}>
              <option>Humanitarian</option>
              <option>Environment</option>
            </select>
          </div>

          <div className='col-sm-4 hide'>
            <select className='form-control' name='media' onChange={e => onChange(e)} value={has_photos}>
              <option>1+</option>
              <option>3+</option>
              <option>5+</option>
              <option>10+</option>
              <option>15+</option>
            </select>
          </div>

          <div className='col-sm-4'>
            <BsSearch className="show" />
            <input className='form-control' name='keywords' type='text' onChange={e => onChange(e)} value={keywords} />
          </div>
        </div>
        <br />
        <div className='col-sm-12'>
          {loading ?
            <div className='d-flex justify-content-center'>
              <Loader
                type="ThreeDots"
                color="#424242"
                height={25}
                width={25}
              />
            </div> :
            <button className='btn btn-success btn-sm btn-block' type="submit">Submit</button>
          }
        </div>
      </form>
    </Container>
    );
};

InstitutionForm.propTypes = {
  setInstitutions: PropTypes.func.isRequired
};


export default InstitutionForm;
