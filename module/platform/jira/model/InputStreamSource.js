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

/**
 * The InputStreamSource model module.
 * @module model/InputStreamSource
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class InputStreamSource {
    /**
     * Constructs a new <code>InputStreamSource</code>.
     * @alias module:model/InputStreamSource
     */
    constructor() { 
        
        InputStreamSource.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>InputStreamSource</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InputStreamSource} obj Optional instance to populate.
     * @return {module:model/InputStreamSource} The populated <code>InputStreamSource</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InputStreamSource();

            if (data.hasOwnProperty('inputStream')) {
                obj['inputStream'] = ApiClient.convertToType(data['inputStream'], Object);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InputStreamSource</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InputStreamSource</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Object} inputStream
 */
InputStreamSource.prototype['inputStream'] = undefined;






export default InputStreamSource;

