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
import ProviderMetadata4 from './ProviderMetadata4';
import RemoteLinkData from './RemoteLinkData';

/**
 * The SubmitRemoteLinksRequest model module.
 * @module model/SubmitRemoteLinksRequest
 * @version 1001.0.0
 */
class SubmitRemoteLinksRequest {
    /**
     * Constructs a new <code>SubmitRemoteLinksRequest</code>.
     * The payload used to submit (update / insert) Remote Link data.
     * @alias module:model/SubmitRemoteLinksRequest
     * @param remoteLinks {Array.<module:model/RemoteLinkData>} A list of Remote Links to submit to Jira.  Each Remote Link may be associated with one or more Jira issue keys, and will be associated with any properties included in this request. 
     */
    constructor(remoteLinks) { 
        
        SubmitRemoteLinksRequest.initialize(this, remoteLinks);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, remoteLinks) { 
        obj['remoteLinks'] = remoteLinks;
    }

    /**
     * Constructs a <code>SubmitRemoteLinksRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubmitRemoteLinksRequest} obj Optional instance to populate.
     * @return {module:model/SubmitRemoteLinksRequest} The populated <code>SubmitRemoteLinksRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubmitRemoteLinksRequest();

            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], {'String': 'String'});
            }
            if (data.hasOwnProperty('remoteLinks')) {
                obj['remoteLinks'] = ApiClient.convertToType(data['remoteLinks'], [RemoteLinkData]);
            }
            if (data.hasOwnProperty('providerMetadata')) {
                obj['providerMetadata'] = ProviderMetadata4.constructFromObject(data['providerMetadata']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SubmitRemoteLinksRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SubmitRemoteLinksRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SubmitRemoteLinksRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['remoteLinks']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['remoteLinks'])) {
                throw new Error("Expected the field `remoteLinks` to be an array in the JSON data but got " + data['remoteLinks']);
            }
            // validate the optional field `remoteLinks` (array)
            for (const item of data['remoteLinks']) {
                RemoteLinkData.validateJSON(item);
            };
        }
        // validate the optional field `providerMetadata`
        if (data['providerMetadata']) { // data not null
          ProviderMetadata4.validateJSON(data['providerMetadata']);
        }

        return true;
    }


}

SubmitRemoteLinksRequest.RequiredProperties = ["remoteLinks"];

/**
 * Properties assigned to Remote Link data that can then be used for delete / query operations.  Examples might be an account or user ID that can then be used to clean up data if an account is removed from the Provider system.  Properties are supplied as key/value pairs, a maximum of 5 properties can be supplied, and keys must not contain ':' or start with '_'. 
 * @member {Object.<String, String>} properties
 */
SubmitRemoteLinksRequest.prototype['properties'] = undefined;

/**
 * A list of Remote Links to submit to Jira.  Each Remote Link may be associated with one or more Jira issue keys, and will be associated with any properties included in this request. 
 * @member {Array.<module:model/RemoteLinkData>} remoteLinks
 */
SubmitRemoteLinksRequest.prototype['remoteLinks'] = undefined;

/**
 * @member {module:model/ProviderMetadata4} providerMetadata
 */
SubmitRemoteLinksRequest.prototype['providerMetadata'] = undefined;






export default SubmitRemoteLinksRequest;

