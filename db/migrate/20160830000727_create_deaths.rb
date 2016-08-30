class CreateDeaths < ActiveRecord::Migration[5.0]
  def change
    create_table :deaths do |t|

      t.integer :record_key_number
      t.string :reporting_agency
      t.integer :date_of_birth_mm
      t.integer :date_of_birth_dd
      t.integer :date_of_birth_yyyy
      t.string :race
      t.string :gender
      t.string :custody_status
      t.integer :date_of_death_yyyy
      t.integer :date_of_death_mm
      t.integer :date_of_death_dd
      t.string :custodial_responsibility_at_time
      t.string :location_where_cause_of_death_oc
      t.string :facility_death_occured
      t.string :manner_of_death
      t.string :means_of_death
      t.string :county
      t.string :agency_full_name
      t.integer :age
      t.string :caseprocesspoint

      t.timestamps
    end
  end
end
