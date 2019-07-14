function EmailService() {
  return {
    sendEmail: async function(from, to, body) {
      let promise = new Promise((res, rej) => {
        //email Api suppose to be called here.
        setTimeout(() => res(true), 1000);
      });

      await promise;
    }
  };
}

export default EmailService;
