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
 * The SubmitDeploymentsResponse1DetailsInner model module.
 * @module model/SubmitDeploymentsResponse1DetailsInner
 * @version 1001.0.0
 */
class SubmitDeploymentsResponse1DetailsInner {
    /**
     * Constructs a new <code>SubmitDeploymentsResponse1DetailsInner</code>.
     * Details related to the gating status 
     * @alias module:model/SubmitDeploymentsResponse1DetailsInner
     * @param type {module:model/SubmitDeploymentsResponse1DetailsInner.TypeEnum} The type of the gating status details. 
     * @param issueKey {String} An issue key that references an issue in Jira. 
     * @param issueLink {String} A full HTTPS link to the Jira issue for the change request gating this Deployment. This field is provided if the details type is issue. 
     */
    constructor(type, issueKey, issueLink) { 
        
        SubmitDeploymentsResponse1DetailsInner.initialize(this, type, issueKey, issueLink);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, type, issueKey, issueLink) { 
        obj['type'] = type;
        obj['issueKey'] = issueKey;
        obj['issueLink'] = issueLink;
    }

    /**
     * Constructs a <code>SubmitDeploymentsResponse1DetailsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubmitDeploymentsResponse1DetailsInner} obj Optional instance to populate.
     * @return {module:model/SubmitDeploymentsResponse1DetailsInner} The populated <code>SubmitDeploymentsResponse1DetailsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SubmitDeploymentsResponse1DetailsInner();

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('issueKey')) {
                obj['issueKey'] = ApiClient.convertToType(data['issueKey'], 'String');
            }
            if (data.hasOwnProperty('issueLink')) {
                obj['issueLink'] = ApiClient.convertToType(data['issueLink'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SubmitDeploymentsResponse1DetailsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SubmitDeploymentsResponse1DetailsInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SubmitDeploymentsResponse1DetailsInner.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['issueKey'] && !(typeof data['issueKey'] === 'string' || data['issueKey'] instanceof String)) {
            throw new Error("Expected the field `issueKey` to be a primitive type in the JSON string but got " + data['issueKey']);
        }
        // ensure the json data is a string
        if (data['issueLink'] && !(typeof data['issueLink'] === 'string' || data['issueLink'] instanceof String)) {
            throw new Error("Expected the field `issueLink` to be a primitive type in the JSON string but got " + data['issueLink']);
        }

        return true;
    }


}

SubmitDeploymentsResponse1DetailsInner.RequiredProperties = ["type", "issueKey", "issueLink"];

/**
 * The type of the gating status details. 
 * @member {module:model/SubmitDeploymentsResponse1DetailsInner.TypeEnum} type
 */
SubmitDeploymentsResponse1DetailsInner.prototype['type'] = undefined;

/**
 * An issue key that references an issue in Jira. 
 * @member {String} issueKey
 */
SubmitDeploymentsResponse1DetailsInner.prototype['issueKey'] = undefined;

/**
 * A full HTTPS link to the Jira issue for the change request gating this Deployment. This field is provided if the details type is issue. 
 * @member {String} issueLink
 */
SubmitDeploymentsResponse1DetailsInner.prototype['issueLink'] = undefined;





/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
SubmitDeploymentsResponse1DetailsInner['TypeEnum'] = {

    /**
     * value: "issue"
     * @const
     */
    "issue": "issue"
};



export default SubmitDeploymentsResponse1DetailsInner;

