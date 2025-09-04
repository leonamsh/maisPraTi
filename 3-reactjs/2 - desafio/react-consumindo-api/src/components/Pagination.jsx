export default function Pagination({
  currentPage,
  totalPages,
  onNext,
  onPrev,
}) {
  if (totalPages <= 1) return null;
  return (
    <div className="pagination">
      <button onClick={onPrev} disabled={currentPage === 1}>
        Anterior
      </button>
      <span>
        Página {currentPage} de {totalPages}
      </span>
      <button onClick={onNext} disabled={currentPage === totalPages}>
        Próximo
      </button>
    </div>
  );
}
