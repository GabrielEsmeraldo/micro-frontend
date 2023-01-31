import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === '/',
});

registerApplication({
  name: "@mfe/react-route",
  app: () =>
    System.import(
      "@mfe/react-route"
    ),
  activeWhen: (location) => location.pathname === '/react-route',
});

// registerApplication({
//   name: "@mfe/react-single",
//   app: () =>
//     System.import(
//       "@mfe/react-single"
//     ),
//   activeWhen: ["/"],
// });

// registerApplication({
//   name: "@mfe/react-multiples",
//   app: () =>
//     System.import(
//       "@mfe/react-multiples"
//     ),
//   activeWhen: ["/react-multiples"],
// });

start({
  urlRerouteOnly: true,
});
