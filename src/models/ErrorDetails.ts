import {map, mapArray} from '../common/Mapper';
import RetryHint from './RetryHint';

/**
 * @export
 * @class ErrorDetails
 */
export class ErrorDetails {
  /**
   * Specific error code (required)
   * @type {number}
   * @memberof ErrorDetails
   */
  public code?: number;

  /**
   * Error group name (required)
   * @type {string}
   * @memberof ErrorDetails
   */
  public category?: string;

  /**
   * Detailed error message (required)
   * @type {string}
   * @memberof ErrorDetails
   */
  public text?: string;

  /**
   * Information if the encoding could potentially succeed when retrying. (required)
   * @type {RetryHint}
   * @memberof ErrorDetails
   */
  public retryHint?: RetryHint;

  constructor(obj?: Partial<ErrorDetails>) {
    if(!obj) {
      return;
    }
    this.code = map(obj.code);
    this.category = map(obj.category);
    this.text = map(obj.text);
    this.retryHint = map(obj.retryHint);
  }
}

export default ErrorDetails;

