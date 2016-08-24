class NotesController < ApplicationController

  def index
    @notes = Note.all
    render json: @notes.first
  end

end
