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
 * The SubmitFeatureFlagsResponse model module.
 * @module model/SubmitFeatureFlagsResponse
 * @version 1001.0.0
 */
class SubmitFeatureFlagsResponse {
    /**
     * Constructs a new <code>SubmitFeatureFlagsResponse</code>.
     * The result of a successful submitFeatureFlags request. 
     * @alias module:model/SubmitFeatureFlagsResponse
     */
    constructor() { 
        
        SubmitFeatureFlagsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SubmitFeatureFlagsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubmitFeatureFlagsResponse} obj Optional instance to populate.
     * @return {module:model/SubmitFeatureFlagsResponse} The populated <code>SubmitFeatureFlagsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubmitFeatureFlagsResponse();

            if (data.hasOwnProperty('acceptedFeatureFlags')) {
                obj['acceptedFeatureFlags'] = ApiClient.convertToType(data['acceptedFeatureFlags'], ['String']);
            }
            if (data.hasOwnProperty('failedFeatureFlags')) {
                obj['failedFeatureFlags'] = ApiClient.convertToType(data['failedFeatureFlags'], {'String': [ErrorMessage1]});
            }
            if (data.hasOwnProperty('unknownIssueKeys')) {
                obj['unknownIssueKeys'] = ApiClient.convertToType(data['unknownIssueKeys'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SubmitFeatureFlagsResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SubmitFeatureFlagsResponse</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['acceptedFeatureFlags'])) {
            throw new Error("Expected the field `acceptedFeatureFlags` to be an array in the JSON data but got " + data['acceptedFeatureFlags']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['unknownIssueKeys'])) {
            throw new Error("Expected the field `unknownIssueKeys` to be an array in the JSON data but got " + data['unknownIssueKeys']);
        }

        return true;
    }


}



/**
 * The IDs of Feature Flags that have been accepted for submission.  A Feature Flag may be rejected if it was only associated with unknown issue keys.  Note that a Feature Flag that isn't updated due to it's updateSequenceId being out of order is not considered a failed submission. 
 * @member {Array.<String>} acceptedFeatureFlags
 */
SubmitFeatureFlagsResponse.prototype['acceptedFeatureFlags'] = undefined;

/**
 * Details of Feature Flags that have not been accepted for submission, usually due to a problem with the request data.  The object (if present) will be keyed by Feature Flag ID and include any errors associated with that Feature Flag that have prevented it being submitted. 
 * @member {Object.<String, Array.<module:model/ErrorMessage1>>} failedFeatureFlags
 */
SubmitFeatureFlagsResponse.prototype['failedFeatureFlags'] = undefined;

/**
 * Issue keys that are not known on this Jira instance (if any).   These may be invalid keys (e.g. `UTF-8` is sometimes incorrectly identified as a Jira issue key), or they may be for projects that no longer exist.  If a Feature Flag has been associated with issue keys other than those in this array it will still be stored against those valid keys. If a Feature Flag was only associated with issue keys deemed to be invalid it won't be persisted. 
 * @member {Array.<String>} unknownIssueKeys
 */
SubmitFeatureFlagsResponse.prototype['unknownIssueKeys'] = undefined;






export default SubmitFeatureFlagsResponse;

