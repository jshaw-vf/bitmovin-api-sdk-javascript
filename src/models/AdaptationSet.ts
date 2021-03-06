import {map, mapArray} from '../common/Mapper';
import Accessibility from './Accessibility';
import AdaptationSetRole from './AdaptationSetRole';
import BitmovinResponse from './BitmovinResponse';
import CustomAttribute from './CustomAttribute';

/**
 * @export
 * @class AdaptationSet
 */
export class AdaptationSet extends BitmovinResponse {
  /**
   * Custom adaptation set attributes
   * @type {CustomAttribute[]}
   * @memberof AdaptationSet
   */
  public customAttributes?: CustomAttribute[];

  /**
   * Roles of the adaptation set
   * @type {AdaptationSetRole[]}
   * @memberof AdaptationSet
   */
  public roles?: AdaptationSetRole[];

  /**
   * Provide signaling of CEA 607 and CEA 708
   * @type {Accessibility[]}
   * @memberof AdaptationSet
   */
  public accessibilities?: Accessibility[];

  constructor(obj?: Partial<AdaptationSet>) {
    super(obj);
    if(!obj) {
      return;
    }
    this.customAttributes = mapArray(obj.customAttributes, CustomAttribute);
    this.roles = mapArray(obj.roles);
    this.accessibilities = mapArray(obj.accessibilities, Accessibility);
  }
}

export default AdaptationSet;

