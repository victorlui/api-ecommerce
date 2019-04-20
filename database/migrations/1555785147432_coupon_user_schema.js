'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CouponUserSchema extends Schema {
  up () {
    this.create('coupon_user', (table) => {
      table.increments()
      table.integer('coupon_id')
      .unsigned()
      .references('id')
      .inTable('coupons')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('coupon_user')
  }
}

module.exports = CouponUserSchema
