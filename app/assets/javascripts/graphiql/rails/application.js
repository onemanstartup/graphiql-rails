//= require ./react-15.5.4
//= require ./react-dom-15.5.4
//= require ./fetch-0.10.1
//= require ./graphiql-0.10.2

    var parameters = {};

    // Defines a GraphQL fetcher using the fetch API.
    var graphQLEndpoint = "/graphql";
    function graphQLFetcher(graphQLParams) {
      return fetch(graphQLEndpoint, {
        method: 'post',
        headers: {
           "Content-Type": "application/json",
           "X-CSRF-Token": document.querySelector("meta[name=csrf-token]").getAttribute('content')
        },

        body: JSON.stringify(graphQLParams),
        credentials: 'include',
      }).then(function (response) {
        return response.json()
      });
    }
    var defaultQuery = undefined
    // Render <GraphiQL /> into the body.
    ReactDOM.render(
      React.createElement(GraphiQL, {
        fetcher: graphQLFetcher,
        defaultQuery: defaultQuery
      }),
      document.getElementById("graphiql-container")
    );
