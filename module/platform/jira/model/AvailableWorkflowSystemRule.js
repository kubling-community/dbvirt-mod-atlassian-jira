/**
 * The Jira Cloud platform REST API
 * Jira Cloud platform REST API documentation
 *
 * The version of the OpenAPI document: 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 * Contact: ecosystem@atlassian.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The AvailableWorkflowSystemRule model module.
 * @module model/AvailableWorkflowSystemRule
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class AvailableWorkflowSystemRule {
    /**
     * Constructs a new <code>AvailableWorkflowSystemRule</code>.
     * The Atlassian provided system rules available.
     * @alias module:model/AvailableWorkflowSystemRule
     * @param description {String} The rule description.
     * @param incompatibleRuleKeys {Array.<String>} List of rules that conflict with this one.
     * @param isAvailableForInitialTransition {Boolean} Whether the rule can be added added to an initial transition.
     * @param isVisible {Boolean} Whether the rule is visible.
     * @param name {String} The rule name.
     * @param ruleKey {String} The rule key.
     * @param ruleType {module:model/AvailableWorkflowSystemRule.RuleTypeEnum} The rule type.
     */
    constructor(description, incompatibleRuleKeys, isAvailableForInitialTransition, isVisible, name, ruleKey, ruleType) { 
        
        AvailableWorkflowSystemRule.initialize(this, description, incompatibleRuleKeys, isAvailableForInitialTransition, isVisible, name, ruleKey, ruleType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, description, incompatibleRuleKeys, isAvailableForInitialTransition, isVisible, name, ruleKey, ruleType) { 
        obj['description'] = description;
        obj['incompatibleRuleKeys'] = incompatibleRuleKeys;
        obj['isAvailableForInitialTransition'] = isAvailableForInitialTransition;
        obj['isVisible'] = isVisible;
        obj['name'] = name;
        obj['ruleKey'] = ruleKey;
        obj['ruleType'] = ruleType;
    }

    /**
     * Constructs a <code>AvailableWorkflowSystemRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AvailableWorkflowSystemRule} obj Optional instance to populate.
     * @return {module:model/AvailableWorkflowSystemRule} The populated <code>AvailableWorkflowSystemRule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AvailableWorkflowSystemRule();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('incompatibleRuleKeys')) {
                obj['incompatibleRuleKeys'] = ApiClient.convertToType(data['incompatibleRuleKeys'], ['String']);
            }
            if (data.hasOwnProperty('isAvailableForInitialTransition')) {
                obj['isAvailableForInitialTransition'] = ApiClient.convertToType(data['isAvailableForInitialTransition'], 'Boolean');
            }
            if (data.hasOwnProperty('isVisible')) {
                obj['isVisible'] = ApiClient.convertToType(data['isVisible'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('ruleKey')) {
                obj['ruleKey'] = ApiClient.convertToType(data['ruleKey'], 'String');
            }
            if (data.hasOwnProperty('ruleType')) {
                obj['ruleType'] = ApiClient.convertToType(data['ruleType'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AvailableWorkflowSystemRule</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AvailableWorkflowSystemRule</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AvailableWorkflowSystemRule.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['incompatibleRuleKeys'])) {
            throw new Error("Expected the field `incompatibleRuleKeys` to be an array in the JSON data but got " + data['incompatibleRuleKeys']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['ruleKey'] && !(typeof data['ruleKey'] === 'string' || data['ruleKey'] instanceof String)) {
            throw new Error("Expected the field `ruleKey` to be a primitive type in the JSON string but got " + data['ruleKey']);
        }
        // ensure the json data is a string
        if (data['ruleType'] && !(typeof data['ruleType'] === 'string' || data['ruleType'] instanceof String)) {
            throw new Error("Expected the field `ruleType` to be a primitive type in the JSON string but got " + data['ruleType']);
        }

        return true;
    }


}

AvailableWorkflowSystemRule.RequiredProperties = ["description", "incompatibleRuleKeys", "isAvailableForInitialTransition", "isVisible", "name", "ruleKey", "ruleType"];

/**
 * The rule description.
 * @member {String} description
 */
AvailableWorkflowSystemRule.prototype['description'] = undefined;

/**
 * List of rules that conflict with this one.
 * @member {Array.<String>} incompatibleRuleKeys
 */
AvailableWorkflowSystemRule.prototype['incompatibleRuleKeys'] = undefined;

/**
 * Whether the rule can be added added to an initial transition.
 * @member {Boolean} isAvailableForInitialTransition
 */
AvailableWorkflowSystemRule.prototype['isAvailableForInitialTransition'] = undefined;

/**
 * Whether the rule is visible.
 * @member {Boolean} isVisible
 */
AvailableWorkflowSystemRule.prototype['isVisible'] = undefined;

/**
 * The rule name.
 * @member {String} name
 */
AvailableWorkflowSystemRule.prototype['name'] = undefined;

/**
 * The rule key.
 * @member {String} ruleKey
 */
AvailableWorkflowSystemRule.prototype['ruleKey'] = undefined;

/**
 * The rule type.
 * @member {module:model/AvailableWorkflowSystemRule.RuleTypeEnum} ruleType
 */
AvailableWorkflowSystemRule.prototype['ruleType'] = undefined;





/**
 * Allowed values for the <code>ruleType</code> property.
 * @enum {String}
 * @readonly
 */
AvailableWorkflowSystemRule['RuleTypeEnum'] = {

    /**
     * value: "Condition"
     * @const
     */
    "Condition": "Condition",

    /**
     * value: "Validator"
     * @const
     */
    "Validator": "Validator",

    /**
     * value: "Function"
     * @const
     */
    "Function": "Function",

    /**
     * value: "Screen"
     * @const
     */
    "Screen": "Screen"
};



export default AvailableWorkflowSystemRule;

