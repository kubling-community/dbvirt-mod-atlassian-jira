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
 * The IssueIdOrKeysAssociation model module.
 * @module model/IssueIdOrKeysAssociation
 * @version 1001.0.0
 */
class IssueIdOrKeysAssociation {
    /**
     * Constructs a new <code>IssueIdOrKeysAssociation</code>.
     * An association type referencing Jira issue id or keys. 
     * @alias module:model/IssueIdOrKeysAssociation
     * @param associationType {module:model/IssueIdOrKeysAssociation.AssociationTypeEnum} Defines the association type. 
     * @param values {Array.<String>} The Jira issue id or keys to associate the Security information with.  The number of values counted across all associationTypes (issueIdOrKeys) must not exceed a limit of 500. 
     */
    constructor(associationType, values) { 
        
        IssueIdOrKeysAssociation.initialize(this, associationType, values);
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
     * Constructs a <code>IssueIdOrKeysAssociation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueIdOrKeysAssociation} obj Optional instance to populate.
     * @return {module:model/IssueIdOrKeysAssociation} The populated <code>IssueIdOrKeysAssociation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssueIdOrKeysAssociation();

            if (data.hasOwnProperty('associationType')) {
                obj['associationType'] = ApiClient.convertToType(data['associationType'], 'String');
            }
            if (data.hasOwnProperty('values')) {
                obj['values'] = ApiClient.convertToType(data['values'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IssueIdOrKeysAssociation</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IssueIdOrKeysAssociation</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of IssueIdOrKeysAssociation.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['associationType'] && !(typeof data['associationType'] === 'string' || data['associationType'] instanceof String)) {
            throw new Error("Expected the field `associationType` to be a primitive type in the JSON string but got " + data['associationType']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['values'])) {
            throw new Error("Expected the field `values` to be an array in the JSON data but got " + data['values']);
        }

        return true;
    }


}

IssueIdOrKeysAssociation.RequiredProperties = ["associationType", "values"];

/**
 * Defines the association type. 
 * @member {module:model/IssueIdOrKeysAssociation.AssociationTypeEnum} associationType
 */
IssueIdOrKeysAssociation.prototype['associationType'] = undefined;

/**
 * The Jira issue id or keys to associate the Security information with.  The number of values counted across all associationTypes (issueIdOrKeys) must not exceed a limit of 500. 
 * @member {Array.<String>} values
 */
IssueIdOrKeysAssociation.prototype['values'] = undefined;





/**
 * Allowed values for the <code>associationType</code> property.
 * @enum {String}
 * @readonly
 */
IssueIdOrKeysAssociation['AssociationTypeEnum'] = {

    /**
     * value: "issueIdOrKeys"
     * @const
     */
    "issueIdOrKeys": "issueIdOrKeys"
};



export default IssueIdOrKeysAssociation;

