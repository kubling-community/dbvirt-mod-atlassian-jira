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
import WorkflowCompoundCondition from './WorkflowCompoundCondition';
import WorkflowSimpleCondition from './WorkflowSimpleCondition';

/**
 * The WorkflowCondition model module.
 * @module model/WorkflowCondition
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class WorkflowCondition {
    /**
     * Constructs a new <code>WorkflowCondition</code>.
     * The workflow transition rule conditions tree.
     * @alias module:model/WorkflowCondition
     * @param {(module:model/WorkflowCompoundCondition|module:model/WorkflowSimpleCondition)} instance The actual instance to initialize WorkflowCondition.
     */
    constructor(instance = null) {
        if (instance === null) {
            this.actualInstance = null;
            return;
        }
        var match = 0;
        var errorMessages = [];
        try {
            if (typeof instance === "WorkflowSimpleCondition") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                WorkflowSimpleCondition.validateJSON(instance); // throw an exception if no match
                // create WorkflowSimpleCondition from JS object
                this.actualInstance = WorkflowSimpleCondition.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into WorkflowSimpleCondition
            errorMessages.push("Failed to construct WorkflowSimpleCondition: " + err)
        }

        try {
            if (typeof instance === "WorkflowCompoundCondition") {
                this.actualInstance = instance;
            } else {
                // plain JS object
                // validate the object
                WorkflowCompoundCondition.validateJSON(instance); // throw an exception if no match
                // create WorkflowCompoundCondition from JS object
                this.actualInstance = WorkflowCompoundCondition.constructFromObject(instance);
            }
            match++;
        } catch(err) {
            // json data failed to deserialize into WorkflowCompoundCondition
            errorMessages.push("Failed to construct WorkflowCompoundCondition: " + err)
        }

        if (match > 1) {
            throw new Error("Multiple matches found constructing `WorkflowCondition` with oneOf schemas WorkflowCompoundCondition, WorkflowSimpleCondition. Input: " + JSON.stringify(instance));
        } else if (match === 0) {
            this.actualInstance = null; // clear the actual instance in case there are multiple matches
            throw new Error("No match found constructing `WorkflowCondition` with oneOf schemas WorkflowCompoundCondition, WorkflowSimpleCondition. Details: " +
                            errorMessages.join(", "));
        } else { // only 1 match
            // the input is valid
        }
    }

    /**
     * Constructs a <code>WorkflowCondition</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WorkflowCondition} obj Optional instance to populate.
     * @return {module:model/WorkflowCondition} The populated <code>WorkflowCondition</code> instance.
     */
    static constructFromObject(data, obj) {
        return new WorkflowCondition(data);
    }

    /**
     * Gets the actual instance, which can be <code>WorkflowCompoundCondition</code>, <code>WorkflowSimpleCondition</code>.
     * @return {(module:model/WorkflowCompoundCondition|module:model/WorkflowSimpleCondition)} The actual instance.
     */
    getActualInstance() {
        return this.actualInstance;
    }

    /**
     * Sets the actual instance, which can be <code>WorkflowCompoundCondition</code>, <code>WorkflowSimpleCondition</code>.
     * @param {(module:model/WorkflowCompoundCondition|module:model/WorkflowSimpleCondition)} obj The actual instance.
     */
    setActualInstance(obj) {
       this.actualInstance = WorkflowCondition.constructFromObject(obj).getActualInstance();
    }

    /**
     * Returns the JSON representation of the actual instance.
     * @return {string}
     */
    toJSON = function(){
        return this.getActualInstance();
    }

    /**
     * Create an instance of WorkflowCondition from a JSON string.
     * @param {string} json_string JSON string.
     * @return {module:model/WorkflowCondition} An instance of WorkflowCondition.
     */
    static fromJSON = function(json_string){
        return WorkflowCondition.constructFromObject(JSON.parse(json_string));
    }
}

/**
 * EXPERIMENTAL. The configuration of the transition rule.
 * @member {Object} configuration
 */
WorkflowCondition.prototype['configuration'] = undefined;

/**
 * @member {String} nodeType
 */
WorkflowCondition.prototype['nodeType'] = undefined;

/**
 * The type of the transition rule.
 * @member {String} type
 */
WorkflowCondition.prototype['type'] = undefined;

/**
 * The list of workflow conditions.
 * @member {Array.<module:model/WorkflowCondition>} conditions
 */
WorkflowCondition.prototype['conditions'] = undefined;

/**
 * The compound condition operator.
 * @member {module:model/WorkflowCondition.OperatorEnum} operator
 */
WorkflowCondition.prototype['operator'] = undefined;


WorkflowCondition.OneOf = ["WorkflowCompoundCondition", "WorkflowSimpleCondition"];

export default WorkflowCondition;

