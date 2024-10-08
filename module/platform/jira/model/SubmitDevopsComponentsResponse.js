/**
 * Jira Software Cloud API
 * Jira Software Cloud REST API documentation
 *
 * The version of the OpenAPI document: 1001.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ErrorMessage1 from './ErrorMessage1';

/**
 * The SubmitDevopsComponentsResponse model module.
 * @module model/SubmitDevopsComponentsResponse
 * @version 1001.0.0
 */
class SubmitDevopsComponentsResponse {
    /**
     * Constructs a new <code>SubmitDevopsComponentsResponse</code>.
     * The result of a successful submitDevopsComponents request. 
     * @alias module:model/SubmitDevopsComponentsResponse
     */
    constructor() { 
        
        SubmitDevopsComponentsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SubmitDevopsComponentsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubmitDevopsComponentsResponse} obj Optional instance to populate.
     * @return {module:model/SubmitDevopsComponentsResponse} The populated <code>SubmitDevopsComponentsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubmitDevopsComponentsResponse();

            if (data.hasOwnProperty('acceptedComponents')) {
                obj['acceptedComponents'] = ApiClient.convertToType(data['acceptedComponents'], ['String']);
            }
            if (data.hasOwnProperty('failedComponents')) {
                obj['failedComponents'] = ApiClient.convertToType(data['failedComponents'], {'String': [ErrorMessage1]});
            }
            if (data.hasOwnProperty('unknownProjectKeys')) {
                obj['unknownProjectKeys'] = ApiClient.convertToType(data['unknownProjectKeys'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SubmitDevopsComponentsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SubmitDevopsComponentsResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['acceptedComponents'])) {
            throw new Error("Expected the field `acceptedComponents` to be an array in the JSON data but got " + data['acceptedComponents']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['unknownProjectKeys'])) {
            throw new Error("Expected the field `unknownProjectKeys` to be an array in the JSON data but got " + data['unknownProjectKeys']);
        }

        return true;
    }


}



/**
 * The IDs of Components that have been accepted for submission.  A Component may be rejected if it was only associated with unknown project keys.  Note that a Component that isn't updated due to it's updateSequenceNumber being out of order is not considered a failed submission. 
 * @member {Array.<String>} acceptedComponents
 */
SubmitDevopsComponentsResponse.prototype['acceptedComponents'] = undefined;

/**
 * Details of Components that have not been accepted for submission, usually due to a problem with the request data.  The object (if present) will be keyed by Component ID and include any errors associated with that Component that have prevented it being submitted. 
 * @member {Object.<String, Array.<module:model/ErrorMessage1>>} failedComponents
 */
SubmitDevopsComponentsResponse.prototype['failedComponents'] = undefined;

/**
 * Project keys that are not known on this Jira instance (if any).  These may be invalid keys (e.g. `UTF` is sometimes incorrectly identified as a Jira project key), or they may be for projects that no longer exist.  If a Component has been associated with project keys other than those in this array it will still be stored against those valid keys. If a Component was only associated with project keys deemed to be invalid it won't be persisted. 
 * @member {Array.<String>} unknownProjectKeys
 */
SubmitDevopsComponentsResponse.prototype['unknownProjectKeys'] = undefined;






export default SubmitDevopsComponentsResponse;

