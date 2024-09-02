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
import IssueBeanEditmetaAllOfFieldsValue from './IssueBeanEditmetaAllOfFieldsValue';
import IssueBeanTransitionsInnerTo from './IssueBeanTransitionsInnerTo';

/**
 * The IssueBeanTransitionsInner model module.
 * @module model/IssueBeanTransitionsInner
 * @version 1001.0.0
 */
class IssueBeanTransitionsInner {
    /**
     * Constructs a new <code>IssueBeanTransitionsInner</code>.
     * Details of an issue transition.
     * @alias module:model/IssueBeanTransitionsInner
     * @extends Object
     */
    constructor() { 
        
        IssueBeanTransitionsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IssueBeanTransitionsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueBeanTransitionsInner} obj Optional instance to populate.
     * @return {module:model/IssueBeanTransitionsInner} The populated <code>IssueBeanTransitionsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssueBeanTransitionsInner();

            ApiClient.constructFromObject(data, obj, 'Object');
            

            if (data.hasOwnProperty('expand')) {
                obj['expand'] = ApiClient.convertToType(data['expand'], 'String');
            }
            if (data.hasOwnProperty('fields')) {
                obj['fields'] = ApiClient.convertToType(data['fields'], {'String': IssueBeanEditmetaAllOfFieldsValue});
            }
            if (data.hasOwnProperty('hasScreen')) {
                obj['hasScreen'] = ApiClient.convertToType(data['hasScreen'], 'Boolean');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('isAvailable')) {
                obj['isAvailable'] = ApiClient.convertToType(data['isAvailable'], 'Boolean');
            }
            if (data.hasOwnProperty('isConditional')) {
                obj['isConditional'] = ApiClient.convertToType(data['isConditional'], 'Boolean');
            }
            if (data.hasOwnProperty('isGlobal')) {
                obj['isGlobal'] = ApiClient.convertToType(data['isGlobal'], 'Boolean');
            }
            if (data.hasOwnProperty('isInitial')) {
                obj['isInitial'] = ApiClient.convertToType(data['isInitial'], 'Boolean');
            }
            if (data.hasOwnProperty('looped')) {
                obj['looped'] = ApiClient.convertToType(data['looped'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('to')) {
                obj['to'] = IssueBeanTransitionsInnerTo.constructFromObject(data['to']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IssueBeanTransitionsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IssueBeanTransitionsInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['expand'] && !(typeof data['expand'] === 'string' || data['expand'] instanceof String)) {
            throw new Error("Expected the field `expand` to be a primitive type in the JSON string but got " + data['expand']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // validate the optional field `to`
        if (data['to']) { // data not null
          IssueBeanTransitionsInnerTo.validateJSON(data['to']);
        }

        return true;
    }


}



/**
 * Expand options that include additional transition details in the response.
 * @member {String} expand
 */
IssueBeanTransitionsInner.prototype['expand'] = undefined;

/**
 * Details of the fields associated with the issue transition screen. Use this information to populate `fields` and `update` in a transition request.
 * @member {Object.<String, module:model/IssueBeanEditmetaAllOfFieldsValue>} fields
 */
IssueBeanTransitionsInner.prototype['fields'] = undefined;

/**
 * Whether there is a screen associated with the issue transition.
 * @member {Boolean} hasScreen
 */
IssueBeanTransitionsInner.prototype['hasScreen'] = undefined;

/**
 * The ID of the issue transition. Required when specifying a transition to undertake.
 * @member {String} id
 */
IssueBeanTransitionsInner.prototype['id'] = undefined;

/**
 * Whether the transition is available to be performed.
 * @member {Boolean} isAvailable
 */
IssueBeanTransitionsInner.prototype['isAvailable'] = undefined;

/**
 * Whether the issue has to meet criteria before the issue transition is applied.
 * @member {Boolean} isConditional
 */
IssueBeanTransitionsInner.prototype['isConditional'] = undefined;

/**
 * Whether the issue transition is global, that is, the transition is applied to issues regardless of their status.
 * @member {Boolean} isGlobal
 */
IssueBeanTransitionsInner.prototype['isGlobal'] = undefined;

/**
 * Whether this is the initial issue transition for the workflow.
 * @member {Boolean} isInitial
 */
IssueBeanTransitionsInner.prototype['isInitial'] = undefined;

/**
 * @member {Boolean} looped
 */
IssueBeanTransitionsInner.prototype['looped'] = undefined;

/**
 * The name of the issue transition.
 * @member {String} name
 */
IssueBeanTransitionsInner.prototype['name'] = undefined;

/**
 * @member {module:model/IssueBeanTransitionsInnerTo} to
 */
IssueBeanTransitionsInner.prototype['to'] = undefined;






export default IssueBeanTransitionsInner;

