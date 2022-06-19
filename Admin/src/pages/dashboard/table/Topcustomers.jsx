import "../../../components/table/table.css";
const data = [
  { name: "Cara Delevingne", orders: 192, spending: 69504 },
  { name: "Ivanka Trump", orders: 192, spending: 69504 },
  { name: "Kate Upton", orders: 192, spending: 69504 },
  { name: "Dakota Johnson", orders: 192, spending: 69504 },
  { name: "Bella Hadid", orders: 192, spending: 69504 },
];

function Topcustomers(props) {
  return (
    <div className="table-wrapper">
      <table className="table-basic">
        <thead className="table-basic-thead">
          <tr>
            <th>User</th>
            <th>Total Buy</th>
            <th>Total Sell</th>
          </tr>
        </thead>
        <tbody className="table-basic-tbody">
          {props.listUser.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.name}</td>
                <td>{val.totalBuy}</td>
                <td>{val.totalSell}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Topcustomers;
