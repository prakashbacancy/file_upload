class HomesController < ApplicationController
  # before_action :authenticate_user!

  def index
    @documents = Document.where(file_type: params[:file_type])
  end
end
