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

ActiveRecord::Schema.define(version: 20160830000727) do

  create_table "data", force: :cascade do |t|
    t.integer  "year"
    t.string   "offense_level"
    t.string   "gender"
    t.string   "age_group"
    t.string   "race_or_ethnicity"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

  create_table "deaths", force: :cascade do |t|
    t.integer  "record_key_number"
    t.string   "reporting_agency"
    t.integer  "date_of_birth_mm"
    t.integer  "date_of_birth_dd"
    t.integer  "date_of_birth_yyyy"
    t.string   "race"
    t.string   "gender"
    t.string   "custody_status"
    t.integer  "date_of_death_yyyy"
    t.integer  "date_of_death_mm"
    t.integer  "date_of_death_dd"
    t.string   "custodial_responsibility_at_time"
    t.string   "location_where_cause_of_death_oc"
    t.string   "facility_death_occured"
    t.string   "manner_of_death"
    t.string   "means_of_death"
    t.string   "county"
    t.string   "agency_full_name"
    t.integer  "age"
    t.string   "caseprocesspoint"
    t.datetime "created_at",                       null: false
    t.datetime "updated_at",                       null: false
  end

end
