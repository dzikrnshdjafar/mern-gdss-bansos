export function Card({children}) {
  return (
    <div className="card bg-base-100 shadow-xl md:w-96">
  <div className="card-body">
    {children}
  </div>
</div>
  );
}
