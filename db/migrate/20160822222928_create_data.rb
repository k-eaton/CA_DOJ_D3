class CreateData < ActiveRecord::Migration[5.0]
  def change
    create_table :data do |t|

      # t.integer :given_id
      t.integer :year
      t.string :offense_level
      t.string :gender
      t.string :age_group
      t.string :race_or_ethnicity

      t.timestamps
    end
  end
end
