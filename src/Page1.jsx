import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];

  const history = useHistory();
  console.log(history);

  const onCLickDetailA = () => history.push("/page1/detailA");
  return (
    <div>
      <h1>Page1 NOW</h1>
      <Link to={{ pathname: "page1/detailA", state: arr }}>DetailA</Link>
      <br />
      <Link to="/page1/detailB">Detailb</Link>
      <br />
      <button onClick={onCLickDetailA}>detaila</button>
    </div>
  );
};
