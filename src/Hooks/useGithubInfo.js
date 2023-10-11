import { useEffect, useState } from "react";

const useGithubInfo = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch("https://api.github.com/users/rishabhpandey3097")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return data;
};

export default useGithubInfo;
