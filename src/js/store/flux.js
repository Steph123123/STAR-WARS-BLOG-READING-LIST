const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
      planets: [],
      vehicles:[],
    },
    actions: {
      getpeople: () => {
        fetch("https://www.swapi.tech/api/people", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((resp) => {
            return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
          })
          .then((data) => {
            //here is were your code should start after the fetch finishes
            setStore({ people: data.results }); //this will print on the console the exact object received from the server
          })
          .catch((error) => {
            //error handling
            console.log(error);
          });
      },
      getplanets: () => {
      fetch("https://www.swapi.tech/api/planets", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => {
          return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
        })
        .then((data) => {
          //here is were your code should start after the fetch finishes
          setStore({ planets: data.results }); //this will print on the console the exact object received from the server
        })
        .catch((error) => {
          //error handling
          console.log(error);
        });
    },
    getvehicles: () => {
      fetch("https://www.swapi.tech/api/vehicles", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => {
          return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
        })
        .then((data) => {
          //here is were your code should start after the fetch finishes
          setStore({ vehicles: data.results }); //this will print on the console the exact object received from the server
        })
        .catch((error) => {
          //error handling
          console.log(error);
        });
    },
    },
    
  };
};

export default getState;
