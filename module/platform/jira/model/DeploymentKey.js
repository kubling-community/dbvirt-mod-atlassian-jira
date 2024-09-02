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
 * The DeploymentKey model module.
 * @module model/DeploymentKey
 * @version 1001.0.0
 */
class DeploymentKey {
    /**
     * Constructs a new <code>DeploymentKey</code>.
     * Fields that uniquely reference a deployment. 
     * @alias module:model/DeploymentKey
     * @param pipelineId {String} The identifier of a pipeline, must be unique for the provider. 
     * @param environmentId {String} The identifier of an environment, must be unique for the provider so that it can be shared across pipelines. 
     * @param deploymentSequenceNumber {Number} This is the identifier for the deployment. It must be unique for the specified pipeline and environment. It must be a monotonically increasing number, as this is used to sequence the deployments. 
     */
    constructor(pipelineId, environmentId, deploymentSequenceNumber) { 
        
        DeploymentKey.initialize(this, pipelineId, environmentId, deploymentSequenceNumber);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pipelineId, environmentId, deploymentSequenceNumber) { 
        obj['pipelineId'] = pipelineId;
        obj['environmentId'] = environmentId;
        obj['deploymentSequenceNumber'] = deploymentSequenceNumber;
    }

    /**
     * Constructs a <code>DeploymentKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeploymentKey} obj Optional instance to populate.
     * @return {module:model/DeploymentKey} The populated <code>DeploymentKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeploymentKey();

            if (data.hasOwnProperty('pipelineId')) {
                obj['pipelineId'] = ApiClient.convertToType(data['pipelineId'], 'String');
            }
            if (data.hasOwnProperty('environmentId')) {
                obj['environmentId'] = ApiClient.convertToType(data['environmentId'], 'String');
            }
            if (data.hasOwnProperty('deploymentSequenceNumber')) {
                obj['deploymentSequenceNumber'] = ApiClient.convertToType(data['deploymentSequenceNumber'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeploymentKey</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeploymentKey</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DeploymentKey.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['pipelineId'] && !(typeof data['pipelineId'] === 'string' || data['pipelineId'] instanceof String)) {
            throw new Error("Expected the field `pipelineId` to be a primitive type in the JSON string but got " + data['pipelineId']);
        }
        // ensure the json data is a string
        if (data['environmentId'] && !(typeof data['environmentId'] === 'string' || data['environmentId'] instanceof String)) {
            throw new Error("Expected the field `environmentId` to be a primitive type in the JSON string but got " + data['environmentId']);
        }

        return true;
    }


}

DeploymentKey.RequiredProperties = ["pipelineId", "environmentId", "deploymentSequenceNumber"];

/**
 * The identifier of a pipeline, must be unique for the provider. 
 * @member {String} pipelineId
 */
DeploymentKey.prototype['pipelineId'] = undefined;

/**
 * The identifier of an environment, must be unique for the provider so that it can be shared across pipelines. 
 * @member {String} environmentId
 */
DeploymentKey.prototype['environmentId'] = undefined;

/**
 * This is the identifier for the deployment. It must be unique for the specified pipeline and environment. It must be a monotonically increasing number, as this is used to sequence the deployments. 
 * @member {Number} deploymentSequenceNumber
 */
DeploymentKey.prototype['deploymentSequenceNumber'] = undefined;






export default DeploymentKey;

