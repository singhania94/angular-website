export class Query {

    constructor(
        public id: number,
        public firstName: String,
        public lastName: String,
        public email: String,
        public query: String,
        public contact?: number
    ) { }
}
