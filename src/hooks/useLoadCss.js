import { useEffect } from "react";

const useLoadCss = (href) => {
  useEffect(() => {
    if (href) {
      var link = document.createElement("link");
      link.type = "text/css";
      link.rel = "stylesheet";
      link.href = href;
      link.onload = "this.onload=null;this.rel='stylesheet'";
  
      document.head.appendChild(link);
    }
  });
};

export default useLoadCss;
