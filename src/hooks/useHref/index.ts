import { useCallback } from "react";
import { useHistory } from "react-router-dom";

export default function () {
  const history = useHistory();

  /**
   * Handle open a page
   *
   */
  const open = useCallback(
    function (path: string) {
      return function () {
        history.push(path);
      };
    },
    [history]
  );

  /**
   * Handle goback on history state
   *
   */
  const back = useCallback(
    function () {
      return function () {
        history.goBack();
      };
    },
    [history]
  );

  return {
    back,
    open,
  };
}
