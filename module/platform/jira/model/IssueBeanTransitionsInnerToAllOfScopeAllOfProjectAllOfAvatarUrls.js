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
 * The IssueBeanTransitionsInnerToAllOfScopeAllOfProjectAllOfAvatarUrls model module.
 * @module model/IssueBeanTransitionsInnerToAllOfScopeAllOfProjectAllOfAvatarUrls
 * @version 1001.0.0
 */
class IssueBeanTransitionsInnerToAllOfScopeAllOfProjectAllOfAvatarUrls {
    /**
     * Constructs a new <code>IssueBeanTransitionsInnerToAllOfScopeAllOfProjectAllOfAvatarUrls</code>.
     * The URLs of the project&#39;s avatars.
     * @alias module:model/IssueBeanTransitionsInnerToAllOfScopeAllOfProjectAllOfAvatarUrls
     */
    constructor() { 
        
        IssueBeanTransitionsInnerToAllOfScopeAllOfProjectAllOfAvatarUrls.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>IssueBeanTransitionsInnerToAllOfScopeAllOfProjectAllOfAvatarUrls</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueBeanTransitionsInnerToAllOfScopeAllOfProjectAllOfAvatarUrls} obj Optional instance to populate.
     * @return {module:model/IssueBeanTransitionsInnerToAllOfScopeAllOfProjectAllOfAvatarUrls} The populated <code>IssueBeanTransitionsInnerToAllOfScopeAllOfProjectAllOfAvatarUrls</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IssueBeanTransitionsInnerToAllOfScopeAllOfProjectAllOfAvatarUrls();

            if (data.hasOwnProperty('16x16')) {
                obj['16x16'] = ApiClient.convertToType(data['16x16'], 'String');
            }
            if (data.hasOwnProperty('24x24')) {
                obj['24x24'] = ApiClient.convertToType(data['24x24'], 'String');
            }
            if (data.hasOwnProperty('32x32')) {
                obj['32x32'] = ApiClient.convertToType(data['32x32'], 'String');
            }
            if (data.hasOwnProperty('48x48')) {
                obj['48x48'] = ApiClient.convertToType(data['48x48'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>IssueBeanTransitionsInnerToAllOfScopeAllOfProjectAllOfAvatarUrls</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>IssueBeanTransitionsInnerToAllOfScopeAllOfProjectAllOfAvatarUrls</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['16x16'] && !(typeof data['16x16'] === 'string' || data['16x16'] instanceof String)) {
            throw new Error("Expected the field `16x16` to be a primitive type in the JSON string but got " + data['16x16']);
        }
        // ensure the json data is a string
        if (data['24x24'] && !(typeof data['24x24'] === 'string' || data['24x24'] instanceof String)) {
            throw new Error("Expected the field `24x24` to be a primitive type in the JSON string but got " + data['24x24']);
        }
        // ensure the json data is a string
        if (data['32x32'] && !(typeof data['32x32'] === 'string' || data['32x32'] instanceof String)) {
            throw new Error("Expected the field `32x32` to be a primitive type in the JSON string but got " + data['32x32']);
        }
        // ensure the json data is a string
        if (data['48x48'] && !(typeof data['48x48'] === 'string' || data['48x48'] instanceof String)) {
            throw new Error("Expected the field `48x48` to be a primitive type in the JSON string but got " + data['48x48']);
        }

        return true;
    }


}



/**
 * The URL of the item's 16x16 pixel avatar.
 * @member {String} 16x16
 */
IssueBeanTransitionsInnerToAllOfScopeAllOfProjectAllOfAvatarUrls.prototype['16x16'] = undefined;

/**
 * The URL of the item's 24x24 pixel avatar.
 * @member {String} 24x24
 */
IssueBeanTransitionsInnerToAllOfScopeAllOfProjectAllOfAvatarUrls.prototype['24x24'] = undefined;

/**
 * The URL of the item's 32x32 pixel avatar.
 * @member {String} 32x32
 */
IssueBeanTransitionsInnerToAllOfScopeAllOfProjectAllOfAvatarUrls.prototype['32x32'] = undefined;

/**
 * The URL of the item's 48x48 pixel avatar.
 * @member {String} 48x48
 */
IssueBeanTransitionsInnerToAllOfScopeAllOfProjectAllOfAvatarUrls.prototype['48x48'] = undefined;






export default IssueBeanTransitionsInnerToAllOfScopeAllOfProjectAllOfAvatarUrls;

