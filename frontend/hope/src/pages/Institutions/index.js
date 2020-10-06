import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';
import Card from '../../components/Card';
import Pagination from '../../components/Pagination';

// import { Container } from './styles';

const Institutions = () => {
  const [institutions, setInstitutions] = useState([]);
  const [count, setCount] = useState(0);
  const [previous, setPrevious] = useState('');
  const [next, setNext] = useState('');
  const [active, setActive] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://127.0.0.1:8000/api/institutions/?page=1`,
        );

        setInstitutions(res.data.results);
        setCount(res.data.count);
        setPrevious(res.data.previous);
        setNext(res.data.next);
      } catch (err) {}
    };

    fetchData();
  }, []);

  const displayInstitutons = () => {
    const display = [];
    const result = [];

    institutions.map(institution => {
      return display.push(
        <Card
          institution_name={institution.institution_name}
          country={institution.country}
          city={institution.city}
          state={institution.state}
          zipcode={institution.zipcode}
          institution_type={institution.institution_type}
          photo_main={institution.photo_main}
          slug={institution.slug}
        />,
      );
    });

    for (let i = 0; i < institutions.length; i += 3) {
      result.push(
        <div key={i} className="row">
          <div className="col-1-of-3">{display[i]}</div>
          <div className="col-1-of-3">
            {display[i + 1] ? display[i + 1] : null}
          </div>
          <div className="col-1-of-3">
            {display[i + 2] ? display[i + 2] : null}
          </div>
        </div>,
      );
    }

    return result;
  };

  const visitPage = page => {
    axios
      .get(`http://127.0.0.1:8000/api/institutions/?page=${page}`)
      .then(res => {
        setInstitutions(res.data.results);
        setPrevious(res.data.previous);
        setNext(res.data.next);
        setActive(page);
      })
      .catch(err => {});
  };

  const previous_number = () => {
    axios
      .get(previous)
      .then(res => {
        setInstitutions(res.data.results);
        setPrevious(res.data.previous);
        setNext(res.data.next);
        if (previous) setActive(active - 1);
      })
      .catch(err => {});
  };

  const next_number = () => {
    axios
      .get(next)
      .then(res => {
        setInstitutions(res.data.results);
        setPrevious(res.data.previous);
        setNext(res.data.next);
        if (next) setActive(active + 1);
      })
      .catch(err => {});
  };

  return (
    <main className="institutions">
      <Helmet>
        <title>4_Hope - Institutions</title>
        <meta name="description" content="institutions page" />
      </Helmet>
      <section className="">
        {displayInstitutons()}
      </section>
      <section className="">
        <div className="row">
          <Pagination
            itemsPerPage={3}
            count={count}
            visitPage={visitPage}
            previous={previous_number}
            next={next_number}
            active={active}
            setActive={setActive}
          />
        </div>
      </section>
    </main>
  );
};

export default Institutions;
