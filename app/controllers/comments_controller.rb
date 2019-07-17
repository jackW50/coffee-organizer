class CommentsController < ApplicationController

  def create
    Comment.create(comment_params)
  end

  def delete
  end

  private

  def comment_params
    params.require(:comment).permit(:text, :koffee_name)
  end
end
