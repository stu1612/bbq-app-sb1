import React from "react";

export default function GoogleMap() {
  return (
    <iframe
      title="map"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35969.28635367684!2d13.162976710668744!3d55.70497426829276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653907c03e75a3b%3A0x4019078290e7a70!2sLund!5e0!3m2!1sen!2sse!4v1650993193121!5m2!1sen!2sse"
      width="920"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}
