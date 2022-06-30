const Accouts = ({ accounts }) => {
  const data = accounts;
  //   console.log(data);
  const operation = data.operations;
  console.log(operation);
  return (
    <section>
      <div className="name" style={{ backgroundColor: data.color }}>
        <h2>{data.name}</h2>
        <span>{data.balance} €</span>
      </div>
    </section>
  );
};

export default Accouts;
