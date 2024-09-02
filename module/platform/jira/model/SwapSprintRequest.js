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

/**
 * The SwapSprintRequest model module.
 * @module model/SwapSprintRequest
 * @version 1001.0.0
 */
class SwapSprintRequest {
    /**
     * Constructs a new <code>SwapSprintRequest</code>.
     * @alias module:model/SwapSprintRequest
     */
    constructor() { 
        
        SwapSprintRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SwapSprintRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SwapSprintRequest} obj Optional instance to populate.
     * @return {module:model/SwapSprintRequest} The populated <code>SwapSprintRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SwapSprintRequest();

            if (data.hasOwnProperty('sprintToSwapWith')) {
                obj['sprintToSwapWith'] = ApiClient.convertToType(data['sprintToSwapWith'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SwapSprintRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SwapSprintRequest</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Number} sprintToSwapWith
 */
SwapSprintRequest.prototype['sprintToSwapWith'] = undefined;






export default SwapSprintRequest;

