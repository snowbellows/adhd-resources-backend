'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
   /** 
   * Retrieve Record
   * 
   * Overrides findOne to retrieve record by slug instead of id
   * 
   * @retrun {Object}
   */

     async findOne(ctx) {
      const { slug } = ctx.params;
  
      const entity = await strapi.services.page.findOne({ slug });
      return sanitizeEntity(entity, { model: strapi.models.page });
    },
};
