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
 * The FeatureFlagRollout model module.
 * @module model/FeatureFlagRollout
 * @version 1001.0.0
 */
class FeatureFlagRollout {
    /**
     * Constructs a new <code>FeatureFlagRollout</code>.
     * Information about the rollout of a Feature Flag in an environment (or in summary).  Only one of &#39;percentage&#39;, &#39;text&#39;, or &#39;rules&#39; should be provided. They will be used in that order if multiple are present.  This information may be presented to the user in the UI. 
     * @alias module:model/FeatureFlagRollout
     */
    constructor() { 
        
        FeatureFlagRollout.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>FeatureFlagRollout</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FeatureFlagRollout} obj Optional instance to populate.
     * @return {module:model/FeatureFlagRollout} The populated <code>FeatureFlagRollout</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FeatureFlagRollout();

            if (data.hasOwnProperty('percentage')) {
                obj['percentage'] = ApiClient.convertToType(data['percentage'], 'Number');
            }
            if (data.hasOwnProperty('text')) {
                obj['text'] = ApiClient.convertToType(data['text'], 'String');
            }
            if (data.hasOwnProperty('rules')) {
                obj['rules'] = ApiClient.convertToType(data['rules'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>FeatureFlagRollout</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>FeatureFlagRollout</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['text'] && !(typeof data['text'] === 'string' || data['text'] instanceof String)) {
            throw new Error("Expected the field `text` to be a primitive type in the JSON string but got " + data['text']);
        }

        return true;
    }


}



/**
 * If the Feature Flag rollout is a simple percentage rollout 
 * @member {Number} percentage
 */
FeatureFlagRollout.prototype['percentage'] = undefined;

/**
 * A text status to display that represents the rollout. This could be e.g. a named cohort. 
 * @member {String} text
 */
FeatureFlagRollout.prototype['text'] = undefined;

/**
 * A count of the number of rules active for this Feature Flag in an environment. 
 * @member {Number} rules
 */
FeatureFlagRollout.prototype['rules'] = undefined;






export default FeatureFlagRollout;

