json.count @product.get_likes.size
json.myLike current_user.voted_for? @product