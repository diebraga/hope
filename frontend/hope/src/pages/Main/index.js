import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import InstitutionForm from '../../components/InstitutionForm';
import Institutions from '../../components/Institutions';
import Pagination from '../../components/Pagination';

// import { Container } from './styles';

const Main = () => {
  const [institutions, setInstitutions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [institutionsPerPage, setinstitutionsPerPage] = useState(3);
  const [active, setActive] = useState(1);

  /**
   *  Logic for pagination bellow state fuction, states in the top.
   */

  const indexOfLastInstitution = currentPage * institutionsPerPage;
  const indexOfFirstInstitution = indexOfLastInstitution - institutionsPerPage;
  const currentinstitutions = institutions.slice(
    indexOfFirstInstitution,
    indexOfLastInstitution,
  );

  const visitPage = page => {
    setCurrentPage(page);
    setActive(page);
  };

  const previousNumber = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      setActive(currentPage - 1);
    }
  };

  const nextNumber = () => {
    if (currentPage !== Math.ceil(institutions.length / 3)) {
      setCurrentPage(currentPage + 1);
      setActive(currentPage + 1);
    }
  };

  return (
    <main>
      <Helmet>
        <title>4_Hope - Home</title>
        <meta name="description" content="4_Hope Estate Home Page" />
      </Helmet>
      <section>
        <InstitutionForm setInstitutions={setInstitutions} />
      </section>
      <section>
        <Institutions institutions={currentinstitutions} />
      </section>
      <section>
        <div>
          {Institutions.length !== 0 ? (
            <Pagination
              itemsPerPage={institutionsPerPage}
              count={Institutions.length}
              visitPage={visitPage}
              previous={previousNumber}
              next={nextNumber}
              active={active}
              setActive={setActive}
            />
          ) : null}
        </div>
      </section>
    </main>
  );
};

export default Main;
