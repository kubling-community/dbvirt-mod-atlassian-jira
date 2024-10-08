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
import Review from './Review';

/**
 * The SubmitIncidentsRequestAnyOf1 model module.
 * @module model/SubmitIncidentsRequestAnyOf1
 * @version 1001.0.0
 */
class SubmitIncidentsRequestAnyOf1 {
    /**
     * Constructs a new <code>SubmitIncidentsRequestAnyOf1</code>.
     * @alias module:model/SubmitIncidentsRequestAnyOf1
     */
    constructor() { 
        
        SubmitIncidentsRequestAnyOf1.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SubmitIncidentsRequestAnyOf1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubmitIncidentsRequestAnyOf1} obj Optional instance to populate.
     * @return {module:model/SubmitIncidentsRequestAnyOf1} The populated <code>SubmitIncidentsRequestAnyOf1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubmitIncidentsRequestAnyOf1();

            if (data.hasOwnProperty('reviews')) {
                obj['reviews'] = ApiClient.convertToType(data['reviews'], [Review]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SubmitIncidentsRequestAnyOf1</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SubmitIncidentsRequestAnyOf1</code>.
     */
    static validateJSON(data) {
        if (data['reviews']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['reviews'])) {
                throw new Error("Expected the field `reviews` to be an array in the JSON data but got " + data['reviews']);
            }
            // validate the optional field `reviews` (array)
            for (const item of data['reviews']) {
                Review.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/Review>} reviews
 */
SubmitIncidentsRequestAnyOf1.prototype['reviews'] = undefined;






export default SubmitIncidentsRequestAnyOf1;

