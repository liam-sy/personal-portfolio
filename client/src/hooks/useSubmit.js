import {useState} from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// My solution to making an api call on submission
const useSubmit = () => {
  const [isLoading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const submit = async (url, data) => {
    setLoading(true);

    
    try {
      setResponse({
        type: 'success',
        message: `Thanks for your submission ${data.firstName}, we will get back to you shortly!`,
      })
      
      const body = {...data}
      
      const response = fetch("https://personal-portfolio-nodejs-webapp.azurewebsites.net/postcontact", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(body)
      })

      console.log(response)

    } catch (error) {
      setResponse({
        type: 'error',
        message: 'Something went wrong, please try again later!',
      })
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, response, submit };
}

export default useSubmit;