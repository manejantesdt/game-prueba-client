import React from "react";
import {StyledPaged} from "../styles/Paged" 
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Paged({ playersPerPage, searchPlayer, pagedTotal, currentPage }) {
  const pageNumber = [];
  const paginate = Math.ceil(searchPlayer / playersPerPage);

  for (let i = 1; i <= paginate; i++) {
    pageNumber.push(i);
  }
    return (
      <StyledPaged>
        {paginate > 1 && pageNumber[currentPage - 1] !== 1 && (
          <button onClick={() => pagedTotal(currentPage - 1)}>
            <ArrowBackIcon />
            {currentPage - 1}
          </button>
        )}
        {paginate > 1  && (
          <button className="currentPage">
            {currentPage}
          </button>
        )}
        {paginate > 1 && currentPage < paginate && (
          <button onClick={() => pagedTotal(currentPage + 1)}>
            {currentPage + 1}
            <ArrowForwardIcon />
          </button>
        )}
      </StyledPaged>
    );                
}