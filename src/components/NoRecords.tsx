const NoRecords = () => {
  return (
    <div
      className="bg-orange-100 border-t border-b border-orange-400 text-orange-600 px-4 py-3 my-10"
      role="alert"
    >
      <p className="font-bold">No record corresponds to the used filters.</p>
      <p className="text-sm">There are no records in the database.</p>
    </div>
  );
};

export default NoRecords;
