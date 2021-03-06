import {BaseAPI} from '../../../../common/BaseAPI';
import Configuration from '../../../../common/Configuration';
import {map, mapArray} from '../../../../common/Mapper';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../models/BitmovinResponse';
import TextMuxing from '../../../../models/TextMuxing';
import PaginationResponse from '../../../../models/PaginationResponse';
import {TextMuxingListQueryParams, TextMuxingListQueryParamsBuilder} from './TextMuxingListQueryParams';

/**
 * TextApi - object-oriented interface
 * @export
 * @class TextApi
 * @extends {BaseAPI}
 */
export default class TextApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Add Text muxing
   * @param {string} encodingId Id of the encoding.
   * @param {TextMuxing} textMuxing The Text muxing to be created
   * @throws {BitmovinError}
   * @memberof TextApi
   */
  public create(encodingId: string, textMuxing?: TextMuxing): Promise<TextMuxing> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.post<TextMuxing>('/encoding/encodings/{encoding_id}/muxings/text', pathParamMap, textMuxing).then((response) => {
      return map(response, TextMuxing);
    });
  }

  /**
   * @summary Delete Text muxing
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the Text muxing
   * @throws {BitmovinError}
   * @memberof TextApi
   */
  public delete(encodingId: string, muxingId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/muxings/text/{muxing_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Text muxing details
   * @param {string} encodingId Id of the encoding.
   * @param {string} muxingId Id of the Text muxing
   * @throws {BitmovinError}
   * @memberof TextApi
   */
  public get(encodingId: string, muxingId: string): Promise<TextMuxing> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.get<TextMuxing>('/encoding/encodings/{encoding_id}/muxings/text/{muxing_id}', pathParamMap).then((response) => {
      return map(response, TextMuxing);
    });
  }

  /**
   * @summary List Text muxings
   * @param {string} encodingId Id of the encoding.
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof TextApi
   */
  public list(encodingId: string, queryParameters?: TextMuxingListQueryParams | ((q: TextMuxingListQueryParamsBuilder) => TextMuxingListQueryParamsBuilder)): Promise<PaginationResponse<TextMuxing>> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    let queryParams: TextMuxingListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new TextMuxingListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<TextMuxing>>('/encoding/encodings/{encoding_id}/muxings/text', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<TextMuxing>(response, TextMuxing);
    });
  }
}
