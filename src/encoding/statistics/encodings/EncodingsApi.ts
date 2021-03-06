import {BaseAPI} from '../../../common/BaseAPI';
import Configuration from '../../../common/Configuration';
import {map, mapArray} from '../../../common/Mapper';
import LiveApi from './live/LiveApi';
import VodApi from './vod/VodApi';
import LiveStatisticsApi from './liveStatistics/LiveStatisticsApi';
import EncodingStats from '../../../models/EncodingStats';

/**
 * EncodingsApi - object-oriented interface
 * @export
 * @class EncodingsApi
 * @extends {BaseAPI}
 */
export default class EncodingsApi extends BaseAPI {
  public live: LiveApi;
  public vod: VodApi;
  public liveStatistics: LiveStatisticsApi;

  constructor(configuration: Configuration) {
    super(configuration);
    this.live = new LiveApi(configuration);
    this.vod = new VodApi(configuration);
    this.liveStatistics = new LiveStatisticsApi(configuration);
  }

  /**
   * @summary Get Statistics from an Encoding
   * @param {string} encodingId Id of the encoding
   * @throws {BitmovinError}
   * @memberof EncodingsApi
   */
  public get(encodingId: string): Promise<EncodingStats> {
    const pathParamMap = {
      encoding_id: encodingId
    };
    return this.restClient.get<EncodingStats>('/encoding/statistics/encodings/{encoding_id}', pathParamMap).then((response) => {
      return map(response, EncodingStats);
    });
  }
}
