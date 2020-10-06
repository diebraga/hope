import React from 'react';
import PropTypes from 'prop-types';

const Pagination = (props) => {
  const getNumbers = () => {
    let numbers = [];
    let itemsPerPage = props.itemsPerPage;
    let pageNumber = 1;

      for (let i = 0; i < props.count; i += itemsPerPage) {
        const page = pageNumber;
        let style = 'btn btn-success';
        let content = null;


          if (props.active === page) {
            style = 'btn btn-success active';
            content = (
              <div key={i} className={style}>
                &nbsp;
                {pageNumber}
              </div>
            );
          }
          else {
            content = (
              <div key={i} onClick={() => props.visitPage(page)} className={style}>
                &nbsp;
                {pageNumber}
              </div>
            );
          }

          numbers.push(
            content
          );
        pageNumber++;
      }

    return numbers;
  };

  return (
    <>
    <div className='col-sm-12'>
    &nbsp;
      <div onClick={() => props.previous()} className='btn btn-success'>
        Previous
      </div>
        &nbsp;&nbsp;
        {getNumbers()}
        &nbsp;&nbsp;
      <div onClick={() => props.next()} className='btn btn-success'>
        Next
      </div>
    </div>
    </>
  );
};

  Pagination.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  active: PropTypes.number.isRequired,
  visitPage: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
};


export default Pagination;
