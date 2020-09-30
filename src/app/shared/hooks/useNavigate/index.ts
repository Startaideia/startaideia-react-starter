import { useCallback } from "react";
import { useHistory } from "react-router-dom";

export default function () {
  const history = useHistory();

  const navigate = useCallback(
    function (path: string) {
      return function () {
        history.push(path);
      };
    },
    [history]
  );

  return {
    navigate,
  };
}
