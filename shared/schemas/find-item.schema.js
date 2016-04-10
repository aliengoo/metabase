const SCHEMA = {
  id: "findItem",
  type: "object",
  properties: {
    n: {
      type: "string"
    },
    k: {
      type: "string"
    }
  },
  required: ["n", "k"]
};

export default SCHEMA;