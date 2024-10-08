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
import DeploymentData from './DeploymentData';
import ProviderMetadata2 from './ProviderMetadata2';

/**
 * The SubmitDeploymentRequest model module.
 * @module model/SubmitDeploymentRequest
 * @version 1001.0.0
 */
class SubmitDeploymentRequest {
    /**
     * Constructs a new <code>SubmitDeploymentRequest</code>.
     * The payload used to submit (update / insert) deployment data.
     * @alias module:model/SubmitDeploymentRequest
     * @param deployments {Array.<module:model/DeploymentData>} A list of deployments to submit to Jira.  Each deployment may be associated with one or more Jira issue keys, and will be associated with any properties included in this request. 
     */
    constructor(deployments) { 
        
        SubmitDeploymentRequest.initialize(this, deployments);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, deployments) { 
        obj['deployments'] = deployments;
    }

    /**
     * Constructs a <code>SubmitDeploymentRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubmitDeploymentRequest} obj Optional instance to populate.
     * @return {module:model/SubmitDeploymentRequest} The populated <code>SubmitDeploymentRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubmitDeploymentRequest();

            if (data.hasOwnProperty('properties')) {
                obj['properties'] = ApiClient.convertToType(data['properties'], {'String': 'String'});
            }
            if (data.hasOwnProperty('deployments')) {
                obj['deployments'] = ApiClient.convertToType(data['deployments'], [DeploymentData]);
            }
            if (data.hasOwnProperty('providerMetadata')) {
                obj['providerMetadata'] = ProviderMetadata2.constructFromObject(data['providerMetadata']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SubmitDeploymentRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SubmitDeploymentRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SubmitDeploymentRequest.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['deployments']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['deployments'])) {
                throw new Error("Expected the field `deployments` to be an array in the JSON data but got " + data['deployments']);
            }
            // validate the optional field `deployments` (array)
            for (const item of data['deployments']) {
                DeploymentData.validateJSON(item);
            };
        }
        // validate the optional field `providerMetadata`
        if (data['providerMetadata']) { // data not null
          ProviderMetadata2.validateJSON(data['providerMetadata']);
        }

        return true;
    }


}

SubmitDeploymentRequest.RequiredProperties = ["deployments"];

/**
 * Properties assigned to deployment data that can then be used for delete / query operations.  Examples might be an account or user ID that can then be used to clean up data if an account is removed from the Provider system.  Properties are supplied as key/value pairs, and a maximum of 5 properties can be supplied, keys cannot contain ':' or start with '_'. 
 * @member {Object.<String, String>} properties
 */
SubmitDeploymentRequest.prototype['properties'] = undefined;

/**
 * A list of deployments to submit to Jira.  Each deployment may be associated with one or more Jira issue keys, and will be associated with any properties included in this request. 
 * @member {Array.<module:model/DeploymentData>} deployments
 */
SubmitDeploymentRequest.prototype['deployments'] = undefined;

/**
 * @member {module:model/ProviderMetadata2} providerMetadata
 */
SubmitDeploymentRequest.prototype['providerMetadata'] = undefined;






export default SubmitDeploymentRequest;

