import {map} from '../common/Mapper';
import Notification from './Notification';

/**
 * @export
 * @class EmailNotification
 */
export class EmailNotification extends Notification {
  constructor(obj: any) {
    super(obj);
    this.emails = map(obj.emails);
  }

  /**
   * @type {Array<string>}
   * @memberof EmailNotification
   */
  public emails: Array<string>;
}

export default EmailNotification;
