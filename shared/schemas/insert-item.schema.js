const SCHEMA = {
  id: "insertItem",
  type: "object",
  properties: {
    n: {
      type: "string"
    },
    k: {
      type: "string"
    },
    d: {
      type: "object"
    }
  },
  required: ["n", "k", "d"]
};

export default SCHEMA;