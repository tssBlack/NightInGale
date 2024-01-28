import axios from "axios";
import { useEffect, useState } from "react";

export function API() {
  const [reposInfo, setReposInfo] = useState([]);
  const url = "https://api.github.com/users/tssBlack/repos";
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setReposInfo(res.data);
      })
      .catch((e) => {
        console.error("error", e);
      });
  }, []);
  return reposInfo;
}
