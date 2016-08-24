class CreateNotes < ActiveRecord::Migration
  def change
    create_table :notes do |t|
      t.string :body
      t.date :seen
      t.string :project
      t.string :user
      t.string :recur

      t.timestamps null: false
    end
  end
end
