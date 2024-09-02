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
 * The ProviderMetadata3 model module.
 * @module model/ProviderMetadata3
 * @version 1001.0.0
 */
class ProviderMetadata3 {
    /**
     * Constructs a new <code>ProviderMetadata3</code>.
     * Information about the provider. This is useful for auditing, logging, debugging, and other internal uses. It is not considered private information. Hence, it may not contain personally identifiable information. 
     * @alias module:model/ProviderMetadata3
     */
    constructor() { 
        
        ProviderMetadata3.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProviderMetadata3</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProviderMetadata3} obj Optional instance to populate.
     * @return {module:model/ProviderMetadata3} The populated <code>ProviderMetadata3</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProviderMetadata3();

            if (data.hasOwnProperty('product')) {
                obj['product'] = ApiClient.convertToType(data['product'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProviderMetadata3</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProviderMetadata3</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['product'] && !(typeof data['product'] === 'string' || data['product'] instanceof String)) {
            throw new Error("Expected the field `product` to be a primitive type in the JSON string but got " + data['product']);
        }

        return true;
    }


}



/**
 * An optional name of the source of the builds data.
 * @member {String} product
 */
ProviderMetadata3.prototype['product'] = undefined;






export default ProviderMetadata3;

