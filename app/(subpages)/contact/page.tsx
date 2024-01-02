"use client";

import { useState, useEffect } from "react";

const Contact = () => {
  const email = ["admin", "kimyoonduk.com"];
  const [emailLink, setEmailLink] = useState("");

  useEffect(() => {
    setEmailLink(email.join("@"));
  }, [email]);

  return (
    <div>
      email:
      {emailLink}
    </div>
  );
};
export default Contact;
