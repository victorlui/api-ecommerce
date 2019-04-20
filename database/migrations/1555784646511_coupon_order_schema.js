'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CouponOrderSchema extends Schema {
  up () {
    this.create('coupon_order', (table) => {
      table.increments()
      table.integer('coupon_id')
      .unsigned()
      .references('id')
      .inTable('coupons')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.integer('order_id')
      .unsigned()
      .references('id')
      .inTable('orders')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.decimal('discount',12,2).default(0.0)
      table.timestamps()
    })
  }

  down () {
    this.drop('coupon_order')
  }
}

module.exports = CouponOrderSchema
