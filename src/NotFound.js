import { useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();
  return (
    <div>
      <h1>404, This page does not exist {location.pathname}</h1>
    </div>
  );
}
