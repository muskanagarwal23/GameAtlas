import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../store/slices/filterSlice';

const PaginationComponent = ({ totalCount, pageSize }) => {
  const dispatch = useDispatch();
  const currentPage = useSelector(state => state.filters.currentPage);
  const totalPages = Math.ceil(totalCount / pageSize);

  const handleNext = () => {
    if (currentPage < totalPages) {
      dispatch(setCurrentPage(currentPage + 1));
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  return (
    <div className="d-flex justify-content-center my-4">
      <button onClick={handlePrev} disabled={currentPage === 1} className="btn btn-primary mx-2">
        Previous
      </button>
      <span className="align-self-center">Page {currentPage} of {totalPages}</span>
      <button onClick={handleNext} disabled={currentPage === totalPages} className="btn btn-primary mx-2">
        Next
      </button>
    </div>
  );
};

export default PaginationComponent;
