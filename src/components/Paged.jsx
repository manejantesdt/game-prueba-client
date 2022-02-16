import React from "react";
import styles from "../styles/Paged.module.css"; 
/*import "../Sass/Styles/Pagination.scss";*/

export default function Paged({ playersPerPage, searchPlayer, pagedTotal, currentPage }) {
  const pageNumber = [];
  const paginate = Math.ceil(searchPlayer / playersPerPage);

  for (let i = 1; i <= paginate; i++) {
    pageNumber.push(i);
  }
    return (
        <nav>
            <ul className={styles.paged}>                                                     
                {pageNumber?.map(num =>(        //si tengo ese arreglo, mapeálo y devolveme cada número que te devuelva el paginado    
                  <div className={styles.listContainer} key={num}>
                    <li className={styles.number} key={num}>
                      {/* <button onClick={() => pagedTotal(num)} className={styles.link}> */}
                      <button onClick={() => pagedTotal(num)} className={ num === currentPage ? styles.linkCurrent : styles.link}  >
                        {num}
                      </button>
                    </li>
                  </div>
                ))}         
            </ul>                                                
        </nav>
    )                //num es cada una de las páginas que necesito para renderizar todos mis jugadores
}