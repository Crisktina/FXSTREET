const FetchData = (setData, setError, setLoading) => {
  fetch("https://fxsfrontend.fxstreet.workers.dev")
    .then((resp) => {
      if (!resp.ok) {
        throw new Error("Network response was not ok");
      }
      return resp.json();
    })
    .then((data) => {
      setData(data);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setError(error);
      setLoading(false);
    });
};

export default FetchData;
