import React, { useState, useEffect } from "react";

function Footer() {
  const [date, setDate] = useState();
  const getYear = () => setDate(new Date().getFullYear());
  useEffect(() => {
    getYear();
  }, []);
  return (
    <div className="footer">
      <p>© {date} react blog page</p>
    </div>
  );
}

export default Footer;
