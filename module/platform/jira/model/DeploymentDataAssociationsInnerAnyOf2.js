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
import DeploymentDataAssociationsInnerAnyOf2ValuesInner from './DeploymentDataAssociationsInnerAnyOf2ValuesInner';

/**
 * The DeploymentDataAssociationsInnerAnyOf2 model module.
 * @module model/DeploymentDataAssociationsInnerAnyOf2
 * @version 1001.0.0
 */
class DeploymentDataAssociationsInnerAnyOf2 {
    /**
     * Constructs a new <code>DeploymentDataAssociationsInnerAnyOf2</code>.
     * An association type referencing another DevOps entity. Initially only commit entities are supported for this type of association. 
     * @alias module:model/DeploymentDataAssociationsInnerAnyOf2
     * @param associationType {module:model/DeploymentDataAssociationsInnerAnyOf2.AssociationTypeEnum} Defines the association type. Currently supported entities can be found in this field's value enums list. 
     * @param values {Array.<module:model/DeploymentDataAssociationsInnerAnyOf2ValuesInner>} The entity keys that represent the entities to be associated. The number of values counted across all associationTypes (issueKeys, issueIdOrKeys, serviceIdOrKeys, supported ATIs and entity associations) must not exceed a limit of 500. 
     */
    constructor(associationType, values) { 
        
        DeploymentDataAssociationsInnerAnyOf2.initialize(this, associationType, values);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, associationType, values) { 
        obj['associationType'] = associationType;
        obj['values'] = values;
    }

    /**
     * Constructs a <code>DeploymentDataAssociationsInnerAnyOf2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeploymentDataAssociationsInnerAnyOf2} obj Optional instance to populate.
     * @return {module:model/DeploymentDataAssociationsInnerAnyOf2} The populated <code>DeploymentDataAssociationsInnerAnyOf2</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeploymentDataAssociationsInnerAnyOf2();

            if (data.hasOwnProperty('associationType')) {
                obj['associationType'] = ApiClient.convertToType(data['associationType'], 'String');
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], [DeploymentDataAssociationsInnerAnyOf2ValuesInner]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeploymentDataAssociationsInnerAnyOf2</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeploymentDataAssociationsInnerAnyOf2</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DeploymentDataAssociationsInnerAnyOf2.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['associationType'] && !(typeof data['associationType'] === 'string' || data['associationType'] instanceof String)) {
            throw new Error("Expected the field `associationType` to be a primitive type in the JSON string but got " + data['associationType']);
        }
        if (data['values']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['values'])) {
                throw new Error("Expected the field `values` to be an array in the JSON data but got " + data['values']);
            }
            // validate the optional field `values` (array)
            for (const item of data['values']) {
                DeploymentDataAssociationsInnerAnyOf2ValuesInner.validateJSON(item);
            };
        }

        return true;
    }


}

DeploymentDataAssociationsInnerAnyOf2.RequiredProperties = ["associationType", "values"];

/**
 * Defines the association type. Currently supported entities can be found in this field's value enums list. 
 * @member {module:model/DeploymentDataAssociationsInnerAnyOf2.AssociationTypeEnum} associationType
 */
DeploymentDataAssociationsInnerAnyOf2.prototype['associationType'] = undefined;

/**
 * The entity keys that represent the entities to be associated. The number of values counted across all associationTypes (issueKeys, issueIdOrKeys, serviceIdOrKeys, supported ATIs and entity associations) must not exceed a limit of 500. 
 * @member {Array.<module:model/DeploymentDataAssociationsInnerAnyOf2ValuesInner>} values
 */
DeploymentDataAssociationsInnerAnyOf2.prototype['values'] = undefined;





/**
 * Allowed values for the <code>associationType</code> property.
 * @enum {String}
 * @readonly
 */
DeploymentDataAssociationsInnerAnyOf2['AssociationTypeEnum'] = {

    /**
     * value: "commit"
     * @const
     */
    "commit": "commit",

    /**
     * value: "repository"
     * @const
     */
    "repository": "repository"
};



export default DeploymentDataAssociationsInnerAnyOf2;

