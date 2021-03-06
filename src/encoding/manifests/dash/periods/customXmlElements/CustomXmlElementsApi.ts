import {BaseAPI} from '../../../../../common/BaseAPI';
import Configuration from '../../../../../common/Configuration';
import {map, mapArray} from '../../../../../common/Mapper';
import BitmovinResponse from '../../../../../models/BitmovinResponse';
import CustomXmlElement from '../../../../../models/CustomXmlElement';
import PaginationResponse from '../../../../../models/PaginationResponse';
import {CustomXmlElementListQueryParams, CustomXmlElementListQueryParamsBuilder} from './CustomXmlElementListQueryParams';

/**
 * CustomXmlElementsApi - object-oriented interface
 * @export
 * @class CustomXmlElementsApi
 * @extends {BaseAPI}
 */
export default class CustomXmlElementsApi extends BaseAPI {

  constructor(configuration: Configuration) {
    super(configuration);
  }

  /**
   * @summary Add Custom XML Element to Period
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {CustomXmlElement} customXmlElement Data of the custom XML element to be added to the period
   * @throws {BitmovinError}
   * @memberof CustomXmlElementsApi
   */
  public create(manifestId: string, periodId: string, customXmlElement?: CustomXmlElement): Promise<CustomXmlElement> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId
    };
    return this.restClient.post<CustomXmlElement>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/custom-xml-elements', pathParamMap, customXmlElement).then((response) => {
      return map(response, CustomXmlElement);
    });
  }

  /**
   * @summary Delete Custom XML Element
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} customXmlElementId Id of the Custom XML Element
   * @throws {BitmovinError}
   * @memberof CustomXmlElementsApi
   */
  public delete(manifestId: string, periodId: string, customXmlElementId: string): Promise<BitmovinResponse> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      custom_xml_element_id: customXmlElementId
    };
    return this.restClient.delete<BitmovinResponse>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/custom-xml-elements/{custom_xml_element_id}', pathParamMap).then((response) => {
      return map(response, BitmovinResponse);
    });
  }

  /**
   * @summary Custom XML Element Details
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {string} customXmlElementId Id of the Custom XML Element
   * @throws {BitmovinError}
   * @memberof CustomXmlElementsApi
   */
  public get(manifestId: string, periodId: string, customXmlElementId: string): Promise<CustomXmlElement> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId,
      custom_xml_element_id: customXmlElementId
    };
    return this.restClient.get<CustomXmlElement>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/custom-xml-elements/{custom_xml_element_id}', pathParamMap).then((response) => {
      return map(response, CustomXmlElement);
    });
  }

  /**
   * @summary List all Custom XML Elements of Period
   * @param {string} manifestId Id of the manifest
   * @param {string} periodId Id of the period
   * @param {*} [queryParameters] query parameters for filtering, sorting and pagination
   * @throws {BitmovinError}
   * @memberof CustomXmlElementsApi
   */
  public list(manifestId: string, periodId: string, queryParameters?: CustomXmlElementListQueryParams | ((q: CustomXmlElementListQueryParamsBuilder) => CustomXmlElementListQueryParamsBuilder)): Promise<PaginationResponse<CustomXmlElement>> {
    const pathParamMap = {
      manifest_id: manifestId,
      period_id: periodId
    };
    let queryParams: CustomXmlElementListQueryParams = {};
    if (typeof queryParameters === 'function') {
      queryParams = queryParameters(new CustomXmlElementListQueryParamsBuilder()).buildQueryParams();
    } else if (queryParameters) {
      queryParams = queryParameters;
    }
    return this.restClient.get<PaginationResponse<CustomXmlElement>>('/encoding/manifests/dash/{manifest_id}/periods/{period_id}/custom-xml-elements', pathParamMap, queryParams).then((response) => {
      return new PaginationResponse<CustomXmlElement>(response, CustomXmlElement);
    });
  }
}
