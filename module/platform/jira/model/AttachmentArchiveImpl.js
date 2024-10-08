/**
 * The Jira Cloud platform REST API
 * Jira Cloud platform REST API documentation
 *
 * The version of the OpenAPI document: 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 * Contact: ecosystem@atlassian.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import AttachmentArchiveEntry from './AttachmentArchiveEntry';

/**
 * The AttachmentArchiveImpl model module.
 * @module model/AttachmentArchiveImpl
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class AttachmentArchiveImpl {
    /**
     * Constructs a new <code>AttachmentArchiveImpl</code>.
     * @alias module:model/AttachmentArchiveImpl
     */
    constructor() { 
        
        AttachmentArchiveImpl.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AttachmentArchiveImpl</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttachmentArchiveImpl} obj Optional instance to populate.
     * @return {module:model/AttachmentArchiveImpl} The populated <code>AttachmentArchiveImpl</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AttachmentArchiveImpl();

            if (data.hasOwnProperty('entries')) {
                obj['entries'] = ApiClient.convertToType(data['entries'], [AttachmentArchiveEntry]);
            }
            if (data.hasOwnProperty('totalEntryCount')) {
                obj['totalEntryCount'] = ApiClient.convertToType(data['totalEntryCount'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AttachmentArchiveImpl</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AttachmentArchiveImpl</code>.
     */
    static validateJSON(data) {
        if (data['entries']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['entries'])) {
                throw new Error("Expected the field `entries` to be an array in the JSON data but got " + data['entries']);
            }
            // validate the optional field `entries` (array)
            for (const item of data['entries']) {
                AttachmentArchiveEntry.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * The list of the items included in the archive.
 * @member {Array.<module:model/AttachmentArchiveEntry>} entries
 */
AttachmentArchiveImpl.prototype['entries'] = undefined;

/**
 * The number of items in the archive.
 * @member {Number} totalEntryCount
 */
AttachmentArchiveImpl.prototype['totalEntryCount'] = undefined;






export default AttachmentArchiveImpl;

