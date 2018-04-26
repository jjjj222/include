//------------------------------------------------------------------------------
//   CommandNotFoundError
//------------------------------------------------------------------------------
export class CommandNotFoundError extends Error {
    constructor(...args) {
        super(...args);

        this.name = 'CommandNotFoundError';
    }
}

//------------------------------------------------------------------------------
//   NameUsedError
//------------------------------------------------------------------------------
export class NameUsedError extends Error {
    constructor(...args) {
        super(...args);

        this.name = 'NameUsedError';
    }
}
