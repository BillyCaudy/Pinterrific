class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email
      t.string :firstname
      t.string :lastname
      t.string :password_digest
      t.string :session_token
      t.timestamps
    end

    add_index :users, :username, unique: true
    add_index :users, :email
    add_index :users, :session_token, unique: true
  end
end
