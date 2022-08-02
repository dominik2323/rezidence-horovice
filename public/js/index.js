import "./lib.js";
import "./pages/aerial.js";
import "./pages/floors.js";
import "./pages/apartment.js";
import "./helpers/handleBackButton.js";
import "./helpers/onResize.js";

function fetchData() {
  fetch(`https://www.residenceuskolky.cz/graphql`, {
    method: `POST`,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
          query Nodes {
            posts(first: 1000) {
              nodes {
                slug
                tags {
                  nodes {
                    name
                    slug
                  }
                }
                title
                uri
              }
            }
          }`,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      const formattedData = data.data.posts.nodes.reduce((acc, curr, i) => {
        const [buildingName, appartmentId] = curr.title.split(`.`);
        const buildingKey = buildingName.toLowerCase();
        const buildingType = buildingKey[0];
        const floorKey = appartmentId[0];
        return {
          ...acc,
          [buildingKey]: {
            displayName: buildingName,
            floors: {
              ...acc[buildingKey]?.floors,
              [floorKey]: {
                displayName: Number(floorKey) === 0 ? `1PP` : `${floorKey}NP`,
                avaible: acc[buildingKey]?.floors[floorKey]
                  ? acc[buildingKey]?.floors[floorKey].avaible + 1
                  : 1,
                apartments: {
                  ...acc[buildingKey]?.floors[floorKey]?.apartments,
                  [appartmentId]: {
                    area:
                      curr.tags.nodes.find((tag) =>
                        tag.name.match(/\d+(.\d)?m²/g)
                      )?.name || ``,
                    dispositions:
                      curr.tags.nodes.find((tag) =>
                        tag.name.match(/\d\+(kk|\d)/gi)
                      )?.name || ``,
                    displayName: curr.title,
                    avaible: curr.tags.nodes
                      .map((tag) => tag.slug)
                      .some((tag) => tag === "volny"),
                  },
                },
              },
            },
            avaible: acc[buildingKey]?.avaible
              ? acc[buildingKey].avaible + 1
              : 1,
          },
        };
      }, {});
      console.log(formattedData, data);
      window.data = formattedData;
      window.dispatchEvent(new Event("dataloaded"));
    });
}

function parseQuery() {
  const search = window.location.search;
  if (search.length === 0) return {};
  return search
    .slice(1)
    .split("&")
    .reduce((acc, curr) => {
      const currQuery = curr.split("=");
      return { ...acc, [currQuery[0]]: currQuery[1] };
    }, {});
}

function router() {
  function parseMarkup(markup) {
    const root = document.querySelector("#root");
    root.innerHTML = "";
    const parsedDocument = parser.parseFromString(markup, "text/html");
    root.prepend(parsedDocument.body.firstChild);
  }

  const query = parseQuery();
  const page = Object.keys(query).join("/");
  const parser = new DOMParser();
  if (page === "") {
    parseMarkup(aerialMarkup);
    const getAerialData = aerialData();
    getAerialData.forEach(window.initInteractive);
  }
  if (page === "building") {
    parseMarkup(floorsMarkup);
    handleBackButton();
    const data = floorsData();
    data.forEach(window.initInteractive);
  }
  if (page === "building/floor") {
    parseMarkup(apartmentMarkup);
    handleBackButton();
    const data = apartmentData();
    data.forEach(window.initInteractive);
  }
}

addEventListener("locationchange", () => {
  router();
});
addEventListener("dataloaded", router);
addEventListener("resize", () => window.handleResize());
fetchData();
