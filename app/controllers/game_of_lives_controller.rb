class GameOfLivesController < ApplicationController

	 before_action :init, only: [:index, :start, :clear]

  def index
    @@life = GameOfLife.new(@cols, @rows)
  end

  def start
    cells = []
    if params[:load] == 'true'
      params[:cells].permit!.to_hash.values.each do |col, row|
        cells.push([col.to_i, row.to_i])
      end
      @@life.load cells
    end
    @grid = @@life.execute
  end

  def clear
    @@life = GameOfLife.new(@cols, @rows)
  end

  private

  def init
    @rows = 6
    @cols = 6
  end
end
