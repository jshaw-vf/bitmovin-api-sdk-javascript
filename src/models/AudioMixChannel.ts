import {map, mapArray} from '../common/Mapper';
import SourceChannel from './SourceChannel';

/**
 * @export
 * @class AudioMixChannel
 */
export class AudioMixChannel {
  /**
   * Channel number of this mix (starting with 0) (required)
   * @type {number}
   * @memberof AudioMixChannel
   */
  public channelNumber?: number;

  /**
   * List of source channels to be mixed (required)
   * @type {SourceChannel[]}
   * @memberof AudioMixChannel
   */
  public sourceChannels?: SourceChannel[];

  constructor(obj?: Partial<AudioMixChannel>) {
    if(!obj) {
      return;
    }
    this.channelNumber = map(obj.channelNumber);
    this.sourceChannels = mapArray(obj.sourceChannels, SourceChannel);
  }
}

export default AudioMixChannel;

