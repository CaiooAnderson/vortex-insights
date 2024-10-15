import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    import<LifeCycles>(
      /* webpackIgnore: true */
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});

// registerApplication({
//   name: "@vortex-insights/navbar",
//   app: () =>
//     import<LifeCycles>(
//       /* webpackIgnore: true */
//       "@vortex-insights/navbar"
//     ),
//   activeWhen: ["/"],
// });

start({
  urlRerouteOnly: true,
});
