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
 * The Identifier model module.
 * @module model/Identifier
 * @version 1001.0.0
 */
class Identifier {
    /**
     * Constructs a new <code>Identifier</code>.
     * The identifiers object that contains public/private information identifying the Vulnerability. 
     * @alias module:model/Identifier
     * @param displayName {String} The display name of the Vulnerability identified. 
     * @param url {String} A URL users can use to link to the definition of the Vulnerability identified. 
     */
    constructor(displayName, url) { 
        
        Identifier.initialize(this, displayName, url);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, displayName, url) { 
        obj['displayName'] = displayName;
        obj['url'] = url;
    }

    /**
     * Constructs a <code>Identifier</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Identifier} obj Optional instance to populate.
     * @return {module:model/Identifier} The populated <code>Identifier</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Identifier();

            if (data.hasOwnProperty('displayName')) {
                obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Identifier</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Identifier</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of Identifier.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['displayName'] && !(typeof data['displayName'] === 'string' || data['displayName'] instanceof String)) {
            throw new Error("Expected the field `displayName` to be a primitive type in the JSON string but got " + data['displayName']);
        }
        // ensure the json data is a string
        if (data['url'] && !(typeof data['url'] === 'string' || data['url'] instanceof String)) {
            throw new Error("Expected the field `url` to be a primitive type in the JSON string but got " + data['url']);
        }

        return true;
    }


}

Identifier.RequiredProperties = ["displayName", "url"];

/**
 * The display name of the Vulnerability identified. 
 * @member {String} displayName
 */
Identifier.prototype['displayName'] = undefined;

/**
 * A URL users can use to link to the definition of the Vulnerability identified. 
 * @member {String} url
 */
Identifier.prototype['url'] = undefined;






export default Identifier;

