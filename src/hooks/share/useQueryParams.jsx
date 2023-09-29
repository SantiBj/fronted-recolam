import { useLocation, useNavigate } from "react-router-dom";

export function useQueryParams(url) {
  const location = useLocation();
  const navigate = useNavigate();

  function addValueQueryParams(key, value) {
    navigate(`${url}/?${key}=${value}`);
  }

  function getValueUrl(param) {
    const urlParams = new URLSearchParams(location.search);
    const valueUrl = urlParams.get(param) || "";
    return valueUrl
  }

  return {
    addValueQueryParams,
    getValueUrl,
  };
}
