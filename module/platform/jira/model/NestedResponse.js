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
import ErrorCollection from './ErrorCollection';
import WarningCollection from './WarningCollection';

/**
 * The NestedResponse model module.
 * @module model/NestedResponse
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class NestedResponse {
    /**
     * Constructs a new <code>NestedResponse</code>.
     * @alias module:model/NestedResponse
     */
    constructor() { 
        
        NestedResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>NestedResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NestedResponse} obj Optional instance to populate.
     * @return {module:model/NestedResponse} The populated <code>NestedResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NestedResponse();

            if (data.hasOwnProperty('errorCollection')) {
                obj['errorCollection'] = ErrorCollection.constructFromObject(data['errorCollection']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'Number');
            }
            if (data.hasOwnProperty('warningCollection')) {
                obj['warningCollection'] = WarningCollection.constructFromObject(data['warningCollection']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>NestedResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>NestedResponse</code>.
     */
    static validateJSON(data) {
        // validate the optional field `errorCollection`
        if (data['errorCollection']) { // data not null
          ErrorCollection.validateJSON(data['errorCollection']);
        }
        // validate the optional field `warningCollection`
        if (data['warningCollection']) { // data not null
          WarningCollection.validateJSON(data['warningCollection']);
        }

        return true;
    }


}



/**
 * @member {module:model/ErrorCollection} errorCollection
 */
NestedResponse.prototype['errorCollection'] = undefined;

/**
 * @member {Number} status
 */
NestedResponse.prototype['status'] = undefined;

/**
 * @member {module:model/WarningCollection} warningCollection
 */
NestedResponse.prototype['warningCollection'] = undefined;






export default NestedResponse;

