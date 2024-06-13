const Pagination = () => {
  return (
    <section className=" flex items-center justify-center">
      <button className="px-3">Previous</button>
      <div className="bg-orange-400 text-white p-3">1</div>
      <div className="p-3">2</div>
      <div className="p-3">...</div>
      <div className="p-3">25</div>
      <button className="px-3 border border-orange-400 rounded-md py-2 hover:bg-orange-400 hover:text-white duration-200">
        Next
      </button>
    </section>
  );
};

export default Pagination;
