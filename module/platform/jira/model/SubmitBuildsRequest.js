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
import BuildData from './BuildData';
import ProviderMetadata3 from './ProviderMetadata3';

/**
 * The SubmitBuildsRequest model module.
 * @module model/SubmitBuildsRequest
 * @version 1001.0.0
 */
class SubmitBuildsRequest {
    /**
     * Constructs a new <code>SubmitBuildsRequest</code>.
     * The payload used to submit (update / insert) build data.
     * @alias module:model/SubmitBuildsRequest
     * @param builds {Array.<module:model/BuildData>} A list of builds to submit to Jira.  Each build may be associated with one or more Jira issue keys, and will be associated with any properties included in this request. 
     */
    constructor(builds) { 
        
        SubmitBuildsRequest.initialize(this, builds);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, builds) { 
        obj['builds'] = builds;
    }

    /**
     * Constructs a <code>SubmitBuildsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubmitBuildsRequest} obj Optional instance to populate.
     * @return {module:model/SubmitBuildsRequest} The populated <code>SubmitBuildsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubmitBuildsRequest();

            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], {'String': 'String'});
            }
            if (data.hasOwnProperty('builds')) {
                obj['builds'] = ApiClient.convertToType(data['builds'], [BuildData]);
            }
            if (data.hasOwnProperty('providerMetadata')) {
                obj['providerMetadata'] = ProviderMetadata3.constructFromObject(data['providerMetadata']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SubmitBuildsRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SubmitBuildsRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SubmitBuildsRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['builds']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['builds'])) {
                throw new Error("Expected the field `builds` to be an array in the JSON data but got " + data['builds']);
            }
            // validate the optional field `builds` (array)
            for (const item of data['builds']) {
                BuildData.validateJSON(item);
            };
        }
        // validate the optional field `providerMetadata`
        if (data['providerMetadata']) { // data not null
          ProviderMetadata3.validateJSON(data['providerMetadata']);
        }

        return true;
    }


}

SubmitBuildsRequest.RequiredProperties = ["builds"];

/**
 * Properties assigned to build data that can then be used for delete / query operations.  Examples might be an account or user ID that can then be used to clean up data if an account is removed from the Provider system.  Note that these properties will never be returned with build data. They are not intended for use as metadata to associate with a build. Internally they are stored as a hash so that personal information etc. is never stored within Jira.  Properties are supplied as key/value pairs, a maximum of 5 properties can be supplied, and keys must not contain ':' or start with '_'. 
 * @member {Object.<String, String>} properties
 */
SubmitBuildsRequest.prototype['properties'] = undefined;

/**
 * A list of builds to submit to Jira.  Each build may be associated with one or more Jira issue keys, and will be associated with any properties included in this request. 
 * @member {Array.<module:model/BuildData>} builds
 */
SubmitBuildsRequest.prototype['builds'] = undefined;

/**
 * @member {module:model/ProviderMetadata3} providerMetadata
 */
SubmitBuildsRequest.prototype['providerMetadata'] = undefined;






export default SubmitBuildsRequest;

