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
import FeatureFlagData from './FeatureFlagData';
import ProviderMetadata1 from './ProviderMetadata1';

/**
 * The SubmitFeatureFlagRequest model module.
 * @module model/SubmitFeatureFlagRequest
 * @version 1001.0.0
 */
class SubmitFeatureFlagRequest {
    /**
     * Constructs a new <code>SubmitFeatureFlagRequest</code>.
     * The payload used to submit (update / insert) Feature Flag data.
     * @alias module:model/SubmitFeatureFlagRequest
     * @param flags {Array.<module:model/FeatureFlagData>} A list of Feature Flags to submit to Jira.  Each Feature Flag may be associated with 1 or more Jira issue keys, and will be associated with any properties included in this request. 
     */
    constructor(flags) { 
        
        SubmitFeatureFlagRequest.initialize(this, flags);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, flags) { 
        obj['flags'] = flags;
    }

    /**
     * Constructs a <code>SubmitFeatureFlagRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubmitFeatureFlagRequest} obj Optional instance to populate.
     * @return {module:model/SubmitFeatureFlagRequest} The populated <code>SubmitFeatureFlagRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubmitFeatureFlagRequest();

            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], {'String': 'String'});
            }
            if (data.hasOwnProperty('flags')) {
                obj['flags'] = ApiClient.convertToType(data['flags'], [FeatureFlagData]);
            }
            if (data.hasOwnProperty('providerMetadata')) {
                obj['providerMetadata'] = ProviderMetadata1.constructFromObject(data['providerMetadata']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SubmitFeatureFlagRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SubmitFeatureFlagRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SubmitFeatureFlagRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['flags']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['flags'])) {
                throw new Error("Expected the field `flags` to be an array in the JSON data but got " + data['flags']);
            }
            // validate the optional field `flags` (array)
            for (const item of data['flags']) {
                FeatureFlagData.validateJSON(item);
            };
        }
        // validate the optional field `providerMetadata`
        if (data['providerMetadata']) { // data not null
          ProviderMetadata1.validateJSON(data['providerMetadata']);
        }

        return true;
    }


}

SubmitFeatureFlagRequest.RequiredProperties = ["flags"];

/**
 * Properties assigned to Feature Flag data that can then be used for delete / query operations.  Examples might be an account or user ID that can then be used to clean up data if an account is removed from the Provider system.  Note that these properties will never be returned with Feature Flag data. They are not intended for use as metadata to associate with a Feature Flag. Internally they are stored as a hash so that personal information etc. is never stored within Jira.  Properties are supplied as key/value pairs, a maximum of 5 properties can be supplied, and keys must not contain ':' or start with '_'. 
 * @member {Object.<String, String>} properties
 */
SubmitFeatureFlagRequest.prototype['properties'] = undefined;

/**
 * A list of Feature Flags to submit to Jira.  Each Feature Flag may be associated with 1 or more Jira issue keys, and will be associated with any properties included in this request. 
 * @member {Array.<module:model/FeatureFlagData>} flags
 */
SubmitFeatureFlagRequest.prototype['flags'] = undefined;

/**
 * @member {module:model/ProviderMetadata1} providerMetadata
 */
SubmitFeatureFlagRequest.prototype['providerMetadata'] = undefined;






export default SubmitFeatureFlagRequest;

