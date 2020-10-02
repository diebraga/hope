/* eslint-disable @typescript-eslint/camelcase */
import React, { useState } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';

// import { Container } from './styles';

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
    <form className='' onSubmit={e => onSubmit(e)}>
        <div className='row'>
            <div className=''>
                <div className=''>
                    <label className='' htmlFor='institution_type'>Humanitarian or Environment</label>
                    <select className='' name='institution_type' onChange={e => onChange(e)} value={institution_type}>
                        <option>Humanitarian</option>
              <option>Environment</option>
            </select>
          </div>
        </div>

            <div className=''>
                <label className='' htmlFor='has_photos'>Has Photos</label>
                <select className='' name='has_photos' onChange={e => onChange(e)} value={has_photos}>
                        <option>1+</option>
            <option>3+</option>
            <option>5+</option>
            <option>10+</option>
            <option>15+</option>
          </select>
        </div>

            <div className=''>
                <label className='' htmlFor='keywords'>Keywords</label>
                <input className='' name='keywords' type='text' onChange={e => onChange(e)} value={keywords} />
              </div>

              <div className=''>
                    {loading ?
                        <div className=''>
                            <Loader
                                type="Oval"
                                color="#424242"
                                height={50}
                                width={50}
                            />
                        </div> :
                        <button className=''>Search</button>
                    }
                </div>
            </div>
        </form>
    );
};

InstitutionForm.propTypes = {
  setInstitutions: PropTypes.func.isRequired
};


export default InstitutionForm;
