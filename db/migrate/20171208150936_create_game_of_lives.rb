class CreateGameOfLives < ActiveRecord::Migration[5.1]
  def change
    create_table :game_of_lives do |t|

      t.timestamps
    end
  end
end
