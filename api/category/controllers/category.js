'use strict';

const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

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

    const entity = await strapi.services.category.findOne({ slug });
    return sanitizeEntity(entity, { model: strapi.models.category });
  },

  /** 
   * Retrieve Record with tips
   * 
   * Retrieves record by slug including related tips
   * 
   * @retrun {Object}
   */

  async findTips(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.services.category.findOne({ slug });
    const tips = entity.tips.map(entity => sanitizeEntity(entity, { model: strapi.models.tip }));
    const sanitizedEntity = sanitizeEntity(entity, { model: strapi.models.category });
    return {
      ...sanitizedEntity,
      tips
    }
  }
};
