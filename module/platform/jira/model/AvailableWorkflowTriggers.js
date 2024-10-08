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
import AvailableWorkflowTriggerTypes from './AvailableWorkflowTriggerTypes';

/**
 * The AvailableWorkflowTriggers model module.
 * @module model/AvailableWorkflowTriggers
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class AvailableWorkflowTriggers {
    /**
     * Constructs a new <code>AvailableWorkflowTriggers</code>.
     * The trigger rules available.
     * @alias module:model/AvailableWorkflowTriggers
     * @param availableTypes {Array.<module:model/AvailableWorkflowTriggerTypes>} The list of available trigger types.
     * @param ruleKey {String} The rule key of the rule.
     */
    constructor(availableTypes, ruleKey) { 
        
        AvailableWorkflowTriggers.initialize(this, availableTypes, ruleKey);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, availableTypes, ruleKey) { 
        obj['availableTypes'] = availableTypes;
        obj['ruleKey'] = ruleKey;
    }

    /**
     * Constructs a <code>AvailableWorkflowTriggers</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AvailableWorkflowTriggers} obj Optional instance to populate.
     * @return {module:model/AvailableWorkflowTriggers} The populated <code>AvailableWorkflowTriggers</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AvailableWorkflowTriggers();

            if (data.hasOwnProperty('availableTypes')) {
                obj['availableTypes'] = ApiClient.convertToType(data['availableTypes'], [AvailableWorkflowTriggerTypes]);
            }
            if (data.hasOwnProperty('ruleKey')) {
                obj['ruleKey'] = ApiClient.convertToType(data['ruleKey'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AvailableWorkflowTriggers</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AvailableWorkflowTriggers</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of AvailableWorkflowTriggers.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['availableTypes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['availableTypes'])) {
                throw new Error("Expected the field `availableTypes` to be an array in the JSON data but got " + data['availableTypes']);
            }
            // validate the optional field `availableTypes` (array)
            for (const item of data['availableTypes']) {
                AvailableWorkflowTriggerTypes.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['ruleKey'] && !(typeof data['ruleKey'] === 'string' || data['ruleKey'] instanceof String)) {
            throw new Error("Expected the field `ruleKey` to be a primitive type in the JSON string but got " + data['ruleKey']);
        }

        return true;
    }


}

AvailableWorkflowTriggers.RequiredProperties = ["availableTypes", "ruleKey"];

/**
 * The list of available trigger types.
 * @member {Array.<module:model/AvailableWorkflowTriggerTypes>} availableTypes
 */
AvailableWorkflowTriggers.prototype['availableTypes'] = undefined;

/**
 * The rule key of the rule.
 * @member {String} ruleKey
 */
AvailableWorkflowTriggers.prototype['ruleKey'] = undefined;






export default AvailableWorkflowTriggers;

