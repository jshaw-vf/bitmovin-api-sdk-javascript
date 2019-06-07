import {BaseAPI} from '../../../../../../common/BaseAPI';
import Configuration from '../../../../../../common/Configuration';
import CustomdataApi from './customdata/CustomdataApi';
import BitmovinResponse from '../../../../../../models/BitmovinResponse';
import PlaintextId3Tag from '../../../../../../models/PlaintextId3Tag';
import PaginationResponse from '../../../../../../models/PaginationResponse';
import PlaintextId3TagListQueryParams from './PlaintextId3TagListQueryParams';

/**
 * PlainTextApi - object-oriented interface
 * @export
 * @class PlainTextApi
 * @extends {BaseAPI}
 */
export default class PlainTextApi extends BaseAPI {
  public customdata: CustomdataApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.customdata = new CustomdataApi(configuration);
  }

  /**
   * @summary Add Plain Text ID3 Tag to Progressive TS Muxing
   * @param {string} encodingId ID of the Encoding.
   * @param {string} muxingId ID of the Progressive TS Muxing
   * @param {PlaintextId3Tag} plaintextId3Tag
   * @throws {RequiredError}
   * @memberof PlainTextApi
   */
  public create(encodingId: string, muxingId: string, plaintextId3Tag?: PlaintextId3Tag): Promise<PlaintextId3Tag> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.post<PlaintextId3Tag>('/encoding/encodings/{encoding_id}/muxings/progressive-ts/{muxing_id}/id3/plain-text', pathParamMap, plaintextId3Tag).then((response) => {
      return new PlaintextId3Tag(response);
    });
  }

  /**
   * @summary Delete Plain Text ID3 Tag of Progressive TS Muxing
   * @param {string} encodingId ID of the Encoding.
   * @param {string} muxingId ID of the Progressive TS Muxing
   * @param {string} id3TagId ID of the Plain Text ID3 Tag
   * @throws {RequiredError}
   * @memberof PlainTextApi
   */
  public delete(encodingId: string, muxingId: string, id3TagId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId,
      id3_tag_id: id3TagId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/encodings/{encoding_id}/muxings/progressive-ts/{muxing_id}/id3/plain-text/{id3_tag_id}', pathParamMap).then((response) => {
      return new BitmovinResponse(response);
    });
  }

  /**
   * @summary Plain Text ID3 Tag Details of Progressive TS Muxing
   * @param {string} encodingId ID of the Encoding.
   * @param {string} muxingId ID of the Progressive TS Muxing
   * @param {string} id3TagId ID of the Plain Text ID3 Tag
   * @throws {RequiredError}
   * @memberof PlainTextApi
   */
  public get(encodingId: string, muxingId: string, id3TagId: string): Promise<PlaintextId3Tag> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId,
      id3_tag_id: id3TagId
    };
    return this.restClient.get<PlaintextId3Tag>('/encoding/encodings/{encoding_id}/muxings/progressive-ts/{muxing_id}/id3/plain-text/{id3_tag_id}', pathParamMap).then((response) => {
      return new PlaintextId3Tag(response);
    });
  }

  /**
   * @summary List Plain Text ID3 Tags of Progressive TS Muxing
   * @param {string} encodingId ID of the Encoding.
   * @param {string} muxingId ID of the Progressive TS Muxing
   * @param {*} [queryParams] query parameters for filtering, sorting and pagination
   * @throws {RequiredError}
   * @memberof PlainTextApi
   */
  public list(encodingId: string, muxingId: string, queryParams?: PlaintextId3TagListQueryParams): Promise<PaginationResponse<PlaintextId3Tag>> {
    const pathParamMap = {
      encoding_id: encodingId,
      muxing_id: muxingId
    };
    return this.restClient.get<PaginationResponse<PlaintextId3Tag>>('/encoding/encodings/{encoding_id}/muxings/progressive-ts/{muxing_id}/id3/plain-text', pathParamMap, queryParams).then((response) => {
      const paginationResponse = new PaginationResponse<PlaintextId3Tag>(response);
      if (paginationResponse.items) {
        paginationResponse.items = paginationResponse.items.map((i: any) => new PlaintextId3Tag(i));
      }
      return paginationResponse;
    });
  }
}