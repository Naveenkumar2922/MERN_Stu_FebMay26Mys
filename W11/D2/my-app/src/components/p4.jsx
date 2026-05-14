// Optional Parameters
import { useParams } from "react-router-dom";

export  function  OptionalParameters () {
  const { username } = useParams();

  return (
    <div>
      <h1>Optional Parameters</h1>

      {username ? (
        <p>Hello, {username}</p>
      ) : (
        <p>Hello, User</p>
      )}
    </div>
  );
}