import Button from "./Button";
const Accouts = ({ accounts }) => {
  const data = accounts;
  //   console.log(data);
  const operation = data.operations;
  // console.log(operation);
  return (
    <section>
      <div className="name" style={{ backgroundColor: data.color }}>
        <h2>{data.name}</h2>
        <span>
          {`${data.balance.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
           €`}
        </span>
      </div>
      {operation.map((element, index) => {
        let amount = element.amount.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        });
        console.log(amount);
        return (
          <div className={`box${index}`}>
            <span className="date">{element.date}</span>
            <div className="twoSpan">
              <div>
                <span>{element.description}</span>
              </div>
              <div>
                <span className="amount">{`${amount} €`}</span>
              </div>
            </div>
          </div>
        );
      })}
      <Button children="SEE MORE"></Button>
    </section>
  );
};

export default Accouts;
