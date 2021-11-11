'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  find: async ctx => {
    if (ctx.query.slug) {
      return strapi.query('pages').find(ctx.query, ['cards.list_items']);
    } else {
      return strapi.query('pages').find(ctx.query, ['id']);
    }
  }
};
