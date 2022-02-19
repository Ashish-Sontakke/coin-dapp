import Web3 from "web3";

const App = {
  start: async function () {
    console.log("app started");
  },
};

window.App = App;

window.addEventListener("load", function () {
  if (window.ethereum) {
    App.web3 = new Web3(window.ethereum);
    window.ethereum.enable();
  } else {
    console.warn("No web3 detected.");
  }
  App.start();
});
