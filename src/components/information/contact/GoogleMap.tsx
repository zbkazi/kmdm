import React from "react";

const GoogleMap = () => {
  return (
    <div className="flex justify-center">
      <section className="mb-8 sm:container sm:m-auto">
        <h2 className="text-4xl font-bold mb-4 text-blue-700 dark:text-blue-400">
          Contact Us
        </h2>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d775.7923276930944!2d89.60966795692546!3d25.638244697480005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fd33fd3595d867%3A0x806ea9580966773!2z4KaV4Ka-4Ka24Ka_4KawIOCmluCmvuCmruCmvuCmsCDgpq7gpqvgpr_gppzgpr_gp5_gpr4g4Kam4Ka-4KaW4Ka_4KayIOCmruCmvuCmpuCnjeCmsOCmvuCmuOCmvg!5e0!3m2!1sen!2sbd!4v1719189196884!5m2!1sen!2sbd"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="rounded-2xl shadow-lg border-4 border-blue-500 dark:border-blue-300"
        ></iframe>
      </section>
    </div>
  );
};

export default GoogleMap;
