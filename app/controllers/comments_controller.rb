class CommentsController < ApplicationController
  def create
    @comment = Comment.create(comment_params, koffee_id: params[:id])
    render json: @comment
  end

  def delete
    comment = Comment.find_by(id: params[:comment][:id])
    comment.destroy
  end

  private

  def comment_params
    params.require(:comment).permit(:text)
  end
end
