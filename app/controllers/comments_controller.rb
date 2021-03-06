class CommentsController < ApplicationController

  def create
    @comment = Comment.create(text: comment_params, koffee_id: params[:koffee_id].to_i)
    render json: @comment
  end

  def destroy
    comment = Comment.find_by(id: params[:id])
    comment.destroy
  end

  private

  def comment_params
    params.require(:comment)
  end
end
