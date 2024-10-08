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
import Scope from './Scope';
import ScopeProject from './ScopeProject';

/**
 * The DeprecatedWorkflowScope model module.
 * @module model/DeprecatedWorkflowScope
 * @version 1001.0.0-SNAPSHOT-122db9bd6b089919e6465ce52fdce319d5a9dfb4
 */
class DeprecatedWorkflowScope {
    /**
     * Constructs a new <code>DeprecatedWorkflowScope</code>.
     * The scope where this workflow applies
     * @alias module:model/DeprecatedWorkflowScope
     * @implements module:model/Scope
     */
    constructor() { 
        Scope.initialize(this);
        DeprecatedWorkflowScope.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeprecatedWorkflowScope</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeprecatedWorkflowScope} obj Optional instance to populate.
     * @return {module:model/DeprecatedWorkflowScope} The populated <code>DeprecatedWorkflowScope</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeprecatedWorkflowScope();
            Scope.constructFromObject(data, obj);

            if (data.hasOwnProperty('project')) {
                obj['project'] = ScopeProject.constructFromObject(data['project']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DeprecatedWorkflowScope</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DeprecatedWorkflowScope</code>.
     */
    static validateJSON(data) {
        // validate the optional field `project`
        if (data['project']) { // data not null
          ScopeProject.validateJSON(data['project']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}



/**
 * @member {module:model/ScopeProject} project
 */
DeprecatedWorkflowScope.prototype['project'] = undefined;

/**
 * The type of scope.
 * @member {module:model/DeprecatedWorkflowScope.TypeEnum} type
 */
DeprecatedWorkflowScope.prototype['type'] = undefined;


// Implement Scope interface:
/**
 * @member {module:model/ScopeProject} project
 */
Scope.prototype['project'] = undefined;
/**
 * The type of scope.
 * @member {module:model/Scope.TypeEnum} type
 */
Scope.prototype['type'] = undefined;



/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
DeprecatedWorkflowScope['TypeEnum'] = {

    /**
     * value: "PROJECT"
     * @const
     */
    "PROJECT": "PROJECT",

    /**
     * value: "TEMPLATE"
     * @const
     */
    "TEMPLATE": "TEMPLATE"
};



export default DeprecatedWorkflowScope;

