# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180429134946) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "admins", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_admins_on_email", unique: true
    t.index ["reset_password_token"], name: "index_admins_on_reset_password_token", unique: true
  end

  create_table "friendly_id_slugs", force: :cascade do |t|
    t.string "slug", null: false
    t.integer "sluggable_id", null: false
    t.string "sluggable_type", limit: 50
    t.string "scope"
    t.datetime "created_at"
    t.index ["slug", "sluggable_type", "scope"], name: "index_friendly_id_slugs_on_slug_and_sluggable_type_and_scope", unique: true
    t.index ["slug", "sluggable_type"], name: "index_friendly_id_slugs_on_slug_and_sluggable_type"
    t.index ["sluggable_id"], name: "index_friendly_id_slugs_on_sluggable_id"
    t.index ["sluggable_type"], name: "index_friendly_id_slugs_on_sluggable_type"
  end

  create_table "impressions", force: :cascade do |t|
    t.string "impressionable_type"
    t.integer "impressionable_id"
    t.integer "user_id"
    t.string "controller_name"
    t.string "action_name"
    t.string "view_name"
    t.string "request_hash"
    t.string "ip_address"
    t.string "session_hash"
    t.text "message"
    t.text "referrer"
    t.text "params"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["controller_name", "action_name", "ip_address"], name: "controlleraction_ip_index"
    t.index ["controller_name", "action_name", "request_hash"], name: "controlleraction_request_index"
    t.index ["controller_name", "action_name", "session_hash"], name: "controlleraction_session_index"
    t.index ["impressionable_type", "impressionable_id", "ip_address"], name: "poly_ip_index"
    t.index ["impressionable_type", "impressionable_id", "params"], name: "poly_params_request_index"
    t.index ["impressionable_type", "impressionable_id", "request_hash"], name: "poly_request_index"
    t.index ["impressionable_type", "impressionable_id", "session_hash"], name: "poly_session_index"
    t.index ["impressionable_type", "message", "impressionable_id"], name: "impressionable_type_message_index"
    t.index ["user_id"], name: "index_impressions_on_user_id"
  end

  create_table "member_permissions", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "permissions_list_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["permissions_list_id"], name: "index_member_permissions_on_permissions_list_id"
    t.index ["user_id"], name: "index_member_permissions_on_user_id"
  end

  create_table "pages", force: :cascade do |t|
    t.string "title"
    t.integer "position"
    t.text "content"
    t.bigint "product_id"
    t.integer "character_count"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "impressions_count", default: 0, null: false
    t.index ["position"], name: "index_pages_on_position"
    t.index ["product_id"], name: "index_pages_on_product_id"
    t.index ["title"], name: "index_pages_on_title"
  end

  create_table "permissions_lists", force: :cascade do |t|
    t.bigint "twitter_list_id"
    t.string "name"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["twitter_list_id"], name: "index_permissions_lists_on_twitter_list_id"
    t.index ["user_id"], name: "index_permissions_lists_on_user_id"
  end

  create_table "products", force: :cascade do |t|
    t.string "title"
    t.bigint "user_id"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "privacy_level", default: 1
    t.integer "character_count", default: 0, null: false
    t.integer "impressions_count"
    t.bigint "permissions_list_id"
    t.boolean "restricted", default: false
    t.index ["permissions_list_id"], name: "index_products_on_permissions_list_id"
    t.index ["privacy_level"], name: "index_products_on_privacy_level"
    t.index ["title"], name: "index_products_on_title"
    t.index ["user_id"], name: "index_products_on_user_id"
  end

  create_table "social_profiles", force: :cascade do |t|
    t.bigint "user_id"
    t.string "uid"
    t.string "provider"
    t.string "account_name"
    t.string "profile_image"
    t.string "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "description"
    t.index ["account_name"], name: "index_social_profiles_on_account_name"
    t.index ["provider"], name: "index_social_profiles_on_provider"
    t.index ["uid"], name: "index_social_profiles_on_uid"
    t.index ["user_id"], name: "index_social_profiles_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet "current_sign_in_ip"
    t.inet "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.integer "failed_attempts", default: 0, null: false
    t.string "unlock_token"
    t.datetime "locked_at"
    t.string "nickname"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "description"
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["nickname"], name: "index_users_on_nickname"
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["unlock_token"], name: "index_users_on_unlock_token", unique: true
  end

  add_foreign_key "member_permissions", "permissions_lists"
  add_foreign_key "member_permissions", "users"
  add_foreign_key "pages", "products"
  add_foreign_key "permissions_lists", "users"
  add_foreign_key "products", "permissions_lists"
  add_foreign_key "products", "users"
  add_foreign_key "social_profiles", "users"
end
