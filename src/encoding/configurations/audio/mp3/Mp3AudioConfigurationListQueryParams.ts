
export interface Mp3AudioConfigurationListQueryParams {

    /**
     * Index of the first item to return, starting at 0. Default is 0
     * @type {number}
     * @memberof Mp3AudioConfigurationListQueryParams
     */
    offset?: number | undefined;

    /**
     * Maximum number of items to return. Default is 25, maximum is 100
     * @type {number}
     * @memberof Mp3AudioConfigurationListQueryParams
     */
    limit?: number | undefined;

    /**
     * Filter configuration by name
     * @type {string}
     * @memberof Mp3AudioConfigurationListQueryParams
     */
    name?: string | undefined;
}

export class Mp3AudioConfigurationListQueryParamsBuilder {
    private internalParams: Mp3AudioConfigurationListQueryParams = {};

    /**
     *
     * @param offset Index of the first item to return, starting at 0. Default is 0
     */
    public offset(offset: number) {
        this.internalParams.offset = offset;
        return this;
    }

    /**
     *
     * @param limit Maximum number of items to return. Default is 25, maximum is 100
     */
    public limit(limit: number) {
        this.internalParams.limit = limit;
        return this;
    }

    /**
     *
     * @param name Filter configuration by name
     */
    public name(name: string) {
        this.internalParams.name = name;
        return this;
    }

    public buildQueryParams() {
        return this.internalParams;
    }
}
