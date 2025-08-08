function Pagination({ currentPages, totalPages, onNext, onPrev }) {
  if(totalPages <=1){
    return null;
  }

  return (
  <div className="pagination">
      <button onClick={onPrev} disabled={currentPages ===1}>Anterior</button>
      <span>Página {currentPages} de {totalPages}</span>
      <button onClick={onNext} disabled={currentPages === totalPages}>Próximo</button>
    
  </div>
  )
}

export default Pagination;
