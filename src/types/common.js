const types = `

  type Key {
    id: String!
    type: String!
    createdIn: Float!
  }

  type Plan {
    id: ID!
    title: ID!
    description: String!
    offer: Float!
    amount: Float!
    unit: String!
    createdIn: Float!
  }

`;

const inputs = `
  enum SortDir {
    asc
    desc
  }

  enum FilterType {
    S
    B
    N
  }

  enum FilterOperator {
    startswith
    contains
    in
    between
    eq
    neq
    gt
    gte
    lt
    lte
    isnotnull
    isnull
  }

  input SortInput {
    field: String!
    dir: SortDir!
  }

  input FilterInput {
    type: FilterType
    field: String!
    value: String!
    operator: FilterOperator
    isKey: Boolean
  }

  input KeyInput {
    id: String!
    type: String!
    createdIn: Float!
  }

`;

const queries = `
  type Query {
    planList: [Plan]
  }
`;

const mutations = `
  type Mutation {
    infrastructureCreate: Boolean!
  }
`;

module.exports = `
  ${types}
  ${inputs}
  ${queries}
  ${mutations}
`;
