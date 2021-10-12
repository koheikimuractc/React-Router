import { useHistory, useLocation } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();
  console.log(state);

  const history = useHistory();

  const onClickBack = () => history.goBack();

  return (
    <div>
      <h1>Page1DetailA NOW</h1>
      <button onClick={onClickBack}>back</button>
    </div>
  );
};
