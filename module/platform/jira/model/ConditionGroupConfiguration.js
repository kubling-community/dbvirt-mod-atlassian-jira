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
import WorkflowRuleConfiguration from './WorkflowRuleConfiguration';

/**
 * The ConditionGroupConfiguration model module.
 * @module model/ConditionGroupConfiguration
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class ConditionGroupConfiguration {
    /**
     * Constructs a new <code>ConditionGroupConfiguration</code>.
     * The conditions group associated with the transition.
     * @alias module:model/ConditionGroupConfiguration
     */
    constructor() { 
        
        ConditionGroupConfiguration.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ConditionGroupConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConditionGroupConfiguration} obj Optional instance to populate.
     * @return {module:model/ConditionGroupConfiguration} The populated <code>ConditionGroupConfiguration</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ConditionGroupConfiguration();

            if (data.hasOwnProperty('conditionGroups')) {
                obj['conditionGroups'] = ApiClient.convertToType(data['conditionGroups'], [ConditionGroupConfiguration]);
            }
            if (data.hasOwnProperty('conditions')) {
                obj['conditions'] = ApiClient.convertToType(data['conditions'], [WorkflowRuleConfiguration]);
            }
            if (data.hasOwnProperty('operation')) {
                obj['operation'] = ApiClient.convertToType(data['operation'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ConditionGroupConfiguration</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ConditionGroupConfiguration</code>.
     */
    static validateJSON(data) {
        if (data['conditionGroups']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['conditionGroups'])) {
                throw new Error("Expected the field `conditionGroups` to be an array in the JSON data but got " + data['conditionGroups']);
            }
            // validate the optional field `conditionGroups` (array)
            for (const item of data['conditionGroups']) {
                ConditionGroupConfiguration.validateJSON(item);
            };
        }
        if (data['conditions']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['conditions'])) {
                throw new Error("Expected the field `conditions` to be an array in the JSON data but got " + data['conditions']);
            }
            // validate the optional field `conditions` (array)
            for (const item of data['conditions']) {
                WorkflowRuleConfiguration.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['operation'] && !(typeof data['operation'] === 'string' || data['operation'] instanceof String)) {
            throw new Error("Expected the field `operation` to be a primitive type in the JSON string but got " + data['operation']);
        }

        return true;
    }


}



/**
 * The nested conditions of the condition group.
 * @member {Array.<module:model/ConditionGroupConfiguration>} conditionGroups
 */
ConditionGroupConfiguration.prototype['conditionGroups'] = undefined;

/**
 * The rules for this condition.
 * @member {Array.<module:model/WorkflowRuleConfiguration>} conditions
 */
ConditionGroupConfiguration.prototype['conditions'] = undefined;

/**
 * Determines how the conditions in the group are evaluated. Accepts either `ANY` or `ALL`. If `ANY` is used, at least one condition in the group must be true for the group to evaluate to true. If `ALL` is used, all conditions in the group must be true for the group to evaluate to true.
 * @member {module:model/ConditionGroupConfiguration.OperationEnum} operation
 */
ConditionGroupConfiguration.prototype['operation'] = undefined;





/**
 * Allowed values for the <code>operation</code> property.
 * @enum {String}
 * @readonly
 */
ConditionGroupConfiguration['OperationEnum'] = {

    /**
     * value: "ANY"
     * @const
     */
    "ANY": "ANY",

    /**
     * value: "ALL"
     * @const
     */
    "ALL": "ALL"
};



export default ConditionGroupConfiguration;

