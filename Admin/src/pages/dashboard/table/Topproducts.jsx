import Badge from "../../../components/badge/Badge";
const data = [
  { category: "Nike", name: "Air Force 1", price: 180, status: "Hot" },
  {
    category: "Jordan",
    name: "Air Jordan 8",
    price: 200,
    status: "Regular",
  },
  {
    category: "Jordan",
    name: "Air Jordan 1",
    price: 19,
    status: "TopSeller",
  },
  { category: "Adidas", name: "Air Yeezy", price: 300, status: "Irregular" },
  {
    category: "New balance",
    name: "New Balance 574 Classic",
    price: 200,
    status: "Regular",
  },
  {
    category: "Vans",
    name: "Sentry Old Skool WC",
    price: 180,
    status: "TopPick",
  },
  { category: "Vans", name: "Old skool", price: 140, status: "Hot" },
  { category: "Converse", name: "Run Star Hike", price: 300, status: "TopPick" },
];

function Topproducts() {
  return (
    <div className="table-wrapper">
      <table className="table-basic">
        <thead className="table-basic-thead">
          <tr>
            <th>S.No</th>
            <th>Product Category</th>
            <th>Product Name</th>
            <th>Sale Value</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="table-basic-tbody">
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td> {key + 1}</td>
                <td>{val.category}</td>
                <td>{val.name}</td>
                <td>{val.price}</td>
                <td>
                  <Badge type={[val.status]} content={val.status} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Topproducts;
